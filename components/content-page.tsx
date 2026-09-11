import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Banknote,
  BookOpen,
  Boxes,
  Check,
  FileText,
  HandHeart,
  Landmark,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { actionPoles } from '@/data/actions';
import { contactDetails } from '@/data/contact';
import { pageDetails, siteCopy } from '@/data/content';
import { impact } from '@/data/impact';
import { news } from '@/data/news';
import { partnerLevels, partners } from '@/data/partners';
import { projects } from '@/data/projects';
import { team } from '@/data/team';
import type { Locale, PageSlug } from '@/types';
import { ActionIcon } from './action-icon';
import { ContactForm } from './contact-form';
import { NewsCard } from './news-card';
import { SectionHeading } from './section-heading';
import { FacebookIcon, WhatsAppIcon } from './social-icons';
import { TeamPortrait } from './team-portrait';

function tr<T>(locale: Locale, fr: T, ar: T, en: T): T {
  if (locale === 'ar') return ar;
  if (locale === 'en') return en;
  return fr;
}

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
          aria-label={tr(locale, 'Fil d’Ariane', 'مسار التنقل', 'Breadcrumb')}
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
  const labels = tr(
    locale,
    ['Notre vision', 'Notre mission', 'Notre philosophie'],
    ['رؤيتنا', 'مهمتنا', 'فلسفتنا'],
    ['Our vision', 'Our mission', 'Our philosophy'],
  );
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
          eyebrow={tr(
            locale,
            'Bureau actuel',
            'المكتب الحالي',
            'Current board',
          )}
          title={tr(
            locale,
            'Sept membres, des responsabilités clairement définies.',
            'سبعة أعضاء ومسؤوليات محددة بوضوح.',
            'Seven members with clearly defined responsibilities.',
          )}
          intro={tr(
            locale,
            'Composition du bureau communiquée par l’association.',
            'تشكيلة المكتب كما قدمتها الجمعية.',
            'Board composition provided by the association.',
          )}
        />
        <div className="team-grid bureau-grid">
          {team.map((member, index) => (
            <article key={member.id}>
              <span>0{index + 1}</span>
              <TeamPortrait member={member} />
              <div>
                <h3>{member.name[locale]}</h3>
                <p>{member.role[locale]}</p>
              </div>
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
      alt: tr(
        locale,
        'Entrée principale de l’école d’Anamer avec son portail bleu et ses fresques murales',
        'المدخل الرئيسي لمدرسة أنامر ببوابته الزرقاء ورسوماته الجدارية',
        'Main entrance to Anamer school, with its blue gate and wall murals',
      ),
      caption: tr(
        locale,
        'L’entrée de l’école',
        'مدخل المدرسة',
        'School entrance',
      ),
    },
    {
      src: '/images/anamer-lit/ecole-cour.jpg',
      alt: tr(
        locale,
        'Cour de l’école d’Anamer et bâtiments scolaires devant les montagnes',
        'ساحة مدرسة أنامر ومبانيها الدراسية أمام الجبال',
        'Anamer school courtyard and buildings in front of the mountains',
      ),
      caption: tr(
        locale,
        'La cour et les bâtiments scolaires',
        'الساحة والمباني المدرسية',
        'Courtyard and school buildings',
      ),
    },
    {
      src: '/images/anamer-lit/ecole-panorama.jpg',
      alt: tr(
        locale,
        'Vue panoramique de l’école d’Anamer dans son environnement rural',
        'منظر بانورامي لمدرسة أنامر في محيطها القروي',
        'Panoramic view of Anamer school in its rural surroundings',
      ),
      caption: tr(
        locale,
        'L’école dans son environnement',
        'المدرسة في محيطها',
        'The school and its surroundings',
      ),
    },
  ];
  return (
    <>
      <section className="section compact">
        <div className="story-grid">
          <div>
            <p className="eyebrow">
              <span />
              {tr(locale, 'Contexte', 'السياق', 'Background')}
            </p>
            <h2>
              {tr(
                locale,
                'Une école, plusieurs générations, un nouvel élan.',
                'مدرسة وأجيال متعددة وانطلاقة جديدة.',
                'One school, several generations, a new beginning.',
              )}
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
          eyebrow={tr(locale, 'Sur le terrain', 'من الميدان', 'From the field')}
          title={tr(
            locale,
            'L’école d’Anamer, telle qu’elle est aujourd’hui.',
            'مدرسة أنامر كما هي اليوم.',
            'Anamer school as it is today.',
          )}
          intro={tr(
            locale,
            'Trois vues de l’école et de son environnement immédiat, au cœur du projet Anamer Lit.',
            'ثلاث صور للمدرسة ومحيطها المباشر، في صميم مشروع أنامر تقرأ.',
            'Three views of the school and its immediate surroundings, at the heart of the Anamer Reads project.',
          )}
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
          eyebrow={tr(locale, 'Objectifs', 'الأهداف', 'Objectives')}
          title={tr(
            locale,
            'Répondre aux besoins validés, sans supposer.',
            'الاستجابة للحاجيات المعتمدة دون افتراضات.',
            'Respond to confirmed needs without making assumptions.',
          )}
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
          eyebrow={tr(locale, 'Méthode', 'المنهجية', 'Method')}
          title={tr(
            locale,
            'Un processus lisible, de la demande au bilan.',
            'مسار واضح من تحديد الحاجة إلى الحصيلة.',
            'A clear process, from identifying the need to reporting outcomes.',
          )}
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
  const values = d.terrainValues as string[];
  const site = siteCopy[locale];
  const stadiumPhases = [
    {
      number: '01',
      label: tr(
        locale,
        'Avant les travaux',
        'قبل انطلاق الأشغال',
        'Before the work',
      ),
      description: tr(
        locale,
        'Les relevés topographiques ont permis de préparer le chantier et de définir la surface à aménager.',
        'مكّنت عمليات المسح الطبوغرافي من إعداد الورش وتحديد المساحة المراد تهيئتها.',
        'Topographic surveys prepared the site and defined the area to be developed.',
      ),
      photos: [
        {
          src: '/images/terrain-anamer/01-releve-topographique.jpg',
          caption: tr(
            locale,
            'Relevé topographique du terrain',
            'المسح الطبوغرافي للملعب',
            'Topographic survey of the field',
          ),
        },
        {
          src: '/images/terrain-anamer/02-mesure-terrain.jpg',
          caption: tr(
            locale,
            'Repérage et mesure de la surface',
            'تحديد وقياس مساحة الملعب',
            'Marking and measuring the site',
          ),
        },
      ],
    },
    {
      number: '02',
      label: tr(
        locale,
        'Pendant les travaux',
        'أثناء الأشغال',
        'Work in progress',
      ),
      description: tr(
        locale,
        'Préparation du sol, terrassement, apport de matériaux et nivellement progressif du terrain.',
        'تهيئة الأرضية وأشغال الحفر وتوريد المواد والتسوية التدريجية للملعب.',
        'Ground preparation, earthworks, material delivery and progressive levelling of the field.',
      ),
      photos: [
        {
          src: '/images/terrain-anamer/03-preparation-sol.jpg',
          caption: tr(
            locale,
            'Préparation du sol',
            'تهيئة أرضية الملعب',
            'Ground preparation',
          ),
        },
        {
          src: '/images/terrain-anamer/04-terrassement-initial.jpg',
          caption: tr(
            locale,
            'Premières opérations de terrassement',
            'بداية أشغال التسوية',
            'Initial earthworks',
          ),
        },
        {
          src: '/images/terrain-anamer/05-nivellement.jpg',
          caption: tr(
            locale,
            'Nivellement mécanique de la surface',
            'التسوية الآلية لأرضية الملعب',
            'Mechanical levelling of the surface',
          ),
        },
        {
          src: '/images/terrain-anamer/06-apport-materiaux.jpg',
          caption: tr(
            locale,
            'Apport et répartition des matériaux',
            'توريد المواد وتوزيعها',
            'Delivery and spreading of materials',
          ),
        },
      ],
    },
    {
      number: '03',
      label: tr(
        locale,
        'Après le nivellement',
        'بعد التسوية',
        'After levelling',
      ),
      description: tr(
        locale,
        'Deux vues de la surface obtenue après les opérations de terrassement et de nivellement.',
        'صورتان لأرضية الملعب بعد انتهاء أشغال الحفر والتسوية.',
        'Two views of the surface after the earthworks and levelling operations.',
      ),
      photos: [
        {
          src: '/images/terrain-anamer/07-terrain-nivele.jpg',
          caption: tr(
            locale,
            'Surface du terrain après nivellement',
            'أرضية الملعب بعد التسوية',
            'The field surface after levelling',
          ),
        },
        {
          src: '/images/terrain-anamer/08-terrain-nivele-panorama.jpg',
          caption: tr(
            locale,
            'Vue panoramique du terrain aménagé',
            'منظر بانورامي للملعب بعد التهيئة',
            'Panoramic view of the prepared field',
          ),
        },
      ],
    },
  ];
  return (
    <>
      <section className="section compact stadium-gallery-section">
        <SectionHeading
          eyebrow={tr(
            locale,
            'Le chantier en images',
            'صور مراحل الأشغال',
            'Work in pictures',
          )}
          title={tr(
            locale,
            'Le stade d’Anamer, avant, pendant et après les travaux.',
            'ملعب أنامر قبل الأشغال وأثناءها وبعدها.',
            'Anamer stadium before, during and after the work.',
          )}
          intro={tr(
            locale,
            'Huit photographies documentent les principales étapes de préparation et de nivellement du terrain.',
            'توثق ثماني صور المراحل الرئيسية لتهيئة أرضية الملعب وتسويتها.',
            'Eight photographs document the main stages of preparing and levelling the field.',
          )}
        />
        <div className="stadium-timeline">
          {stadiumPhases.map((phase) => (
            <article className="stadium-phase" key={phase.number}>
              <header className="stadium-phase-header">
                <span>{phase.number}</span>
                <div>
                  <h2>{phase.label}</h2>
                  <p>{phase.description}</p>
                </div>
              </header>
              <div className="stadium-photo-grid">
                {phase.photos.map((photo, index) => (
                  <figure className="stadium-photo" key={photo.src}>
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                    />
                    <figcaption>
                      <span>
                        {phase.number}.{index + 1}
                      </span>
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section cream-section">
        <SectionHeading
          eyebrow={tr(
            locale,
            'Suivi du projet',
            'تتبع المشروع',
            'Project updates',
          )}
          title={tr(
            locale,
            'Les informations seront publiées au rythme des validations.',
            'ستنشر المعلومات تدريجياً بعد اعتمادها.',
            'Information will be published as it is verified.',
          )}
        />
        <div className="field-grid">
          {fields.map((field, index) => (
            <article key={field}>
              <span>{field}</span>
              <strong>{values[index]}</strong>
            </article>
          ))}
        </div>
        <p className="field-estimate-note">
          {tr(
            locale,
            'Estimation indicative : le budget total suppose que les 120 000 DH correspondent aux 11 % restants. Le montant final et le calendrier seront confirmés après validation.',
            'تقدير استرشادي: تفترض الميزانية الإجمالية أن مبلغ 120,000 درهم يمثل نسبة 11٪ المتبقية. وسيتم تأكيد المبلغ النهائي والجدول الزمني بعد المصادقة.',
            'Indicative estimate: the total budget assumes that MAD 120,000 represents the remaining 11%. The final amount and timeline will be confirmed after validation.',
          )}
        </p>
        <Link className="button" href={`/${locale}/soutenir`}>
          {site.support}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}

function News({ locale }: { locale: Locale }) {
  const categories = tr(
    locale,
    [
      'Sport',
      'Éducation',
      'Culture',
      'Solidarité',
      'Environnement',
      'Projets',
      'Association',
    ],
    [
      'الرياضة',
      'التعليم',
      'الثقافة',
      'التضامن',
      'البيئة',
      'المشاريع',
      'الجمعية',
    ],
    [
      'Sport',
      'Education',
      'Culture',
      'Solidarity',
      'Environment',
      'Projects',
      'Association',
    ],
  );
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
            {tr(
              locale,
              'Les premières actualités arrivent bientôt.',
              'ستنشر أولى المستجدات قريباً.',
              'The first news stories are coming soon.',
            )}
          </h2>
          <p>
            {tr(
              locale,
              'Chaque publication comportera une date, une catégorie, un résumé et les médias réels associés.',
              'سيتضمن كل منشور تاريخاً وتصنيفاً وملخصاً ووسائط حقيقية مرتبطة به.',
              'Every story will include a date, category, summary and verified media.',
            )}
          </p>
        </div>
      ) : (
        <div className="news-grid">
          {news.map((item) => (
            <NewsCard detailed item={item} locale={locale} key={item.slug} />
          ))}
        </div>
      )}
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
          eyebrow={tr(locale, 'Documents', 'الوثائق', 'Documents')}
          title={tr(
            locale,
            'Des justificatifs accessibles et classés par projet.',
            'وثائق إثبات متاحة ومرتبة حسب المشروع.',
            'Accessible supporting documents organised by project.',
          )}
        />
        <div className="document-grid">
          {tr(
            locale,
            [
              'Contributions',
              'Dépenses',
              'Factures & justificatifs',
              'Rapports',
            ],
            ['المساهمات', 'المصاريف', 'الفواتير ووثائق الإثبات', 'التقارير'],
            ['Contributions', 'Expenses', 'Invoices & receipts', 'Reports'],
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
            {tr(
              locale,
              'Aucun logo sans accord confirmé.',
              'لا شعار دون شراكة مؤكدة.',
              'No logo is displayed without a confirmed agreement.',
            )}
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
          eyebrow={tr(
            locale,
            'Parcours partenaire',
            'مسار الشراكة',
            'Partner journey',
          )}
          title={tr(
            locale,
            'Un cadre simple, précis et documenté.',
            'إطار بسيط ودقيق وموثق.',
            'A simple, precise and documented framework.',
          )}
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
            {tr(
              locale,
              'Aucun paiement en ligne n’est actif.',
              'لا توجد حالياً أي وسيلة دفع إلكترونية مفعلة.',
              'No online payment method is currently active.',
            )}
          </h2>
          <p>
            {tr(
              locale,
              'L’architecture pourra accueillir CMI, Stripe ou PayPal après validation des comptes officiels, des mentions légales et du processus comptable.',
              'يمكن للمنصة استقبال CMI أو Stripe أو PayPal لاحقاً، بعد اعتماد الحسابات الرسمية والبيانات القانونية والمسار المحاسبي.',
              'The platform can support CMI, Stripe or PayPal after official accounts, legal notices and accounting procedures have been approved.',
            )}
          </p>
        </div>
      </section>
    </>
  );
}

function Contact({ locale }: { locale: Locale }) {
  const contactItems = [
    ...contactDetails.phones.map((phone, index) => ({
      icon: Phone,
      label: tr(
        locale,
        `Téléphone ${index + 1}`,
        `الهاتف ${index + 1}`,
        `Phone ${index + 1}`,
      ),
      value: phone.display,
      href: phone.href,
      external: false,
      ltr: true,
    })),
    {
      icon: FacebookIcon,
      label: tr(locale, 'Page Facebook', 'صفحة فيسبوك', 'Facebook page'),
      value: contactDetails.facebook.display,
      href: contactDetails.facebook.href,
      external: true,
      ltr: true,
    },
    {
      icon: WhatsAppIcon,
      label: tr(
        locale,
        'Communauté WhatsApp',
        'مجتمع واتساب',
        'WhatsApp community',
      ),
      value: tr(
        locale,
        'Rejoindre la communauté',
        'انضم إلى المجتمع',
        'Join the community',
      ),
      href: contactDetails.whatsapp.href,
      external: true,
      ltr: false,
    },
  ];
  return (
    <section className="section compact">
      <div className="contact-grid">
        <div>
          <div className="contact-cards">
            {contactItems.map(
              ({ icon: Icon, label, value, href, external, ltr }) => (
                <a
                  className="contact-card"
                  href={href}
                  key={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                >
                  <Icon size={20} />
                  <div>
                    <span>{label}</span>
                    <strong dir={ltr ? 'ltr' : undefined}>{value}</strong>
                  </div>
                  <ArrowUpRight className="contact-card-arrow" size={16} />
                </a>
              ),
            )}
          </div>
          <p className="privacy-note">
            {tr(
              locale,
              'Le formulaire transmet directement votre message à l’association. Votre adresse servira uniquement à vous répondre.',
              'يرسل النموذج رسالتك مباشرة إلى الجمعية، ولن يُستخدم بريدك الإلكتروني إلا للرد عليك.',
              'The form sends your message directly to the association. Your email address is only used to reply to you.',
            )}
          </p>
        </div>
        <ContactForm locale={locale} />
      </div>
    </section>
  );
}
