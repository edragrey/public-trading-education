// Sends the sign-in email through Resend (https://resend.com). Only the sign-in email is sent.
export async function sendLoginEmail({ to, code, link, siteName }) {
  const text = `Your ${siteName} sign-in code is ${code}

Or open this link on the same device:
${link}

The code and link work once and expire in 15 minutes. If you didn't ask for this, you can ignore this email.`;
  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:16px;line-height:1.5;color:#18211d">
<p>Your ${siteName} sign-in code is</p>
<p style="font-size:30px;font-weight:700;letter-spacing:6px;margin:8px 0 16px">${code}</p>
<p>Or <a href="${link}" style="color:#1f5f4a">open this link</a> on the same device.</p>
<p style="color:#5a6560;font-size:14px">The code and link work once and expire in 15 minutes. If you didn't ask for this, you can ignore this email.</p>
</div>`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from: process.env.EMAIL_FROM, to: [to], subject: `Your ${siteName} sign-in code: ${code}`, text, html }),
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${(await r.text()).slice(0, 200)}`);
}
