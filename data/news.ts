import type { LocalizedText } from '@/types';

export type NewsCategory =
  | 'Sport'
  | 'Éducation'
  | 'Culture'
  | 'Solidarité'
  | 'Environnement'
  | 'Projets'
  | 'Association';

export const newsCategoryLabels: Record<NewsCategory, LocalizedText> = {
  Sport: { fr: 'Sport', ar: 'الرياضة', en: 'Sport' },
  Éducation: { fr: 'Éducation', ar: 'التعليم', en: 'Education' },
  Culture: { fr: 'Culture', ar: 'الثقافة', en: 'Culture' },
  Solidarité: { fr: 'Solidarité', ar: 'التضامن', en: 'Solidarity' },
  Environnement: { fr: 'Environnement', ar: 'البيئة', en: 'Environment' },
  Projets: { fr: 'Projets', ar: 'المشاريع', en: 'Projects' },
  Association: { fr: 'Association', ar: 'الجمعية', en: 'Association' },
};

export type NewsItem = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  content: LocalizedText;
  date: string;
  category: NewsCategory;
  sourceUrl?: string;
  image?: string;
  gallery?: string[];
};

// Publier une actualité uniquement avec un contenu, une date et des médias vérifiés.
export const news: NewsItem[] = [
  {
    slug: 'anamer-lit-resultats-phase-1',
    title: {
      fr: 'Anamer Lit : objectif atteint pour la première phase',
      ar: 'أنامر تقرأ: تم بلوغ هدف المرحلة الأولى',
      en: 'Anamer Reads: Phase One target reached',
    },
    summary: {
      fr: '9 579 DH de contributions vérifiées ont été mobilisés pour un objectif de 7 740 DH, au bénéfice de 40 élèves et d’une première dotation de 95 livres.',
      ar: 'تم جمع 9,579 درهماً من المساهمات المؤكدة مقابل هدف قدره 7,740 درهماً لفائدة 40 تلميذاً ودفعة أولى من 95 كتاباً.',
      en: 'MAD 9,579 in verified contributions was mobilised against a MAD 7,740 target, supporting 40 pupils and a first allocation of 95 books.',
    },
    content: {
      fr: 'Grâce à la mobilisation des habitants d’Anamer, de ses enfants au Maroc et à l’étranger, ainsi que de toutes les personnes solidaires, la première phase du programme de soutien scolaire 2026 a atteint et dépassé son objectif. La collecte est temporairement suspendue. Les prochaines étapes sont l’achat, la distribution puis la publication d’un bilan financier détaillé avec les justificatifs. Merci à chaque contributrice, contributeur et relais de cette initiative.',
      ar: 'بفضل تعبئة ساكنة أنامر وأبنائها داخل المغرب وخارجه، وكل المتضامنين، تم بلوغ الهدف المالي للمرحلة الأولى من برنامج الدعم المدرسي لسنة 2026 وتجاوزه. وقد تم تعليق المساهمات مؤقتاً. وستشمل الخطوات المقبلة الاقتناء والتوزيع ثم نشر حصيلة مالية مفصلة مرفقة بالإثباتات. شكراً لكل من ساهم ودعم ونشر هذه المبادرة.',
      en: 'Thanks to the mobilisation of Anamer residents, the community in Morocco and abroad, and everyone who offered support, Phase One of the 2026 school support programme reached and exceeded its target. Contributions are temporarily suspended. The next steps are purchasing, distribution, and publication of a detailed financial report with supporting documents. Thank you to everyone who contributed, supported, or shared the initiative.',
    },
    date: '2026-09-14',
    category: 'Éducation',
    image: '/images/anamer-lit/phase-1-results.png',
  },
  {
    slug: 'reprise-travaux-terrain-bouchfoud',
    title: {
      fr: 'Reprise des travaux au terrain de Bouchfoud',
      ar: 'عودة الأشغال بملعب بوشفود',
      en: 'Work resumes at the Bouchfoud sports field',
    },
    summary: {
      fr: 'Deux camions de matériau sont arrivés pour poursuivre la préparation du terrain.',
      ar: 'وصلت شاحنتان محملتان بالتوفنة لمواصلة تهيئة أرضية الملعب.',
      en: 'Two truckloads of material arrived to continue preparing the field.',
    },
    content: {
      fr: 'La publication de l’association annonce une nouvelle étape du chantier et remercie toutes les personnes qui contribuent à faire avancer ce futur espace sportif.',
      ar: 'أعلنت الجمعية عن مرحلة جديدة من الأشغال، وشكرت كل من ساهم ويساهم في إنجاز هذا الفضاء الرياضي.',
      en: 'The association announced a new stage of construction and thanked everyone helping to move this future sports space forward.',
    },
    date: '2025-07-29',
    category: 'Projets',
    sourceUrl:
      'https://www.facebook.com/TafuktanamrAssociation/posts/738074445613243',
  },
  {
    slug: 'remerciements-communaute',
    title: {
      fr: 'Une communauté mobilisée autour de Tafoukt',
      ar: 'مجتمع متضامن حول جمعية تافوكت',
      en: 'A community rallying around Tafoukt',
    },
    summary: {
      fr: 'L’association remercie les habitants qui partagent ses actions et soutiennent la dynamique bénévole.',
      ar: 'شكرت الجمعية أبناء البلدة الذين يساندون أنشطتها ويعززون روح التطوع والانتماء.',
      en: 'The association thanked residents who share its work and support its volunteer movement.',
    },
    content: {
      fr: 'La publication met en avant les messages, les images et les témoignages des habitants comme une preuve de solidarité et d’attachement à Anamer.',
      ar: 'أبرزت الجمعية رسائل وصور وشهادات أبناء البلدة باعتبارها دليلاً على التضامن والانتماء لأنامر.',
      en: 'The post highlights residents’ messages, images and testimonials as evidence of solidarity and attachment to Anamer.',
    },
    date: '2025-07-11',
    category: 'Association',
    sourceUrl:
      'https://www.facebook.com/TafuktanamrAssociation/posts/724238350330186',
  },
  {
    slug: 'terrain-bouchfoud-soixante-dix-pour-cent',
    title: {
      fr: 'Le terrain de Bouchfoud annoncé à 70 %',
      ar: 'الإعلان عن بلوغ أشغال ملعب بوشفود نسبة 70٪',
      en: 'Bouchfoud field reported at 70% completion',
    },
    summary: {
      fr: 'En mai 2025, l’association annonçait 70 % d’avancement et la nécessité d’achever la couche finale du terrain.',
      ar: 'في ماي 2025، أعلنت الجمعية بلوغ نسبة 70٪ والحاجة إلى استكمال الطبقة النهائية للملعب.',
      en: 'In May 2025, the association reported 70% progress and the need to complete the field’s final surface layer.',
    },
    content: {
      fr: 'L’objectif communiqué était d’ouvrir le terrain aux enfants et aux jeunes d’Anamer, puis d’y organiser un tournoi sportif. Ce pourcentage correspond à la situation publiée à cette date.',
      ar: 'كان الهدف المعلن هو فتح الملعب أمام أطفال وشباب أنامر ثم تنظيم دوري رياضي فيه. وتعكس هذه النسبة الوضع المنشور في ذلك التاريخ.',
      en: 'The stated goal was to open the field to Anamer’s children and young people, followed by a sports tournament. The percentage reflects the status published on that date.',
    },
    date: '2025-05-07',
    category: 'Projets',
    sourceUrl:
      'https://www.facebook.com/TafuktanamrAssociation/videos/3027060580790678',
  },
  {
    slug: 'reprise-chantier-en-images',
    title: {
      fr: 'La reprise du chantier en images',
      ar: 'استئناف الأشغال في صور',
      en: 'Construction resumes, in pictures',
    },
    summary: {
      fr: 'Une courte vidéo documente la reprise des travaux du projet sportif.',
      ar: 'يوثق مقطع قصير استئناف أشغال المشروع الرياضي.',
      en: 'A short video documents the resumption of work on the sports project.',
    },
    content: {
      fr: 'Cette publication constitue une trace visuelle de la relance du chantier du terrain Anamer–Bouchfoud.',
      ar: 'يشكل هذا المنشور توثيقاً بصرياً لاستئناف أشغال ملعب أنامر–بوشفود.',
      en: 'This post provides a visual record of work resuming on the Anamer–Bouchfoud field.',
    },
    date: '2025-05-07',
    category: 'Sport',
    sourceUrl:
      'https://www.facebook.com/TafuktanamrAssociation/videos/999084412437407',
  },
];
