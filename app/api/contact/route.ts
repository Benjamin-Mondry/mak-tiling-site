import { NextResponse } from 'next/server'

import { quoteFormSchema } from '@/src/contact-schema'
import { siteMeta } from '@/src/data'

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = quoteFormSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          fieldErrors: parsed.error.flatten().fieldErrors,
          message: 'Please check the form and try again.',
        },
        { status: 400 },
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Quote form delivery is not configured yet. Please try again shortly.',
        },
        { status: 503 },
      )
    }

    const { name, email, phone, suburb, service, message } = parsed.data
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'MAK Tiling <onboarding@resend.dev>'

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [siteMeta.formRecipientEmail],
        reply_to: email,
        subject: `New quote request from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Suburb / area: ${suburb}`,
          `Service: ${service}`,
          '',
          'Project details:',
          message,
        ].join('\n'),
      }),
    })

    if (!resendResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: 'We could not send your message right now. Please try again shortly.',
        },
        { status: 502 },
      )
    }

    return NextResponse.json({
      ok: true,
      message: 'Thanks, your quote request has been sent.',
    })
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: 'Something went wrong while sending your message.',
      },
      { status: 500 },
    )
  }
}
