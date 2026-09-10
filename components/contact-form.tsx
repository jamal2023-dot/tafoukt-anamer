'use client';

import { type SyntheticEvent, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { contactDetails } from '@/data/contact';
import type { Locale } from '@/types';

const labels = {
  fr: {
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    subject: 'Sujet',
    message: 'Message',
    button: 'Envoyer par e-mail',
    note: 'Après validation, votre messagerie s’ouvrira avec le message adressé à l’association.',
    success:
      'Votre messagerie s’est ouverte. Vérifiez le message, puis appuyez sur Envoyer.',
    required: 'Champ requis',
  },
  ar: {
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    subject: 'الموضوع',
    message: 'الرسالة',
    button: 'إرسال عبر البريد الإلكتروني',
    note: 'بعد التحقق، سيفتح تطبيق البريد لديك برسالة موجهة إلى الجمعية.',
    success: 'تم فتح تطبيق البريد. راجع الرسالة ثم اضغط على إرسال.',
    required: 'حقل مطلوب',
  },
  en: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    subject: 'Subject',
    message: 'Message',
    button: 'Send by email',
    note: 'After validation, your email app will open with a message addressed to the association.',
    success: 'Your email app has opened. Review the message, then press Send.',
    required: 'Required field',
  },
};

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fieldValue = (field: string) => {
      const value = data.get(field);
      return typeof value === 'string' ? value : '';
    };
    const name = fieldValue('name');
    const email = fieldValue('email');
    const phone = fieldValue('phone');
    const subject = fieldValue('subject');
    const message = fieldValue('message');
    const body = [
      `${copy.name}: ${name}`,
      `${copy.email}: ${email}`,
      phone ? `${copy.phone}: ${phone}` : '',
      '',
      message,
    ]
      .filter((line) => line !== '')
      .join('\n');

    setSubmitted(true);
    window.location.href = `${contactDetails.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
