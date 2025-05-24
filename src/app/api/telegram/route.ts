import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  let data: { name: string; email: string; phone: string; what: string };

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const text =
    `📝 Cerere nouă\n\n` +
    `👤 Nume: ${data.name}\n` +
    `📧 Email: ${data.email}\n` +
    `📞 Telefon: ${data.phone}\n` +
    `📦 Ce depune: ${data.what}`;

  const tg = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    },
  );

  if (!tg.ok) {
    const err = await tg.text();
    console.error('Telegram error:', err);
    return NextResponse.json({ error: 'Telegram failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
