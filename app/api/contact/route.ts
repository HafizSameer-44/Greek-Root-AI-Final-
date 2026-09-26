import { NextResponse } from "next/server"
import { Resend } from "resend"

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing")

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const body = await request.json()

    const name = String(body.name ?? "").trim()
    const email = String(body.email ?? "").trim()
    const business = String(body.business ?? "").trim()
    const message = String(body.message ?? "").trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeBusiness = escapeHtml(business || "Not provided")
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    const { data, error } = await resend.emails.send({
      from: "Greek Root AI <contact@greekroot.org>",
      to: ["contact@greekroot.org"],
      replyTo: email,
      subject: `New Contact Form Message — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f5f7f6;font-family:Arial,Helvetica,sans-serif;color:#111;">
            <div style="max-width:680px;margin:40px auto;background:#fff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">

              <div style="padding:28px 32px;background:#111;color:#fff;">
                <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#b7f7c5;margin-bottom:10px;">
                  Greek Root AI
                </div>

                <h1 style="margin:0;font-size:26px;line-height:1.3;">
                  New Contact Form Message
                </h1>
              </div>

              <div style="padding:32px;">

                <div style="margin-bottom:20px;padding:18px;background:#f7faf8;border:1px solid #e2e8e4;border-radius:12px;">
                  <div style="font-size:12px;color:#6b7280;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;">
                    Full Name
                  </div>
                  <div style="font-size:16px;font-weight:600;">
                    ${safeName}
                  </div>
                </div>

                <div style="margin-bottom:20px;padding:18px;background:#f7faf8;border:1px solid #e2e8e4;border-radius:12px;">
                  <div style="font-size:12px;color:#6b7280;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;">
                    Email
                  </div>
                  <div style="font-size:16px;font-weight:600;">
                    <a href="mailto:${safeEmail}" style="color:#15803d;text-decoration:none;">
                      ${safeEmail}
                    </a>
                  </div>
                </div>

                <div style="margin-bottom:20px;padding:18px;background:#f7faf8;border:1px solid #e2e8e4;border-radius:12px;">
                  <div style="font-size:12px;color:#6b7280;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;">
                    Business
                  </div>
                  <div style="font-size:16px;font-weight:600;">
                    ${safeBusiness}
                  </div>
                </div>

                <div style="padding:22px;background:#fff;border:1px solid #e5e7eb;border-radius:12px;">
                  <div style="font-size:12px;color:#6b7280;margin-bottom:10px;text-transform:uppercase;letter-spacing:1px;">
                    Message
                  </div>
                  <div style="font-size:15px;line-height:1.7;color:#222;">
                    ${safeMessage}
                  </div>
                </div>

              </div>

              <div style="padding:20px 32px;background:#f7f7f7;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;">
                This message was submitted through the
                <strong style="color:#111;">Greek Root AI</strong>
                website contact form.
              </div>

            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        error: "Something went wrong while sending the message.",
      },
      { status: 500 }
    )
  }
}