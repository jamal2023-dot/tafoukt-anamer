import type { Locale, LocalizedText } from '@/types';

export type ActionPole = {
  number: string;
  icon: 'trophy' | 'book' | 'palette' | 'heart' | 'leaf';
  title: LocalizedText;
  summary: LocalizedText;
  items: Record<Locale, string[]>;
};

export const actionPoles: ActionPole[] = [
  {
    number: '01',
    icon: 'trophy',
    title: {
      fr: 'Sport & jeunesse',
      ar: 'الرياضة والشباب',
      en: 'Sport & youth',
    },
    summary: {
      fr: 'Des espaces et des rendez-vous pour grandir, se dépasser et faire équipe.',
      ar: 'فضاءات ومواعيد رياضية للنمو وتجاوز الذات والعمل بروح الفريق.',
      en: 'Spaces and activities to grow, challenge yourself and build team spirit.',
    },
    items: {
      fr: [
        'Matchs et tournois',
        'Entraînements',
        'Activités sportives',
        'Amélioration des espaces sportifs',
      ],
      ar: [
        'مباريات ودوريات',
        'تداريب',
        'أنشطة رياضية',
        'تحسين الفضاءات الرياضية',
      ],
      en: [
        'Matches and tournaments',
        'Training sessions',
        'Sports activities',
        'Improving sports facilities',
      ],
    },
  },
  {
    number: '02',
    icon: 'book',
    title: {
      fr: 'Éducation & jeunesse',
      ar: 'التعليم والشباب',
      en: 'Education & youth',
    },
    summary: {
      fr: 'Des outils, de l’orientation et des compétences pour élargir le champ des possibles.',
      ar: 'وسائل وتوجيه ومهارات لتوسيع آفاق الأطفال والشباب.',
      en: 'Tools, guidance and skills that broaden opportunities for children and young people.',
    },
    items: {
      fr: [
        'Soutien scolaire',
        'Orientation et études',
        'Bourses et formations',
        'Encouragement scolaire',
      ],
      ar: [
        'الدعم المدرسي',
        'التوجيه والدراسة',
        'المنح والتكوين',
        'التشجيع على التمدرس',
      ],
      en: [
        'Academic support',
        'Guidance and studies',
        'Scholarships and training',
        'Encouraging school attendance',
      ],
    },
  },
  {
    number: '03',
    icon: 'palette',
    title: {
      fr: 'Art & culture',
      ar: 'الفن والثقافة',
      en: 'Art & culture',
    },
    summary: {
      fr: 'Faire vivre la créativité, la transmission et le patrimoine local.',
      ar: 'إحياء الإبداع ونقل المعرفة وصون التراث المحلي.',
      en: 'Nurturing creativity, knowledge sharing and local heritage.',
    },
    items: {
      fr: [
        'Dessin',
        'Musique',
        'Théâtre',
        'Animation culturelle et patrimoine',
      ],
      ar: ['الرسم', 'الموسيقى', 'المسرح', 'التنشيط الثقافي والتراث'],
      en: ['Drawing', 'Music', 'Theatre', 'Culture and heritage activities'],
    },
  },
  {
    number: '04',
    icon: 'heart',
    title: {
      fr: 'Solidarité & développement local',
      ar: 'التضامن والتنمية المحلية',
      en: 'Solidarity & local development',
    },
    summary: {
      fr: 'Rassembler les énergies d’ici et d’ailleurs autour des besoins concrets d’Anamer.',
      ar: 'جمع طاقات أبناء أنامر داخل المغرب وخارجه حول حاجيات ملموسة.',
      en: 'Bringing together people near and far around Anamer’s practical needs.',
    },
    items: {
      fr: [
        'Initiatives sociales',
        'Soutien aux enfants et familles',
        'Projets communautaires',
        'Mobilisation des habitants',
      ],
      ar: [
        'مبادرات اجتماعية',
        'دعم الأطفال والأسر',
        'مشاريع جماعية',
        'تعبئة السكان',
      ],
      en: [
        'Social initiatives',
        'Support for children and families',
        'Community projects',
        'Community engagement',
      ],
    },
  },
  {
    number: '05',
    icon: 'leaf',
    title: {
      fr: 'Environnement & citoyenneté',
      ar: 'البيئة والمواطنة',
      en: 'Environment & citizenship',
    },
    summary: {
      fr: 'Prendre soin des espaces communs et encourager l’engagement bénévole.',
      ar: 'العناية بالفضاءات المشتركة وتشجيع العمل التطوعي.',
      en: 'Caring for shared spaces and encouraging volunteer involvement.',
    },
    items: {
      fr: [
        'Nettoyage',
        'Plantation',
        'Protection de l’environnement',
        'Bénévolat citoyen',
      ],
      ar: ['النظافة', 'التشجير', 'حماية البيئة', 'التطوع والمواطنة'],
      en: [
        'Clean-up activities',
        'Tree planting',
        'Environmental protection',
        'Volunteering and citizenship',
      ],
    },
  },
];
