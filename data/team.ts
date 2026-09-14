import type { LocalizedText } from '@/types';

export type TeamMember = {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  image?: string;
  imagePosition?: string;
  imageScale?: number;
};

export const team: TeamMember[] = [
  {
    id: 'president-ibrahim-ouhmid',
    name: { fr: 'Brahim OUHMID', ar: 'احميد ابراهيم', en: 'Brahim OUHMID' },
    role: { fr: 'Président', ar: 'الرئيس', en: 'President' },
    image: '/images/team/ibrahim-ouhmid.png',
    imagePosition: 'center 28%',
  },
  {
    id: 'vice-president-hassan-karami',
    name: { fr: 'Hassan KARAMI', ar: 'كرامي حسن', en: 'Hassan KARAMI' },
    role: { fr: 'Vice-président', ar: 'نائب الرئيس', en: 'Vice-president' },
    image: '/images/team/hassan-karami.png',
    imagePosition: 'center 32%',
  },
  {
    id: 'treasurer-rachid-ankmar',
    name: { fr: 'Rachid ANOUGMAR', ar: 'انكمار رشيد', en: 'Rachid ANOUGMAR' },
    role: { fr: 'Trésorier', ar: 'الامين', en: 'Treasurer' },
    image: '/images/team/rachid-ankmar.png',
    imagePosition: 'center top',
    imageScale: 2.2,
  },
  {
    id: 'assistant-treasurer-abdellah-karami',
    name: {
      fr: 'Abdellah KARAMI',
      ar: 'كرامي عبد الله',
      en: 'Abdellah KARAMI',
    },
    role: {
      fr: 'Trésorier adjoint',
      ar: 'نائب الامين',
      en: 'Assistant treasurer',
    },
    image: '/images/team/abdellah-karami-assistant-treasurer.png',
    imagePosition: 'center 35%',
  },
  {
    id: 'secretary-el-houssine-lotfi',
    name: {
      fr: 'Lahoucine LOTFI',
      ar: 'لطفي الحسين',
      en: 'Lahoucine LOTFI',
    },
    role: { fr: 'Secrétaire', ar: 'الكاتب', en: 'Secretary' },
    image: '/images/team/el-houssine-lotfi.png',
    imagePosition: 'left center',
  },
  {
    id: 'assistant-secretary-jamal-karami',
    name: { fr: 'Jamal KARAMI', ar: 'كرامي جمال', en: 'Jamal KARAMI' },
    role: {
      fr: 'Secrétaire adjoint',
      ar: 'نائب الكاتب',
      en: 'Assistant secretary',
    },
    image: '/images/team/jamal-karami.png',
  },
  {
    id: 'advisor-abdellah-karami',
    name: {
      fr: 'Abdellah KARAMI',
      ar: 'كرامي عبد الله',
      en: 'Abdellah KARAMI',
    },
    role: { fr: 'Conseiller', ar: 'المستشار', en: 'Advisor' },
    image: '/images/team/abdellah-karami-advisor.png',
  },
];
