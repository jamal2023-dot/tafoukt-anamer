'use client';

import { type SyntheticEvent, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { Locale } from '@/types';

const labels = {
  fr: {
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    subject: 'Sujet',
    message: 'Message',
    button: 'Préparer le message',
    note: 'Ce formulaire valide les informations localement. Aucun message n’est encore transmis.',
    success:
      'Formulaire validé. Aucun envoi n’a été effectué : la connexion à un service de messagerie reste à configurer.',
    required: 'Champ requis',
  },
  ar: {
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    subject: 'الموضوع',
    message: 'الرسالة',
    button: 'تحضير الرسالة',
    note: 'يتحقق هذا النموذج من المعلومات محلياً فقط. لا يتم إرسال أي رسالة حالياً.',
    success:
      'تم التحقق من النموذج. لم يتم الإرسال: ما زال ربط خدمة المراسلة بحاجة إلى الإعداد.',
    required: 'حقل مطلوب',
  },
};

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="field-row">
        <label>
          {copy.name}
          <input
            name="name"
            autoComplete="name"
            required
            aria-required="true"
          />
        </label>
        <label>
          {copy.email}
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
          />
        </label>
      </div>
      <div className="field-row">
        <label>
          {copy.phone}
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          {copy.subject}
          <input name="subject" required aria-required="true" />
        </label>
      </div>
      <label>
        {copy.message}
        <textarea
          name="message"
          rows={6}
          minLength={10}
          required
          aria-required="true"
        />
      </label>
      <p className="form-note">{copy.note}</p>
      <button className="button" type="submit">
        {copy.button}
      </button>
      <div className="form-status" aria-live="polite">
        {submitted ? (
          <>
            <CheckCircle2 size={19} />
            {copy.success}
          </>
        ) : null}
      </div>
    </form>
  );
}
