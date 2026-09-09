import type { LocalizedText } from '@/types';

export type Project = {
  slug: 'anamer-lit' | 'terrain-anamer-bouchfoud';
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  status: LocalizedText;
  eyebrow: LocalizedText;
};

export const projects: Project[] = [
  {
    slug: 'anamer-lit',
    title: { fr: 'Anamer Lit', ar: 'أنامر تقرأ' },
    subtitle: {
      fr: 'Programme de soutien à l’éducation et à l’égalité des chances.',
      ar: 'برنامج لدعم التعليم وتكافؤ الفرص.',
    },
    summary: {
      fr: 'Accompagner la nouvelle génération avec des fournitures, des livres, du matériel pédagogique et des actions ciblées selon les besoins validés par l’école.',
      ar: 'مواكبة الجيل الجديد باللوازم والكتب والوسائل التربوية ومبادرات محددة وفق الاحتياجات التي تعتمدها المؤسسة التعليمية.',
    },
    status: { fr: 'En préparation', ar: 'قيد الإعداد' },
    eyebrow: { fr: 'Éducation', ar: 'التعليم' },
  },
  {
    slug: 'terrain-anamer-bouchfoud',
    title: { fr: 'Terrain Anamer–Bouchfoud', ar: 'ملعب أنامر–بوشفود' },
    subtitle: {
      fr: 'Un futur espace sportif structurant pour les enfants et les jeunes.',
      ar: 'فضاء رياضي مستقبلي مهيكل للأطفال والشباب.',
    },
    summary: {
      fr: 'Préparer un terrain accueillant, sûr et durable pour les entraînements, les rencontres et la vie collective.',
      ar: 'تهيئة ملعب آمن ومستدام للتداريب واللقاءات والحياة الجماعية.',
    },
    status: { fr: 'Données à compléter', ar: 'المعطيات قيد الاستكمال' },
    eyebrow: { fr: 'Sport & jeunesse', ar: 'الرياضة والشباب' },
  },
];
