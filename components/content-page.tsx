import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Banknote,
  BookOpen,
  Boxes,
  Camera,
  Check,
  FileText,
  HandHeart,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { actionPoles } from '@/data/actions';
import { pageDetails, siteCopy } from '@/data/content';
import { impact } from '@/data/impact';
import { news } from '@/data/news';
import { partnerLevels, partners } from '@/data/partners';
import { projects } from '@/data/projects';
import { team } from '@/data/team';
import type { Locale, PageSlug } from '@/types';
import { ActionIcon } from './action-icon';
import { ContactForm } from './contact-form';
import { SectionHeading } from './section-heading';

export function ContentPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: PageSlug;
}) {
  const site = siteCopy[locale];
  const page = site.pages[slug];
  return (
    <main id="main-content">
      <section className="page-hero">
        <nav
          className="breadcrumbs"
          aria-label={locale === 'fr' ? 'Fil d’Ariane' : 'مسار التنقل'}
        >
          <Link href={`/${locale}`}>{site.breadcrumbHome}</Link>
          <span>/</span>
          <span aria-current="page">{page.eyebrow}</span>
        </nav>
        <p className="eyebrow">
          <span />
          {page.eyebrow}
        </p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      {renderPage(locale, slug)}
    </main>
  );
}

function renderPage(locale: Locale, slug: PageSlug) {
  if (slug === 'association') return <Association locale={locale} />;
  if (slug === 'domaines-action') return <Actions locale={locale} />;
  if (slug === 'projets') return <Projects locale={locale} />;
  if (slug === 'anamer-lit') return <AnamerLit locale={locale} />;
  if (slug === 'terrain-anamer-bouchfoud') return <Terrain locale={locale} />;
  if (slug === 'actualites') return <News locale={locale} />;
  if (slug === 'transparence') return <Transparency locale={locale} />;
  if (slug === 'partenaires') return <Partners locale={locale} />;
  if (slug === 'devenir-partenaire') return <BecomePartner locale={locale} />;
  if (slug === 'soutenir') return <Support locale={locale} />;
  return <Contact locale={locale} />;
}

