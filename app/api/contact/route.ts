import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { firstName, lastName, email, phone, salon, country, license, message } = body;

    if (!firstName || !lastName || !email || !salon || !country) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const countryLabels: Record<string, string> = {
      us: 'United States', uk: 'United Kingdom', fr: 'France',
      de: 'Germany', il: 'Israel', ae: 'UAE', au: 'Australia',
      ca: 'Canada', other: 'Other',
    };

    await resend.emails.send({
      from: 'Digital Color USA <noreply@digitalcolorberlin.com>',
      to: 'benlevin@digitalcolorberlin.com',
      replyTo: email,
      subject: `New Demo Request — ${firstName} ${lastName} (${salon})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #ffffff;">
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e5e5e5;">
            <h1 style="font-size: 24px; font-weight: 700; color: #1D1D1F; margin: 0 0 4px;">New Demo Request</h1>
            <p style="font-size: 14px; color: #6E6E73; margin: 0;">Submitted via digitalcolorusa.com</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; width: 140px; font-size: 13px; font-weight: 600; color: #6E6E73; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px; color: #1D1D1F;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #6E6E73; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px; color: #1D1D1F;"><a href="mailto:${email}" style="color: #0071E3; text-decoration: none;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #6E6E73; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px; color: #1D1D1F;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #6E6E73; text-transform: uppercase; letter-spacing: 0.05em;">Salon</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px; color: #1D1D1F;">${salon}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #6E6E73; text-transform: uppercase; letter-spacing: 0.05em;">Country</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px; color: #1D1D1F;">${countryLabels[country] ?? country}</td>
            </tr>
            ${license ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #6E6E73; text-transform: uppercase; letter-spacing: 0.05em;">License</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px; color: #1D1D1F;">${license}</td>
            </tr>` : ''}
            ${message ? `
            <tr>
              <td style="padding: 12px 0; font-size: 13px; font-weight: 600; color: #6E6E73; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; font-size: 16px; color: #1D1D1F; line-height: 1.6; white-space: pre-wrap;">${message}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e5e5; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #0071E3; color: #ffffff; font-size: 15px; font-weight: 500; padding: 12px 28px; border-radius: 980px; text-decoration: none;">Reply to ${firstName}</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route]', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
