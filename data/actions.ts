import type { LocalizedText } from '@/types';

export type ActionPole = {
  number: string;
  icon: 'trophy' | 'book' | 'palette' | 'heart' | 'leaf';
  title: LocalizedText;
  summary: LocalizedText;
  items: Record<'fr' | 'ar', string[]>;
};

export const actionPoles: ActionPole[] = [
  {
    number: '01',
    icon: 'trophy',
    title: { fr: 'Sport & jeunesse', ar: 'الرياضة والشباب' },
    summary: {
      fr: 'Des espaces et des rendez-vous pour grandir, se dépasser et faire équipe.',
      ar: 'فضاءات ومواعيد رياضية للنمو وتجاوز الذات والعمل بروح الفريق.',
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
    },
  },
  {
    number: '02',
    icon: 'book',
    title: { fr: 'Éducation & jeunesse', ar: 'التعليم والشباب' },
    summary: {
      fr: 'Des outils, de l’orientation et des compétences pour élargir le champ des possibles.',
      ar: 'وسائل وتوجيه ومهارات لتوسيع آفاق الأطفال والشباب.',
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
    },
  },
  {
    number: '03',
    icon: 'palette',
    title: { fr: 'Art & culture', ar: 'الفن والثقافة' },
    summary: {
      fr: 'Faire vivre la créativité, la transmission et le patrimoine local.',
      ar: 'إحياء الإبداع ونقل المعرفة وصون التراث المحلي.',
    },
    items: {
      fr: [
        'Dessin',
        'Musique',
        'Théâtre',
        'Animation culturelle et patrimoine',
      ],
      ar: ['الرسم', 'الموسيقى', 'المسرح', 'التنشيط الثقافي والتراث'],
    },
  },
  {
    number: '04',
    icon: 'heart',
    title: {
      fr: 'Solidarité & développement local',
      ar: 'التضامن والتنمية المحلية',
    },
    summary: {
      fr: 'Rassembler les énergies d’ici et d’ailleurs autour des besoins concrets d’Anamer.',
      ar: 'جمع طاقات أبناء أنامر داخل المغرب وخارجه حول حاجيات ملموسة.',
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
    },
  },
  {
    number: '05',
    icon: 'leaf',
    title: { fr: 'Environnement & citoyenneté', ar: 'البيئة والمواطنة' },
    summary: {
      fr: 'Prendre soin des espaces communs et encourager l’engagement bénévole.',
      ar: 'العناية بالفضاءات المشتركة وتشجيع العمل التطوعي.',
    },
    items: {
      fr: [
        'Nettoyage',
        'Plantation',
        'Protection de l’environnement',
        'Bénévolat citoyen',
      ],
      ar: ['النظافة', 'التشجير', 'حماية البيئة', 'التطوع والمواطنة'],
    },
  },
];
