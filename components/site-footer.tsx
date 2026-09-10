import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { contactDetails } from '@/data/contact';
import { siteCopy } from '@/data/content';
import type { Locale } from '@/types';

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Image src="/logo.jpg" width={70} height={70} alt="" />
          <div>
            <strong>Association Tafoukt</strong>
            <p>{copy.footerIntro}</p>
          </div>
        </div>
        <div>
          <h2>{copy.quickLinks}</h2>
          <Link href={`/${locale}/association`}>
            {copy.pages.association.eyebrow}
          </Link>
          <Link href={`/${locale}/projets`}>{copy.pages.projets.eyebrow}</Link>
          <Link href={`/${locale}/transparence`}>
            {copy.pages.transparence.eyebrow}
          </Link>
        </div>
        <div>
          <h2>{copy.engage}</h2>
          <Link href={`/${locale}/devenir-partenaire`}>
            {copy.pages['devenir-partenaire'].eyebrow}
          </Link>
          <Link href={`/${locale}/soutenir`}>{copy.support}</Link>
          <Link href={`/${locale}/contact`}>{copy.contact}</Link>
        </div>
        <div className="footer-contact">
          <h2>{copy.contact}</h2>
          {contactDetails.phones.map((phone) => (
            <a href={phone.href} key={phone.href}>
              <Phone size={14} />
              <span dir="ltr">{phone.display}</span>
            </a>
          ))}
          <a
            href={contactDetails.facebook.href}
            target="_blank"
            rel="noreferrer"
          >
            Facebook <ArrowUpRight size={14} />
          </a>
          <a
            href={contactDetails.whatsapp.href}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Association Tafoukt. {copy.rights}
        </span>
        <span lang="ar">من أنامر… لأنامر</span>
      </div>
    </footer>
  );
}
