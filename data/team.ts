import type { LocalizedText } from '@/types';

export type TeamMember = {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
};

export const team: TeamMember[] = [
  {
    id: 'president-ibrahim-ouhmid',
    name: { fr: 'Ibrahim Ouhmid', ar: 'احميد ابراهيم' },
    role: { fr: 'Président', ar: 'الرئيس' },
  },
  {
    id: 'vice-president-hassan-karami',
    name: { fr: 'Hassan Karami', ar: 'كرامي حسن' },
    role: { fr: 'Vice-président', ar: 'نائب الرئيس' },
  },
  {
    id: 'treasurer-rachid-ankmar',
    name: { fr: 'Rachid Ankmar', ar: 'انكمار رشيد' },
    role: { fr: 'Trésorier', ar: 'الامين' },
  },
  {
    id: 'assistant-treasurer-abdellah-karami',
    name: { fr: 'Abdellah Karami', ar: 'كرامي عبد الله' },
    role: { fr: 'Trésorier adjoint', ar: 'نائب الامين' },
  },
  {
    id: 'secretary-el-houssine-lotfi',
    name: { fr: 'El Houssine Lotfi', ar: 'لطفي الحسين' },
    role: { fr: 'Secrétaire', ar: 'الكاتب' },
  },
  {
    id: 'assistant-secretary-jamal-karami',
    name: { fr: 'Jamal Karami', ar: 'كرامي جمال' },
    role: { fr: 'Secrétaire adjoint', ar: 'نائب الكاتب' },
  },
  {
    id: 'advisor-abdellah-karami',
    name: { fr: 'Abdellah Karami', ar: 'كرامي عبد الله' },
    role: { fr: 'Conseiller', ar: 'المستشار' },
  },
];
