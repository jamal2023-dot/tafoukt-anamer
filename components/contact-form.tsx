'use client';

import { type SyntheticEvent, useState } from 'react';
import { AlertCircle, CheckCircle2, LoaderCircle } from 'lucide-react';
import type { Locale } from '@/types';

const labels = {
  fr: {
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    subject: 'Sujet',
    message: 'Message',
    button: 'Envoyer le message',
    sending: 'Envoi en cours…',
    note: 'Votre message sera envoyé directement à l’association.',
    success: 'Votre message a bien été envoyé. Merci de nous avoir contactés.',
    error:
      'Le message n’a pas pu être envoyé. Réessayez dans quelques instants.',
    required: 'Champ requis',
  },
  ar: {
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    subject: 'الموضوع',
    message: 'الرسالة',
    button: 'إرسال الرسالة',
    sending: 'جارٍ الإرسال…',
    note: 'ستُرسل رسالتك مباشرة إلى الجمعية.',
    success: 'تم إرسال رسالتك بنجاح. شكراً لتواصلك معنا.',
    error: 'تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى بعد قليل.',
    required: 'حقل مطلوب',
  },
  en: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    subject: 'Subject',
    message: 'Message',
    button: 'Send message',
    sending: 'Sending…',
    note: 'Your message will be sent directly to the association.',
    success: 'Your message has been sent. Thank you for contacting us.',
    error: 'Your message could not be sent. Please try again in a moment.',
    required: 'Required field',
  },
};

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const [status, setStatus] = useState<SubmitStatus>('idle');

  async function handleSubmit(
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const fieldValue = (field: string) => {
      const value = data.get(field);
      return typeof value === 'string' ? value : '';
    };

    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locale,
          name: fieldValue('name'),
          email: fieldValue('email'),
          phone: fieldValue('phone'),
          subject: fieldValue('subject'),
          message: fieldValue('message'),
          website: fieldValue('website'),
        }),
      });

      if (!response.ok) throw new Error('Contact request failed');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate={false}
      aria-busy={status === 'sending'}
    >
      <label className="honeypot-field" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
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
      <button className="button" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <LoaderCircle className="form-spinner" size={17} />
        ) : null}
        {status === 'sending' ? copy.sending : copy.button}
      </button>
      <div className="form-status" data-state={status} aria-live="polite">
        {status === 'success' ? (
          <>
            <CheckCircle2 size={19} />
            {copy.success}
          </>
        ) : status === 'error' ? (
          <>
            <AlertCircle size={19} />
            {copy.error}
          </>
        ) : null}
      </div>
    </form>
  );
}
