'use client';

import { motion, MotionConfig, type Variants } from 'framer-motion';
import { Landmark, ShieldCheck, WalletCards } from 'lucide-react';
import { team, type TeamMember } from '@/data/team';
import type { Locale } from '@/types';
import { TeamPortrait } from './team-portrait';

const enter: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: -8 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: index * 0.07,
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const labels = {
  fr: {
    direction: 'Direction',
    finance: 'Pôle trésorerie',
    secretariat: 'Pôle secrétariat',
    counsel: 'Conseil',
  },
  ar: {
    direction: 'الإدارة',
    finance: 'قطب الأمانة المالية',
    secretariat: 'قطب الكتابة',
    counsel: 'الاستشارة',
  },
  en: {
    direction: 'Leadership',
    finance: 'Treasury',
    secretariat: 'Secretariat',
    counsel: 'Advisory',
  },
};

function MemberCard({
  member,
  locale,
  index,
  featured = false,
}: {
  member: TeamMember;
  locale: Locale;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      className={`org-card${featured ? ' org-card-featured' : ''}`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={enter}
      whileHover={{
        y: -9,
        rotateX: -4,
        rotateY: index % 2 === 0 ? 5 : -5,
        scale: 1.018,
        transition: { duration: 0.22 },
      }}
    >
      <span className="org-card-number">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="org-card-photo">
        <TeamPortrait large member={member} />
      </div>
      <div className="org-card-copy">
        <h3>{member.name[locale]}</h3>
        <p>{member.role[locale]}</p>
      </div>
      <span className="org-card-depth" aria-hidden="true" />
    </motion.article>
  );
}

export function OrganizationChart({ locale }: { locale: Locale }) {
  const copy = labels[locale];
  const [
    president,
    vicePresident,
    treasurer,
    assistantTreasurer,
    secretary,
    assistantSecretary,
    advisor,
  ] = team;

  return (
    <MotionConfig reducedMotion="user">
      <div className="org-chart">
        <div className="org-tier org-tier-leadership">
          <div className="org-tier-label">
            <Landmark size={16} />
            {copy.direction}
          </div>
          <MemberCard featured index={0} locale={locale} member={president} />
          <span className="org-line org-line-vertical" aria-hidden="true" />
          <MemberCard index={1} locale={locale} member={vicePresident} />
        </div>

        <div className="org-line org-line-split" aria-hidden="true" />

        <div className="org-tier org-tier-branches">
          <section className="org-branch">
            <div className="org-tier-label">
              <WalletCards size={16} />
              {copy.finance}
            </div>
            <div className="org-branch-members">
              <MemberCard index={2} locale={locale} member={treasurer} />
              <MemberCard
                index={3}
                locale={locale}
                member={assistantTreasurer}
              />
            </div>
          </section>
          <section className="org-branch">
            <div className="org-tier-label">
              <ShieldCheck size={16} />
              {copy.secretariat}
            </div>
            <div className="org-branch-members">
              <MemberCard index={4} locale={locale} member={secretary} />
              <MemberCard
                index={5}
                locale={locale}
                member={assistantSecretary}
              />
            </div>
          </section>
        </div>

        <div
          className="org-line org-line-vertical org-line-advisor"
          aria-hidden="true"
        />

        <div className="org-tier org-tier-advisor">
          <div className="org-tier-label">{copy.counsel}</div>
          <MemberCard index={6} locale={locale} member={advisor} />
        </div>
      </div>
    </MotionConfig>
  );
}
