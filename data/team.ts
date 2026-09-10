import type { LocalizedText } from '@/types';

export type TeamMember = {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
};

export const team: TeamMember[] = [
  {
    id: 'president-ibrahim-ouhmid',
    name: { fr: 'Ibrahim Ouhmid', ar: 'احميد إبراهيم' },
    role: { fr: 'Président', ar: 'الرئيس' },
  },
  {
    id: 'vice-president-hassan-karami',
    name: { fr: 'Hassan Karami', ar: 'كرامي حسن' },
    role: { fr: 'Vice-président', ar: 'نائب الرئيس' },
  },
  {
    id: 'treasurer-rachid-ankar',
    name: { fr: 'Rachid Ankar', ar: 'أنكار رشيد' },
    role: { fr: 'Trésorier', ar: 'أمين المال' },
  },
  {
    id: 'assistant-treasurer-abdellah-kray',
    name: { fr: 'Abdellah Kray', ar: 'كراي عبد الله' },
    role: { fr: 'Trésorier adjoint', ar: 'نائب أمين المال' },
  },
  {
    id: 'secretary-el-houssine-lotfi',
    name: { fr: 'El Houssine Lotfi', ar: 'لطفي الحسين' },
    role: { fr: 'Secrétaire général', ar: 'الكاتب العام' },
  },
  {
    id: 'assistant-secretary-jamal-kray',
    name: { fr: 'Jamal Kray', ar: 'كراي جمال' },
    role: { fr: 'Secrétaire général adjoint', ar: 'نائب الكاتب العام' },
  },
  {
    id: 'advisor-abdellah-kray',
    name: { fr: 'Abdellah Kray', ar: 'كراي عبد الله' },
    role: { fr: 'Conseiller', ar: 'المستشار' },
  },
];
