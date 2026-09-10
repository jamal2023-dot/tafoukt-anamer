'use client';

import {
  motion,
  MotionConfig,
  stagger as staggerDelay,
  type Variants,
} from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  FileCheck2,
  Landmark,
  MapPin,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: staggerDelay(0.08) } },
};

const viewport = { once: true, amount: 0.18 };

export function HomePage({ locale }: { locale: Locale }) {
  const home = homeCopy[locale];
  const site = siteCopy[locale];

  return (
    <MotionConfig reducedMotion="user">
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p className="eyebrow" variants={reveal}>
              <MapPin size={14} aria-hidden="true" />
              {home.location}
            </motion.p>
            <motion.h1 id="hero-title" variants={reveal}>
              {home.titleStart} <em>{home.titleAccent}</em>
            </motion.h1>
            <motion.p className="hero-lead" variants={reveal}>
              {home.lead}
            </motion.p>
            <motion.div className="hero-actions" variants={reveal}>
              <Link className="button" href={`/${locale}/association`}>
                {home.associationCta}
                <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link" href={`/${locale}/projets`}>
                {home.projectCta}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div className="hero-note" variants={reveal}>
              <span className="hero-note-number">01</span>
              <p>
                <strong>{home.residentTitle}</strong>
                <br />
                {home.residentText}
              </p>
            </motion.div>
          </motion.div>

          <div
            className="hero-visual"
            aria-label={
              locale === 'fr'
                ? 'Identité visuelle de l’Association Tafoukt'
                : 'الهوية البصرية لجمعية تافوكت'
            }
          >
            <div className="hero-pattern" aria-hidden="true" />
            <motion.div
              className="hero-poster"
              initial={{
                opacity: 0,
                y: 32,
                rotate: locale === 'fr' ? 2 : -2,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: locale === 'fr' ? -1 : 1,
              }}
              transition={{
                duration: 0.85,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="poster-topline">
                <span>{home.since}</span>
                <span>Souss-Massa · Maroc</span>
              </div>
              <div className="logo-frame">
                <Image
                  src="/logo.jpg"
                  fill
                  sizes="(max-width: 768px) 68vw, 360px"
                  alt={
                    locale === 'fr'
                      ? 'Emblème officiel de l’Association Tafoukt'
                      : 'الشعار الرسمي لجمعية تافوكت'
                  }
                  priority
                />
              </div>
              <p className="poster-name">
                {locale === 'fr'
                  ? 'Association Tafoukt pour le Sport et l’Art'
                  : 'جمعية تافوكت للرياضة والفن'}
              </p>
              <p className="poster-place">Anamer / أنامر</p>
            </motion.div>
            <motion.div
              className="community-note"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <Landmark size={18} />
              <span>{home.visualTag}</span>
            </motion.div>
          </div>
        </section>

        <section className="intro-strip" aria-label={home.beliefLabel}>
          <p>{home.beliefLabel}</p>
          <blockquote>{home.belief}</blockquote>
          <span lang="ar">من أنامر… لأنامر</span>
        </section>

        <motion.section
          className="section actions-section"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div variants={reveal}>
            <SectionHeading
              eyebrow={home.actionEyebrow}
              title={home.actionTitle}
              intro={home.actionIntro}
            />
          </motion.div>
          <div className="action-grid action-grid-five">
            {actionPoles.map((pole) => (
              <motion.article
                className="action-card"
                key={pole.number}
                variants={reveal}
                whileHover={{ y: -4 }}
              >
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
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section projects-section"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div variants={reveal}>
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
          </motion.div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.div key={project.slug} variants={reveal}>
                <Link
                  className={`project-card project-card-${index + 1}`}
                  href={`/${locale}/${project.slug}`}
                >
                  <div className="project-art" aria-hidden="true">
                    <span>{index === 0 ? 'أ' : '◌'}</span>
                    <small>{project.eyebrow[locale]}</small>
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
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section transparency-preview"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div variants={reveal}>
            <SectionHeading
              eyebrow={home.impactEyebrow}
              title={home.impactTitle}
              intro={home.impactIntro}
            />
          </motion.div>
          <div className="impact-grid">
            {impact.map((item, index) => {
              const Icon = [Building2, FileCheck2, BarChart3, Landmark][index];
              return (
                <motion.article key={item.label.fr} variants={reveal}>
                  <Icon size={21} />
                  <p>{item.label[locale]}</p>
                  <strong>{item.value[locale]}</strong>
                </motion.article>
              );
            })}
          </div>
          <motion.div variants={reveal}>
            <Link
              className="button button-outline"
              href={`/${locale}/transparence`}
            >
              {site.pages.transparence.eyebrow}
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.section>

        <motion.section
          className="section news-preview"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={reveal}
        >
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
        </motion.section>

        <motion.section
          className="section team-section"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div variants={reveal}>
            <SectionHeading eyebrow={home.teamEyebrow} title={home.teamTitle} />
          </motion.div>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.article key={member.name.fr} variants={reveal}>
                <span>0{index + 1}</span>
                <div className="avatar-monogram">
                  {member.name.fr
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h3>{member.name[locale]}</h3>
                  <p>{member.role[locale]}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="partner-cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div variants={reveal}>
            <p className="eyebrow light">
              <Users size={14} />
              {home.partnersEyebrow}
            </p>
            <h2>{home.partnersTitle}</h2>
            <p>{partners.length === 0 ? home.partnersEmpty : ''}</p>
          </motion.div>
          <motion.div variants={reveal}>
            <Link
              className="button button-gold"
              href={`/${locale}/devenir-partenaire`}
            >
              {home.partnerCta}
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.section>
      </main>
    </MotionConfig>
  );
}
