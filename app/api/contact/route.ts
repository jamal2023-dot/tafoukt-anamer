import { Resend } from 'resend';
import type { Locale } from '@/types';

export const runtime = 'nodejs';

const locales: Locale[] = ['fr', 'ar', 'en'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const website = readField(payload.website, 200);
  if (website) return Response.json({ ok: true });

  const name = readField(payload.name, 80);
  const email = readField(payload.email, 254);
  const phone = readField(payload.phone, 40);
  const subject = readField(payload.subject, 120).replace(/[\r\n]+/g, ' ');
  const message = readField(payload.message, 5000);
  const locale = locales.includes(payload.locale as Locale)
    ? (payload.locale as Locale)
    : 'fr';

  if (
    name.length < 2 ||
    !emailPattern.test(email) ||
    subject.length < 3 ||
    message.length < 10
  ) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  if (!apiKey || !contactEmail) {
    return Response.json({ ok: false }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from:
      process.env.RESEND_FROM_EMAIL ||
      'Association Tafoukt <onboarding@resend.dev>',
    to: [contactEmail],
    replyTo: email,
    subject: `[Site Tafoukt] ${subject}`,
    text: [
      `Nom / Name: ${name}`,
      `Email: ${email}`,
      phone ? `Téléphone / Phone: ${phone}` : '',
      `Langue / Language: ${locale}`,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n'),
    tags: [{ name: 'source', value: 'contact-form' }],
  });

  if (error) return Response.json({ ok: false }, { status: 502 });

  return Response.json({ ok: true });
}
