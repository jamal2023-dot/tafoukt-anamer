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
    name: { fr: 'Ibrahim Ouhmid', ar: 'احميد ابراهيم' },
    role: { fr: 'Président', ar: 'الرئيس' },
    image: '/images/team/ibrahim-ouhmid.png',
    imagePosition: 'center 28%',
  },
  {
    id: 'vice-president-hassan-karami',
    name: { fr: 'Hassan Karami', ar: 'كرامي حسن' },
    role: { fr: 'Vice-président', ar: 'نائب الرئيس' },
    image: '/images/team/hassan-karami.png',
    imagePosition: 'center 32%',
  },
  {
    id: 'treasurer-rachid-ankmar',
    name: { fr: 'Rachid Ankmar', ar: 'انكمار رشيد' },
    role: { fr: 'Trésorier', ar: 'الامين' },
    image: '/images/team/rachid-ankmar.png',
    imagePosition: 'center top',
    imageScale: 2.2,
  },
  {
    id: 'assistant-treasurer-abdellah-karami',
    name: { fr: 'Abdellah Karami', ar: 'كرامي عبد الله' },
    role: { fr: 'Trésorier adjoint', ar: 'نائب الامين' },
    image: '/images/team/abdellah-karami-assistant-treasurer.png',
    imagePosition: 'center 35%',
  },
  {
    id: 'secretary-el-houssine-lotfi',
    name: { fr: 'El Houssine Lotfi', ar: 'لطفي الحسين' },
    role: { fr: 'Secrétaire', ar: 'الكاتب' },
    image: '/images/team/el-houssine-lotfi.png',
    imagePosition: 'left center',
  },
  {
    id: 'assistant-secretary-jamal-karami',
    name: { fr: 'Jamal Karami', ar: 'كرامي جمال' },
    role: { fr: 'Secrétaire adjoint', ar: 'نائب الكاتب' },
    image: '/images/team/jamal-karami.png',
  },
  {
    id: 'advisor-abdellah-karami',
    name: { fr: 'Abdellah Karami', ar: 'كرامي عبد الله' },
    role: { fr: 'Conseiller', ar: 'المستشار' },
    image: '/images/team/abdellah-karami-advisor.png',
  },
];
