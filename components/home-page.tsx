import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  FileCheck2,
  Landmark,
  Users,
} from 'lucide-react';
import { actionPoles } from '@/data/actions';
import { homeCopy, siteCopy } from '@/data/content';
import { impact } from '@/data/impact';
import { news } from '@/data/news';
import { partners } from '@/data/partners';
import { projects } from '@/data/projects';
import { team } from '@/data/team';
import type { Locale } from '@/types';
import { ActionIcon } from './action-icon';
import { SectionHeading } from './section-heading';

export function HomePage({ locale }: { locale: Locale }) {
  const home = homeCopy[locale];
  const site = siteCopy[locale];
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            {home.location}
          </p>
          <h1 id="hero-title">
            {home.titleStart} <em>{home.titleAccent}</em>
          </h1>
          <p className="hero-lead">{home.lead}</p>
          <div className="hero-actions">
            <Link className="button" href={`/${locale}/association`}>
              {home.associationCta}
              <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" href={`/${locale}/projets`}>
              {home.projectCta}
              <span>→</span>
            </Link>
          </div>
          <div className="hero-note">
            <Users size={19} />
            <p>
              <strong>{home.residentTitle}</strong>
              <br />
              {home.residentText}
            </p>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label={
            locale === 'fr'
              ? 'Identité visuelle de l’Association Tafoukt'
              : 'الهوية البصرية لجمعية تافوكت'
          }
        >
          <div className="sun-orbit orbit-one" />
          <div className="sun-orbit orbit-two" />
          <div className="logo-stage">
            <span className="logo-kicker">{home.since}</span>
            <div className="logo-frame">
              <Image
                src="/logo.jpg"
                fill
                sizes="(max-width: 768px) 70vw, 420px"
                alt={
                  locale === 'fr'
                    ? 'Emblème officiel de l’Association Tafoukt'
                    : 'الشعار الرسمي لجمعية تافوكت'
                }
                priority
              />
            </div>
            <p lang="ar" dir="rtl">
              جمعية تافوكت للرياضة والفن – أنامر
            </p>
          </div>
          <div className="floating-card">
            <Landmark size={19} />
            <strong>{home.visualTag}</strong>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label={home.beliefLabel}>
        <p>{home.beliefLabel}</p>
        <blockquote>{home.belief}</blockquote>
        <span lang="ar">من أنامر… لأنامر</span>
      </section>

      <section className="section actions-section">
        <SectionHeading
          eyebrow={home.actionEyebrow}
          title={home.actionTitle}
          intro={home.actionIntro}
        />
        <div className="action-grid action-grid-five">
          {actionPoles.map((pole) => (
            <article className="action-card" key={pole.number}>
              <div className="action-top">
                <span>{pole.number}</span>
                <ActionIcon name={pole.icon} />
              </div>
              <h3>{pole.title[locale]}</h3>
              <p>{pole.summary[locale]}</p>
              <Link
                href={`/${locale}/domaines-action`}
                aria-label={`${site.discover} ${pole.title[locale]}`}
              >
                {site.discover}
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section">
        <SectionHeading
          eyebrow={home.projectsEyebrow}
          title={home.projectsTitle}
          intro={home.projectsIntro}
          action={
            <Link className="inline-arrow" href={`/${locale}/projets`}>
              {site.allProjects}
              <ArrowUpRight size={17} />
            </Link>
          }
        />
        <div className="project-grid">
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
                <h3>{project.title[locale]}</h3>
                <p>{project.subtitle[locale]}</p>
                <ArrowUpRight size={21} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section transparency-preview">
        <SectionHeading
          eyebrow={home.impactEyebrow}
          title={home.impactTitle}
          intro={home.impactIntro}
        />
        <div className="impact-grid">
          {impact.map((item, index) => {
            const Icon = [Building2, FileCheck2, BarChart3, Landmark][index];
            return (
              <article key={item.label.fr}>
                <Icon size={21} />
                <p>{item.label[locale]}</p>
                <strong>{item.value[locale]}</strong>
              </article>
            );
          })}
        </div>
        <Link
          className="button button-outline"
          href={`/${locale}/transparence`}
        >
          {site.pages.transparence.eyebrow}
          <ArrowUpRight size={18} />
        </Link>
      </section>

      <section className="section news-preview">
        <SectionHeading eyebrow={home.newsEyebrow} title={home.newsTitle} />
        {news.length === 0 ? (
          <div className="empty-state">
            <span>Journal</span>
            <p>{home.newsEmpty}</p>
            <Link href={`/${locale}/actualites`}>
              {site.learnMore}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        ) : null}
      </section>

      <section className="section team-section">
        <SectionHeading eyebrow={home.teamEyebrow} title={home.teamTitle} />
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

      <section className="partner-cta-section">
        <div>
          <p className="eyebrow light">
            <span />
            {home.partnersEyebrow}
          </p>
          <h2>{home.partnersTitle}</h2>
          <p>{partners.length === 0 ? home.partnersEmpty : ''}</p>
        </div>
        <Link
          className="button button-gold"
          href={`/${locale}/devenir-partenaire`}
        >
          {home.partnerCta}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
