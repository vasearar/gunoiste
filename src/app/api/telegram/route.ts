const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: { json: () => any; }) {
  let data;

  try {
    data = await request.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  // ✨ formatează mesajul exact cum vrei să apară pe Telegram
  const text =
    `📝 Cerere nouă\n\n` +
    `👤 Nume: ${data.name}\n` +
    `📧 Email: ${data.email}\n` +
    `📞 Telefon: ${data.phone}\n` +
    `📦 Ce depune: ${data.what}`;

  const tgRes = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
      next: { revalidate: 0 },
    }
  );

  if (!tgRes.ok) {
    const err = await tgRes.text();
    console.error('Telegram error:', err);
    return new Response('Eroare la trimitere', { status: 502 });
  }

  return new Response('OK');
}
