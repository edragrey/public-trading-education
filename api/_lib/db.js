// Postgres (Neon) access. Tables are created on first use, so there is no separate migration step.
import pg from "pg";

let pool;
let ready;
export function db() {
  if (!pool) {
    pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 3, ssl: /localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL || "") ? false : { rejectUnauthorized: false } });
  }
  return pool;
}

const SCHEMA = `
create table if not exists tb_users (
  id bigserial primary key,
  email text not null unique,
  created_at timestamptz not null default now(),
  last_login_at timestamptz,
  email_updates boolean not null default false,
  email_updates_at timestamptz,
  progress jsonb not null default '{"completed":[],"quizzes":{}}'::jsonb,
  progress_at timestamptz
);
create table if not exists tb_login_codes (
  id bigserial primary key,
  email text not null,
  code_hash text not null,
  link_hash text not null unique,
  email_updates boolean not null default false,
  attempts int not null default 0,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  used_at timestamptz
);
create index if not exists tb_login_codes_email on tb_login_codes (email, created_at);
create table if not exists tb_explainer_usage (
  bucket text primary key,
  user_id bigint references tb_users(id) on delete cascade,
  day date not null default current_date,
  uses integer not null
);
create table if not exists tb_explainer_access (
  user_id bigint primary key references tb_users(id) on delete cascade,
  source_hash text not null,
  completed_at timestamptz,
  lease_token text,
  lease_at timestamptz
);
`;

export async function q(text, params) {
  if (!ready) ready = db().query(SCHEMA).catch((e) => { ready = null; throw e; });
  await ready;
  return db().query(text, params);
}
