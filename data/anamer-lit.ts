import type { LocalizedText } from '@/types';

export const phaseOne = {
  target: 7740,
  raised: 9579,
  surplus: 1839,
  pupils: 40,
  anamerPupils: 23,
  ifranePupils: 17,
  books: 95,
  progress: 124,
} as const;

export const phaseOneCopy = {
  fr: {
    programme:
      'Programme de soutien et de réhabilitation scolaire d’Anamer 2026',
    phase: 'Phase 1 – fournitures scolaires et première dotation de livres',
    badge: 'PHASE 1 – OBJECTIF ATTEINT',
    headline: 'Résultats de la première phase',
    intro:
      'Grâce à la mobilisation collective, l’objectif financier de la première phase a été atteint et dépassé. Les achats et la distribution constituent les prochaines étapes.',
    target: 'Objectif financier',
    raised: 'Contributions vérifiées',
    surplus: 'Excédent provisoire',
    pupils: 'Élèves bénéficiaires',
    books: 'Livres prévus',
    status: 'Objectif atteint',
    statusNote: 'Contributions temporairement suspendues',
    surplusNote:
      'L’excédent provisoire n’est pas considéré comme dépensé. Il restera traçable et sera affecté uniquement après la clôture des achats et la publication des justificatifs.',
    actualExpenses: 'À publier après les achats',
    finalBalance: 'À déterminer après la clôture',
    anamer: '23 élèves de la filiale d’Anamer',
    ifrane:
      '17 élèves d’Anamer en 5e et 6e année à l’école communautaire d’Ifrane',
    nextTitle: 'Et après ?',
    nextIntro:
      'La deuxième phase sera préparée à partir des besoins scolaires confirmés. Aucune collecte pour cette phase n’est ouverte pour le moment.',
    phaseTwo: 'Phase 2 – En préparation',
    follow: 'Suivre l’avancement',
    futureNeeds: [
      'Compléter le fonds de la bibliothèque',
      'Renforcer le matériel pédagogique partagé',
      'Répondre aux besoins prioritaires confirmés par l’école',
      'Publier les achats, justificatifs et résultats avant toute nouvelle collecte',
    ],
    timeline: [
      'Besoins officiels identifiés',
      'Consultations et devis',
      'Mobilisation communautaire',
      'Objectif financier atteint',
      'Achats',
      'Distribution',
      'Bilan financier final',
      'Phase 2',
    ],
  },
  ar: {
    programme: 'برنامج دعم وتأهيل مدرسة أنامر 2026',
    phase: 'المرحلة الأولى – اللوازم المدرسية والدفعة الأولى من كتب المكتبة',
    badge: 'المرحلة الأولى – تم بلوغ الهدف',
    headline: 'نتائج المرحلة الأولى',
    intro:
      'بفضل التعبئة الجماعية، تم بلوغ الهدف المالي للمرحلة الأولى وتجاوزه. وتبقى عمليتا الاقتناء والتوزيع هما الخطوتان المقبلتان.',
    target: 'الهدف المالي',
    raised: 'المساهمات المؤكدة',
    surplus: 'الفائض المؤقت',
    pupils: 'التلاميذ المستفيدون',
    books: 'الكتب المبرمجة',
    status: 'تم بلوغ الهدف',
    statusNote: 'تم تعليق المساهمات مؤقتاً',
    surplusNote:
      'لا يعتبر الفائض المؤقت مبلغاً مصروفاً. وسيظل موثقاً ولن يتم تخصيصه إلا بعد إغلاق المشتريات ونشر الإثباتات.',
    actualExpenses: 'ستنشر بعد الاقتناء',
    finalBalance: 'سيحدد بعد الإغلاق',
    anamer: '23 تلميذاً بفرعية أنامر',
    ifrane:
      '17 تلميذاً من أنامر بالسنتين الخامسة والسادسة بالمدرسة الجماعاتية بإفران',
    nextTitle: 'وماذا بعد؟',
    nextIntro:
      'سيتم إعداد المرحلة الثانية انطلاقاً من الحاجيات المدرسية المؤكدة. ولا توجد حالياً أي حملة جمع تبرعات لهذه المرحلة.',
    phaseTwo: 'المرحلة الثانية – قيد الإعداد',
    follow: 'تتبع التقدم',
    futureNeeds: [
      'استكمال رصيد المكتبة',
      'تعزيز الوسائل التربوية المشتركة',
      'الاستجابة للحاجيات ذات الأولوية التي تؤكدها المدرسة',
      'نشر المشتريات والإثباتات والنتائج قبل أي حملة جديدة',
    ],
    timeline: [
      'تحديد الحاجيات الرسمية',
      'الاستشارات وعروض الأسعار',
      'التعبئة المجتمعية',
      'بلوغ الهدف المالي',
      'المشتريات',
      'التوزيع',
      'الحصيلة المالية النهائية',
      'المرحلة الثانية',
    ],
  },
  en: {
    programme: 'Anamer School Support and Rehabilitation Programme 2026',
    phase: 'Phase 1 – school supplies and the first library book allocation',
    badge: 'PHASE 1 – TARGET REACHED',
    headline: 'Phase One Results',
    intro:
      'Thanks to the collective effort, the Phase One financial target was reached and exceeded. Purchasing and distribution are the next steps.',
    target: 'Financial target',
    raised: 'Verified contributions',
    surplus: 'Provisional surplus',
    pupils: 'Pupils supported',
    books: 'Books planned',
    status: 'Target reached',
    statusNote: 'Contributions temporarily suspended',
    surplusNote:
      'The provisional surplus is not treated as spent. It will remain traceable and will only be allocated after purchases are closed and supporting documents are published.',
    actualExpenses: 'To be published after purchases',
    finalBalance: 'To be determined after closing',
    anamer: '23 pupils at the Anamer school branch',
    ifrane: '17 Anamer pupils in Years 5 and 6 at the Ifrane community school',
    nextTitle: 'What comes next?',
    nextIntro:
      'Phase Two will be prepared from confirmed school needs. No fundraising is open for this phase at present.',
    phaseTwo: 'Phase 2 – In preparation',
    follow: 'Follow progress',
    futureNeeds: [
      'Add to the library collection',
      'Strengthen shared teaching resources',
      'Address priority needs confirmed by the school',
      'Publish purchases, receipts and results before any new collection',
    ],
    timeline: [
      'Official needs identified',
      'Consultations and quotations',
      'Community mobilisation',
      'Financial target reached',
      'Purchases',
      'Distribution',
      'Final financial report',
      'Phase 2',
    ],
  },
} satisfies Record<string, Record<string, string | string[]>>;

export const phaseOneImpact: Array<{
  label: LocalizedText;
  value: LocalizedText;
}> = [
  {
    label: {
      fr: 'Objectif financier',
      ar: 'الهدف المالي',
      en: 'Financial target',
    },
    value: { fr: '7 740 DH', ar: '7,740 درهم', en: 'MAD 7,740' },
  },
  {
    label: {
      fr: 'Contributions vérifiées',
      ar: 'المساهمات المؤكدة',
      en: 'Verified contributions',
    },
    value: { fr: '9 579 DH', ar: '9,579 درهم', en: 'MAD 9,579' },
  },
  {
    label: {
      fr: 'Excédent provisoire',
      ar: 'الفائض المؤقت',
      en: 'Provisional surplus',
    },
    value: { fr: '1 839 DH', ar: '1,839 درهم', en: 'MAD 1,839' },
  },
  {
    label: {
      fr: 'Progression financière',
      ar: 'نسبة بلوغ الهدف',
      en: 'Funding progress',
    },
    value: { fr: '124 %', ar: '124٪', en: '124%' },
  },
];
