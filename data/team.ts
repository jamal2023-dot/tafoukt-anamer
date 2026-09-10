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
    name: { fr: 'Ibrahim Ouhmid', ar: 'احميد ابراهيم', en: 'Ibrahim Ouhmid' },
    role: { fr: 'Président', ar: 'الرئيس', en: 'President' },
    image: '/images/team/ibrahim-ouhmid.png',
    imagePosition: 'center 28%',
  },
  {
    id: 'vice-president-hassan-karami',
    name: { fr: 'Hassan Karami', ar: 'كرامي حسن', en: 'Hassan Karami' },
    role: { fr: 'Vice-président', ar: 'نائب الرئيس', en: 'Vice-president' },
    image: '/images/team/hassan-karami.png',
    imagePosition: 'center 32%',
  },
  {
    id: 'treasurer-rachid-ankmar',
    name: { fr: 'Rachid Ankmar', ar: 'انكمار رشيد', en: 'Rachid Ankmar' },
    role: { fr: 'Trésorier', ar: 'الامين', en: 'Treasurer' },
    image: '/images/team/rachid-ankmar.png',
    imagePosition: 'center top',
    imageScale: 2.2,
  },
  {
    id: 'assistant-treasurer-abdellah-karami',
    name: {
      fr: 'Abdellah Karami',
      ar: 'كرامي عبد الله',
      en: 'Abdellah Karami',
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
      fr: 'El Houssine Lotfi',
      ar: 'لطفي الحسين',
      en: 'El Houssine Lotfi',
    },
    role: { fr: 'Secrétaire', ar: 'الكاتب', en: 'Secretary' },
    image: '/images/team/el-houssine-lotfi.png',
    imagePosition: 'left center',
  },
  {
    id: 'assistant-secretary-jamal-karami',
    name: { fr: 'Jamal Karami', ar: 'كرامي جمال', en: 'Jamal Karami' },
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
      fr: 'Abdellah Karami',
      ar: 'كرامي عبد الله',
      en: 'Abdellah Karami',
    },
    role: { fr: 'Conseiller', ar: 'المستشار', en: 'Advisor' },
    image: '/images/team/abdellah-karami-advisor.png',
  },
];
