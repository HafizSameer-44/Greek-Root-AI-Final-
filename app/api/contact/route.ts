import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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
    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing")

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      )
    }

    // Read request body
    const body = await request.json()

    const name = String(body.name ?? "").trim()
    const email = String(body.email ?? "").trim()
    const business = String(body.business ?? "").trim()
    const message = String(body.message ?? "").trim()

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Name, email and message are required.",
        },
        {
          status: 400,
        }
      )
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      )
    }

    // Escape user input before putting it inside HTML
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeBusiness = escapeHtml(business || "Not provided")
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Greek Root AI <contact@greekroot.org>",

      to: ["contact@greekroot.org"],

      replyTo: email,

      subject: `New Contact Form Message — ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Contact Form Message</title>
          </head>

          <body style="
            margin: 0;
            padding: 0;
            background: #f5f5f5;
            font-family: Arial, Helvetica, sans-serif;
            color: #111111;
          ">

            <div style="
              max-width: 700px;
              margin: 0 auto;
              padding: 40px 20px;
            ">

              <div style="
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 20px;
                overflow: hidden;
              ">

                <!-- Header -->
                <div style="
                  padding: 28px 30px;
                  border-bottom: 1px solid #e5e5e5;
                ">

                  <h1 style="
                    margin: 0;
                    font-size: 24px;
                    line-height: 1.3;
                    color: #111111;
                  ">
                    New Contact Form Message
                  </h1>

                  <p style="
                    margin: 8px 0 0;
                    font-size: 14px;
                    color: #777777;
                  ">
                    Greek Root AI Website
                  </p>

                </div>

                <!-- Content -->
                <div style="padding: 30px;">

                  <!-- Name -->
                  <div style="margin-bottom: 24px;">
                    <div style="
                      font-size: 12px;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 0.08em;
                      color: #777777;
                      margin-bottom: 7px;
                    ">
                      Full Name
                    </div>

                    <div style="
                      font-size: 16px;
                      color: #111111;
                    ">
                      ${safeName}
                    </div>
                  </div>

                  <!-- Email -->
                  <div style="margin-bottom: 24px;">
                    <div style="
                      font-size: 12px;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 0.08em;
                      color: #777777;
                      margin-bottom: 7px;
                    ">
                      Email
                    </div>

                    <div style="
                      font-size: 16px;
                      color: #111111;
                    ">
                      ${safeEmail}
                    </div>
                  </div>

                  <!-- Business -->
                  <div style="margin-bottom: 24px;">
                    <div style="
                      font-size: 12px;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 0.08em;
                      color: #777777;
                      margin-bottom: 7px;
                    ">
                      Business
                    </div>

                    <div style="
                      font-size: 16px;
                      color: #111111;
                    ">
                      ${safeBusiness}
                    </div>
                  </div>

                  <!-- Message -->
                  <div>
                    <div style="
                      font-size: 12px;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 0.08em;
                      color: #777777;
                      margin-bottom: 7px;
                    ">
                      Message
                    </div>

                    <div style="
                      padding: 18px;
                      background: #f7f7f7;
                      border: 1px solid #eeeeee;
                      border-radius: 12px;
                      font-size: 15px;
                      line-height: 1.7;
                      color: #222222;
                    ">
                      ${safeMessage}
                    </div>
                  </div>

                </div>

                <!-- Footer -->
                <div style="
                  padding: 20px 30px;
                  border-top: 1px solid #e5e5e5;
                  background: #fafafa;
                ">

                  <p style="
                    margin: 0;
                    font-size: 12px;
                    line-height: 1.6;
                    color: #888888;
                  ">
                    This message was submitted through the Greek Root AI
                    website contact form.
                  </p>

                </div>

              </div>

            </div>

          </body>
        </html>
      `,
    })

    // Resend returned an error
    if (error) {
      console.error("Resend error:", error)

      return NextResponse.json(
        {
          error: "Failed to send email.",
        },
        {
          status: 500,
        }
      )
    }

    // Success
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        id: data?.id,
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        error: "Something went wrong while sending the message.",
      },
      {
        status: 500,
      }
    )
  }
}