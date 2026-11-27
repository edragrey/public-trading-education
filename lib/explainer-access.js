import { createHash, randomUUID } from 'node:crypto';
import { ExplainError } from './explainer.js';

export const sourceHash = text => createHash('sha256').update(text.replace(/\s+/g, ' ').trim()).digest('hex');

// One successfully explained source per account, not a daily free allowance.
// An expiring lease prevents two concurrent requests from claiming different free sources.
export async function reserveFreeSource(uid, text, query) {
  const hash = sourceHash(text);
  const token = randomUUID();
  const result = await query(`insert into tb_explainer_access (user_id, source_hash, lease_token, lease_at)
    values ($1, $2, $3, now())
    on conflict (user_id) do update set
      source_hash = case when tb_explainer_access.completed_at is null then excluded.source_hash else tb_explainer_access.source_hash end,
      lease_token = excluded.lease_token, lease_at = now()
    where (tb_explainer_access.completed_at is null or tb_explainer_access.source_hash = excluded.source_hash)
      and (tb_explainer_access.lease_token is null or tb_explainer_access.lease_at < now() - interval '2 minutes')
    returning user_id`, [uid, hash, token]);
  if (!result.rowCount) {
    const row = (await query('select source_hash, completed_at from tb_explainer_access where user_id = $1', [uid])).rows[0];
    throw new ExplainError(row?.completed_at && row.source_hash !== hash ? 'free_limit' : 'already_processing', row?.completed_at && row.source_hash !== hash ? 402 : 409);
  }
  return { uid, token };
}

export async function finishFreeSource({ uid, token }, success, query) {
  const result = await query(`update tb_explainer_access
    set completed_at = case when $3 then coalesce(completed_at, now()) else completed_at end,
        lease_token = null, lease_at = null
    where user_id = $1 and lease_token = $2 returning user_id`, [uid, token, success]);
  if (success && !result.rowCount) throw new ExplainError('already_processing', 409);
}
