import { Resend } from 'resend'

// Lazy singleton — instantiated at request time so build doesn't require the env var
let _resend: Resend | null = null
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY)
  return _resend
}

// Basic email regex — validates format, not deliverability
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function html(fields: {
  name: string
  businessName: string
  email: string
  customerType: string
  message: string
}) {
  const { name, businessName, email, customerType, message } = fields
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:32px 24px;font-family:Georgia,serif;background:#FAF6EE;color:#0F2018;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
    <div style="background:#1B3A2D;padding:28px 32px;">
      <p style="margin:0;font-family:Georgia,serif;font-size:22px;color:#FAF6EE;font-weight:bold;">
        What Grows <em style="color:#E8B040;">in Vegas</em>
      </p>
      <p style="margin:8px 0 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#4A7C59;font-family:Arial,sans-serif;">
        New Partner Inquiry
      </p>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
        <tbody>
          ${[
            ['Name', name],
            ['Business', businessName],
            ['Email', `<a href="mailto:${email}" style="color:#C4892A;">${email}</a>`],
            ['Business Type', customerType || '—'],
          ]
            .map(
              ([label, val]) => `
          <tr>
            <td style="padding:10px 12px 10px 0;color:#6B7D72;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;vertical-align:top;white-space:nowrap;width:120px;">${label}</td>
            <td style="padding:10px 0;color:#0F2018;">${val}</td>
          </tr>
          <tr><td colspan="2" style="border-bottom:1px solid #F2EAD3;padding:0;"></td></tr>
          `
            )
            .join('')}
        </tbody>
      </table>
      <div style="margin-top:24px;">
        <p style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#6B7D72;margin:0 0 10px;font-family:Arial,sans-serif;">Message</p>
        <div style="background:#FAF6EE;border-radius:8px;padding:18px;font-size:15px;line-height:1.7;color:#0F2018;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
      </div>
    </div>
    <div style="padding:20px 32px;background:#F2EAD3;font-family:Arial,sans-serif;font-size:11px;color:#6B7D72;text-align:center;letter-spacing:0.06em;">
      Sent from whatgrowsinvegas.com contact form
    </div>
  </div>
</body>
</html>
  `.trim()
}

export async function POST(request: Request) {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, businessName, email, customerType, message, website } = body as Record<
    string,
    string
  >

  // Honeypot check — silently succeed so bots don't learn the gate
  if (website) {
    return Response.json({ success: true })
  }

  // Validate required fields
  const missing: string[] = []
  if (!name?.trim()) missing.push('name')
  if (!businessName?.trim()) missing.push('businessName')
  if (!email?.trim()) missing.push('email')
  if (!message?.trim()) missing.push('message')

  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 }
    )
  }

  if (!EMAIL_RE.test(email.trim())) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 })
  }

  try {
    const { error } = await getResend().emails.send({
      // Use Resend's sandbox sender until a verified domain is configured.
      // Replace with `noreply@yourdomain.com` once your domain is verified.
      from: 'onboarding@resend.dev',
      to: 'jon.miller.ncg@gmail.com',
      reply_to: email.trim(),
      subject: `New partner inquiry — ${businessName.trim()}`,
      html: html({
        name: name.trim(),
        businessName: businessName.trim(),
        email: email.trim(),
        customerType: customerType?.trim() ?? '',
        message: message.trim(),
      }),
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return Response.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