function Association({ locale }: { locale: Locale }) {
  const d = pageDetails[locale];
  const labels =
    locale === 'fr'
      ? ['Notre vision', 'Notre mission', 'Notre philosophie']
      : ['رؤيتنا', 'مهمتنا', 'فلسفتنا'];
  const values = [
    d.vision as string,
    d.mission as string,
    d.philosophy as string,
  ];
  return (
    <>
      <section className="section compact">
        <div className="value-grid">
          {values.map((value, i) => (
            <article key={labels[i]}>
              <span>0{i + 1}</span>
              <h2>{labels[i]}</h2>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section team-section">
        <SectionHeading
          eyebrow={locale === 'fr' ? 'Équipe actuelle' : 'الفريق الحالي'}
          title={
            locale === 'fr'
              ? 'Des rôles identifiés. Une responsabilité partagée.'
              : 'مهام واضحة ومسؤولية مشتركة.'
          }
        />
        <div className="team-grid">
          {team.map((member, index) => (
            <article key={member.name.fr}>
              <span>0{index + 1}</span>
              <div className="avatar-monogram">
                {member.name.fr
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3>{member.name[locale]}</h3>
              <p>{member.role[locale]}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Actions({ locale }: { locale: Locale }) {
  return (
    <section className="section compact">
      <div className="pillar-list">
        {actionPoles.map((pole) => (
          <article key={pole.number}>
            <div className="pillar-heading">
              <span>{pole.number}</span>
              <ActionIcon name={pole.icon} size={30} />
              <h2>{pole.title[locale]}</h2>
            </div>
            <p>{pole.summary[locale]}</p>
            <ul>
              {pole.items[locale].map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects({ locale }: { locale: Locale }) {
  const site = siteCopy[locale];
  return (
    <section className="section compact">
      <div className="project-grid project-grid-page">
        {projects.map((project, index) => (
          <Link
            className={`project-card project-card-${index + 1}`}
            href={`/${locale}/${project.slug}`}
            key={project.slug}
          >
            <div className="project-art" aria-hidden="true">
              <span>{index === 0 ? 'أ' : '◌'}</span>
            </div>
            <div className="project-content">
              <div>
                <p>{project.eyebrow[locale]}</p>
                <span>{project.status[locale]}</span>
              </div>
              <h2>{project.title[locale]}</h2>
              <p>{project.summary[locale]}</p>
              <strong>
                {site.learnMore}
                <ArrowUpRight size={18} />
              </strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AnamerLit({ locale }: { locale: Locale }) {
  const d = pageDetails[locale];
  const objectives = d.anamerObjectives as string[];
  const process = d.anamerProcess as string[];
  const schoolPhotos = [
    {
      src: '/images/anamer-lit/ecole-entree.jpg',
      alt:
        locale === 'fr'
          ? 'Entrée principale de l’école d’Anamer avec son portail bleu et ses fresques murales'
          : 'المدخل الرئيسي لمدرسة أنامر ببوابته الزرقاء ورسوماته الجدارية',
      caption: locale === 'fr' ? 'L’entrée de l’école' : 'مدخل المدرسة',
    },
    {
      src: '/images/anamer-lit/ecole-cour.jpg',
      alt:
        locale === 'fr'
          ? 'Cour de l’école d’Anamer et bâtiments scolaires devant les montagnes'
          : 'ساحة مدرسة أنامر ومبانيها الدراسية أمام الجبال',
      caption:
        locale === 'fr'
          ? 'La cour et les bâtiments scolaires'
          : 'الساحة والمباني المدرسية',
    },
    {
      src: '/images/anamer-lit/ecole-panorama.jpg',
      alt:
        locale === 'fr'
          ? 'Vue panoramique de l’école d’Anamer dans son environnement rural'
          : 'منظر بانورامي لمدرسة أنامر في محيطها القروي',
      caption:
        locale === 'fr'
          ? 'L’école dans son environnement'
          : 'المدرسة في محيطها',
    },
  ];
  return (
    <>
      <section className="section compact">
        <div className="story-grid">
          <div>
            <p className="eyebrow">
              <span />
              {locale === 'fr' ? 'Contexte' : 'السياق'}
            </p>
            <h2>
              {locale === 'fr'
                ? 'Une école, plusieurs générations, un nouvel élan.'
                : 'مدرسة وأجيال متعددة وانطلاقة جديدة.'}
            </h2>
            <p>{d.anamerContext as string}</p>
          </div>
          <aside className="beneficiary-card">
            <BookOpen size={26} />
            <strong>{d.pupils as string}</strong>
            <p>{d.pupilsNote as string}</p>
          </aside>
        </div>
      </section>
      <section className="section school-gallery-section">
        <SectionHeading
          eyebrow={locale === 'fr' ? 'Sur le terrain' : 'من الميدان'}
          title={
            locale === 'fr'
              ? 'L’école d’Anamer, telle qu’elle est aujourd’hui.'
              : 'مدرسة أنامر كما هي اليوم.'
          }
          intro={
            locale === 'fr'
              ? 'Trois vues de l’école et de son environnement immédiat, au cœur du projet Anamer Lit.'
              : 'ثلاث صور للمدرسة ومحيطها المباشر، في صميم مشروع أنامر تقرأ.'
          }
        />
        <div className="school-gallery">
          {schoolPhotos.map((photo, index) => (
            <figure
              className={`school-photo school-photo-${index + 1}`}
              key={photo.src}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  index === 0
                    ? '(max-width: 800px) 100vw, 55vw'
                    : '(max-width: 800px) 100vw, 40vw'
                }
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="section cream-section">
        <SectionHeading
          eyebrow={locale === 'fr' ? 'Objectifs' : 'الأهداف'}
          title={
            locale === 'fr'
              ? 'Répondre aux besoins validés, sans supposer.'
              : 'الاستجابة للحاجيات المعتمدة دون افتراضات.'
          }
        />
        <div className="check-grid">
          {objectives.map((item) => (
            <div key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeading
          eyebrow={locale === 'fr' ? 'Méthode' : 'المنهجية'}
          title={
            locale === 'fr'
              ? 'Un processus lisible, de la demande au bilan.'
              : 'مسار واضح من تحديد الحاجة إلى الحصيلة.'
          }
        />
        <ol className="process-list">
          {process.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

function Terrain({ locale }: { locale: Locale }) {
  const d = pageDetails[locale];
  const fields = d.terrainFields as string[];
  const site = siteCopy[locale];
  return (
    <>
      <section className="section compact">
        <div className="gallery-placeholder">
          <div>
            <Camera size={30} />
            <p>
              {locale === 'fr'
                ? 'Photos du terrain à ajouter'
                : 'صور الملعب ستضاف هنا'}
            </p>
          </div>
          <div />
          <div />
        </div>
      </section>
      <section className="section cream-section">
        <SectionHeading
          eyebrow={locale === 'fr' ? 'Suivi du projet' : 'تتبع المشروع'}
          title={
            locale === 'fr'
              ? 'Les informations seront publiées au rythme des validations.'
              : 'ستنشر المعلومات تدريجياً بعد اعتمادها.'
          }
        />
        <div className="field-grid">
          {fields.map((field) => (
            <article key={field}>
              <span>{field}</span>
              <strong>{site.toComplete}</strong>
            </article>
          ))}
        </div>
        <Link className="button" href={`/${locale}/soutenir`}>
          {site.support}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}

function News({ locale }: { locale: Locale }) {
  const categories =
    locale === 'fr'
      ? [
          'Sport',
          'Éducation',
          'Culture',
          'Solidarité',
          'Environnement',
          'Projets',
          'Association',
        ]
      : [
          'الرياضة',
          'التعليم',
          'الثقافة',
          'التضامن',
          'البيئة',
          'المشاريع',
          'الجمعية',
        ];
  return (
    <section className="section compact">
      <div className="category-row">
        {categories.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      {news.length === 0 ? (
        <div className="large-empty">
          <FileText size={34} />
          <h2>
            {locale === 'fr'
              ? 'Les premières actualités arrivent bientôt.'
              : 'ستنشر أولى المستجدات قريباً.'}
          </h2>
          <p>
            {locale === 'fr'
              ? 'Chaque publication comportera une date, une catégorie, un résumé et les médias réels associés.'
              : 'سيتضمن كل منشور تاريخاً وتصنيفاً وملخصاً ووسائط حقيقية مرتبطة به.'}
          </p>
        </div>
      ) : null}
    </section>
  );
}

function Transparency({ locale }: { locale: Locale }) {
  const site = siteCopy[locale];
  return (
    <>
      <section className="section compact">
        <div className="impact-grid page-impact">
          {impact.map((item, index) => {
            const Icon = [Banknote, FileText, ShieldCheck, Boxes][index];
            return (
              <article key={item.label.fr}>
                <Icon size={22} />
                <p>{item.label[locale]}</p>
                <strong>{item.value[locale]}</strong>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section cream-section">
        <SectionHeading
          eyebrow={locale === 'fr' ? 'Documents' : 'الوثائق'}
          title={
            locale === 'fr'
              ? 'Des justificatifs accessibles et classés par projet.'
              : 'وثائق إثبات متاحة ومرتبة حسب المشروع.'
          }
        />
        <div className="document-grid">
          {(locale === 'fr'
            ? [
                'Contributions',
                'Dépenses',
                'Factures & justificatifs',
                'Rapports',
              ]
            : ['المساهمات', 'المصاريف', 'الفواتير ووثائق الإثبات', 'التقارير']
          ).map((label) => (
            <article key={label}>
              <FileText size={21} />
              <h3>{label}</h3>
              <p>{site.noData}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Partners({ locale }: { locale: Locale }) {
  const site = siteCopy[locale];
  return (
    <section className="section compact">
      <div className="partner-levels">
        {partnerLevels.map((level) => (
          <span key={level.fr}>{level[locale]}</span>
        ))}
      </div>
      {partners.length === 0 ? (
        <div className="large-empty">
          <Building2Icon />
          <h2>
            {locale === 'fr'
              ? 'Aucun logo sans accord confirmé.'
              : 'لا شعار دون شراكة مؤكدة.'}
          </h2>
          <p>{site.pages.partenaires.intro}</p>
          <Link className="button" href={`/${locale}/devenir-partenaire`}>
            {site.pages['devenir-partenaire'].eyebrow}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      ) : null}
    </section>
  );
}

function Building2Icon() {
  return <Landmark size={34} />;
}

function BecomePartner({ locale }: { locale: Locale }) {
  const d = pageDetails[locale];
  return (
    <>
      <section className="section compact">
        <div className="option-grid">
          {(d.partnerOptions as string[]).map((item, i) => (
            <article key={item}>
              <span>0{i + 1}</span>
              <h2>{item}</h2>
            </article>
          ))}
        </div>
      </section>
      <section className="section cream-section">
        <SectionHeading
          eyebrow={locale === 'fr' ? 'Parcours partenaire' : 'مسار الشراكة'}
          title={
            locale === 'fr'
              ? 'Un cadre simple, précis et documenté.'
              : 'إطار بسيط ودقيق وموثق.'
          }
        />
        <ol className="process-list">
          {(d.partnerProcess as string[]).map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
        <Link className="button" href={`/${locale}/contact`}>
          {siteCopy[locale].contact}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}

function Support({ locale }: { locale: Locale }) {
  const d = pageDetails[locale];
  return (
    <>
      <section className="section compact">
        <div className="option-grid support-options">
          {(d.supportOptions as string[]).map((item, i) => (
            <article key={item}>
              <span>0{i + 1}</span>
              <HandHeart size={24} />
              <h2>{item}</h2>
            </article>
          ))}
        </div>
      </section>
      <section className="payment-note">
        <ShieldCheck size={30} />
        <div>
          <h2>
            {locale === 'fr'
              ? 'Aucun paiement en ligne n’est actif.'
              : 'لا توجد حالياً أي وسيلة دفع إلكترونية مفعلة.'}
          </h2>
          <p>
            {locale === 'fr'
              ? 'L’architecture pourra accueillir CMI, Stripe ou PayPal après validation des comptes officiels, des mentions légales et du processus comptable.'
              : 'يمكن للمنصة استقبال CMI أو Stripe أو PayPal لاحقاً، بعد اعتماد الحسابات الرسمية والبيانات القانونية والمسار المحاسبي.'}
          </p>
        </div>
      </section>
    </>
  );
}

function Contact({ locale }: { locale: Locale }) {
  const site = siteCopy[locale];
  const contactItems = [
    { icon: Mail, label: locale === 'fr' ? 'Email' : 'البريد الإلكتروني' },
    { icon: Phone, label: locale === 'fr' ? 'Téléphone' : 'الهاتف' },
    { icon: MapPin, label: locale === 'fr' ? 'Adresse' : 'العنوان' },
  ];
  return (
    <section className="section compact">
      <div className="contact-grid">
        <div>
          <div className="contact-cards">
            {contactItems.map(({ icon: Icon, label }) => (
              <article key={label}>
                <Icon size={20} />
                <div>
                  <span>{label}</span>
                  <strong>{site.toComplete}</strong>
                </div>
              </article>
            ))}
          </div>
          <p className="privacy-note">
            {locale === 'fr'
              ? 'Ne renseignez aucune donnée sensible. Le formulaire n’envoie rien tant qu’un service officiel n’est pas configuré.'
              : 'لا تدخل أي معلومات حساسة. لا يرسل النموذج أي بيانات قبل إعداد خدمة رسمية.'}
          </p>
        </div>
        <ContactForm locale={locale} />
      </div>
    </section>
  );
}
