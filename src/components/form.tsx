'use client';
import React, { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'error';
type Errors = { phone?: boolean };

export default function FormularDepunere() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const fd = new FormData(form);
    const body = {
      name:  (fd.get('name')  as string)?.trim(),
      email: (fd.get('email') as string)?.trim(),
      phone: (fd.get('phone') as string)?.trim(),
      what:  (fd.get('what')  as string)?.trim(),
    };

    const newErrors: Errors = {};
    if (body.phone.length < 9) newErrors.phone = true;
    setErrors(newErrors);

    if (Object.keys(newErrors).length) return;

    setStatus('sending');
    const res = await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    setStatus(res.ok ? 'ok' : 'error');
    if (res.ok) form.reset();
  }

  return (
    <section id='form' className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col text-xl w-1/2 relative">
        <h1 className="text-[#E86842] text-5xl font-medium mx-auto">Depune o cerere</h1>

        <label className="mt-6" htmlFor="name">Nume</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Mitică"
          required
          className="border-2 border-[#202020] py-2 px-4"
        />

        <label className="mt-6" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="mitica@gmail.com"
          required
          className="border-2 border-[#202020] py-2 px-4"
        />

        <label className="mt-6" htmlFor="phone">Telefon</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="067010101"
          required
          className={`border-2 py-2 px-4 ${
            errors.phone ? 'border-[#F32424]' : 'border-[#202020]'
          }`}
        />

        <label className="mt-6" htmlFor="what">Obiecte sau mobilier</label>
        <select
          id="what"
          name="what"
          required
          className="border-2 border-[#202020] py-2 px-4"
        >
          <option value="haine">Haine</option>
          <option value="mobila">Mobilă</option>
          <option value="vesela">Veselă</option>
          <option value="altele">Altele</option>
        </select>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="text-[#f1f1f1] bg-[#E86842] hover:bg-[#EB8B6E]
                     mx-auto mt-10 font-medium myshadow
                     text-2xl w-2/3 px-14 py-4 border-2 border-black"
        >
          {status === 'sending'
            ? 'Se trimite…'
            : status === 'ok'
            ? 'Trimis ✅'
            : status === 'error'
            ? 'Eroare ⛔'
            : 'Depune'}
        </button>
      </form>
    </section>
  );
}
