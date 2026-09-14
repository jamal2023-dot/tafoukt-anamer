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
    title: { fr: 'Anamer Lit', ar: 'أنامر تقرأ', en: 'Anamer Reads' },
    subtitle: {
      fr: 'Programme de soutien à l’éducation et à l’égalité des chances.',
      ar: 'برنامج لدعم التعليم وتكافؤ الفرص.',
      en: 'A programme supporting education and equal opportunity.',
    },
    summary: {
      fr: 'Accompagner la nouvelle génération avec des fournitures, des livres, du matériel pédagogique et des actions ciblées selon les besoins validés par l’école.',
      ar: 'مواكبة الجيل الجديد باللوازم والكتب والوسائل التربوية ومبادرات محددة وفق الاحتياجات التي تعتمدها المؤسسة التعليمية.',
      en: 'Supporting the next generation with supplies, books, learning materials and targeted initiatives based on needs confirmed by the school.',
    },
    status: {
      fr: 'Phase 1 · Objectif atteint',
      ar: 'المرحلة الأولى · تم بلوغ الهدف',
      en: 'Phase 1 · Target reached',
    },
    eyebrow: { fr: 'Éducation', ar: 'التعليم', en: 'Education' },
  },
  {
    slug: 'terrain-anamer-bouchfoud',
    title: {
      fr: 'Terrain Anamer–Bouchfoud',
      ar: 'ملعب أنامر–بوشفود',
      en: 'Anamer–Bouchfoud Sports Field',
    },
    subtitle: {
      fr: 'Un futur espace sportif structurant pour les enfants et les jeunes.',
      ar: 'فضاء رياضي مستقبلي مهيكل للأطفال والشباب.',
      en: 'A future community sports space for children and young people.',
    },
    summary: {
      fr: 'Préparer un terrain accueillant, sûr et durable pour les entraînements, les rencontres et la vie collective.',
      ar: 'تهيئة ملعب آمن ومستدام للتداريب واللقاءات والحياة الجماعية.',
      en: 'Creating a welcoming, safe and sustainable field for training, matches and community life.',
    },
    status: {
      fr: '89 % réalisé',
      ar: 'تم إنجاز 89٪',
      en: '89% complete',
    },
    eyebrow: {
      fr: 'Sport & jeunesse',
      ar: 'الرياضة والشباب',
      en: 'Sport & youth',
    },
  },
];
