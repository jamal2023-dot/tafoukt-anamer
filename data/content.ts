import type { Locale, PageSlug } from '@/types';

export const pageSlugs: PageSlug[] = [
  'association',
  'domaines-action',
  'projets',
  'anamer-lit',
  'terrain-anamer-bouchfoud',
  'actualites',
  'transparence',
  'partenaires',
  'devenir-partenaire',
  'soutenir',
  'contact',
];

export const siteCopy = {
  fr: {
    localeName: 'Français',
    otherLocale: 'العربية',
    skip: 'Aller au contenu',
    brandLine: 'Sport · Art · Anamer',
    menu: 'Menu',
    close: 'Fermer',
    nav: [
      ['L’association', 'association'],
      ['Nos actions', 'domaines-action'],
      ['Projets', 'projets'],
      ['Anamer Lit', 'anamer-lit'],
      ['Transparence', 'transparence'],
      ['Partenaires', 'partenaires'],
    ] as Array<[string, PageSlug]>,
    support: 'Nous soutenir',
    discover: 'Découvrir',
    learnMore: 'En savoir plus',
    allProjects: 'Voir tous les projets',
    breadcrumbHome: 'Accueil',
    toComplete: 'À compléter',
    noData: 'Aucune donnée publiée pour le moment.',
    footerIntro:
      'Une association locale au service du sport, de l’éducation, de la culture, de la solidarité et de la citoyenneté à Anamer.',
    quickLinks: 'Accès rapides',
    engage: 'S’engager',
    legal: 'Informations',
    contact: 'Contact',
    rights: 'Tous droits réservés.',
    contactPending: 'Coordonnées officielles à compléter',
    pages: {
      association: {
        eyebrow: 'Qui sommes-nous ?',
        title: 'Une énergie locale, un avenir partagé.',
        intro:
          'L’Association Tafoukt pour le Sport et l’Art agit pour le développement d’Anamer avec une attention particulière portée aux enfants et aux jeunes.',
      },
      'domaines-action': {
        eyebrow: 'Notre action',
        title: 'Cinq pôles, une même ambition.',
        intro:
          'Créer des opportunités concrètes et durables en associant sport, éducation, culture, solidarité et engagement citoyen.',
      },
      projets: {
        eyebrow: 'Projets',
        title: 'Des engagements qui prennent forme.',
        intro:
          'Chaque projet part d’un besoin identifié, avance avec des étapes lisibles et rend compte des moyens mobilisés.',
      },
      'anamer-lit': {
        eyebrow: 'Projet éducation',
        title: 'Anamer Lit — أنامر تقرأ',
        intro:
          'Un programme de soutien à l’éducation et à l’égalité des chances, porté par la signature من أنامر… لأنامر.',
      },
      'terrain-anamer-bouchfoud': {
        eyebrow: 'Projet sport',
        title: 'Terrain Anamer–Bouchfoud',
        intro:
          'Un futur espace sportif structurant, accueillant et durable pour les enfants et les jeunes de la région.',
      },
      actualites: {
        eyebrow: 'Journal de terrain',
        title: 'Les nouvelles de l’association.',
        intro:
          'Suivez les projets, les activités et les temps forts à partir d’informations vérifiées par l’association.',
      },
      transparence: {
        eyebrow: 'Gouvernance',
        title: 'La confiance se construit par les preuves.',
        intro:
          'Contributions, dépenses, documents et progression des projets seront publiés ici à mesure de leur validation.',
      },
      partenaires: {
        eyebrow: 'Nos partenaires',
        title: 'Construisons un impact durable à Anamer.',
        intro:
          'Cet espace présentera uniquement les organisations dont le partenariat avec l’association est confirmé.',
      },
      'devenir-partenaire': {
        eyebrow: 'Agir ensemble',
        title: 'Votre engagement peut changer l’échelle de nos projets.',
        intro:
          'Entreprises, fondations et institutions peuvent soutenir une action précise, un programme ou une compétence utile.',
      },
      soutenir: {
        eyebrow: 'Nous soutenir',
        title: 'Chaque contribution peut devenir une action concrète.',
        intro:
          'Choisissez la forme d’engagement qui vous correspond. Aucune solution de paiement n’est activée à ce stade.',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Parlons de ce que nous pouvons construire ensemble.',
        intro:
          'Une question, une proposition ou une envie de contribuer ? Préparez votre message ici.',
      },
    } satisfies Record<
      PageSlug,
      { eyebrow: string; title: string; intro: string }
    >,
  },
  ar: {
    localeName: 'العربية',
    otherLocale: 'Français',
    skip: 'الانتقال إلى المحتوى',
    brandLine: 'الرياضة · الفن · أنامر',
    menu: 'القائمة',
    close: 'إغلاق',
    nav: [
      ['الجمعية', 'association'],
      ['مجالات العمل', 'domaines-action'],
      ['المشاريع', 'projets'],
      ['أنامر تقرأ', 'anamer-lit'],
      ['الشفافية', 'transparence'],
      ['الشركاء', 'partenaires'],
    ] as Array<[string, PageSlug]>,
    support: 'ادعمنا',
    discover: 'اكتشف',
    learnMore: 'اعرف المزيد',
    allProjects: 'كل المشاريع',
    breadcrumbHome: 'الرئيسية',
    toComplete: 'قيد الاستكمال',
    noData: 'لا توجد بيانات منشورة حالياً.',
    footerIntro:
      'جمعية محلية في خدمة الرياضة والتعليم والثقافة والتضامن والمواطنة في أنامر.',
    quickLinks: 'روابط سريعة',
    engage: 'شارك معنا',
    legal: 'معلومات',
    contact: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة.',
    contactPending: 'بيانات الاتصال الرسمية قيد الاستكمال',
    pages: {
      association: {
        eyebrow: 'من نحن؟',
        title: 'طاقة محلية، ومستقبل نبنيه معاً.',
        intro:
          'تعمل جمعية تافوكت للرياضة والفن من أجل تنمية أنامر، مع اهتمام خاص بالأطفال والشباب.',
      },
      'domaines-action': {
        eyebrow: 'عملنا',
        title: 'خمسة مجالات، وطموح واحد.',
        intro:
          'خلق فرص ملموسة ومستدامة تجمع بين الرياضة والتعليم والثقافة والتضامن والمواطنة.',
      },
      projets: {
        eyebrow: 'المشاريع',
        title: 'التزامات تتحول إلى واقع.',
        intro:
          'ينطلق كل مشروع من حاجة محددة، ويتقدم عبر مراحل واضحة مع توثيق الوسائل المعبأة.',
      },
      'anamer-lit': {
        eyebrow: 'مشروع تعليمي',
        title: 'أنامر تقرأ — Anamer Lit',
        intro: 'برنامج لدعم التعليم وتكافؤ الفرص، بشعار من أنامر… لأنامر.',
      },
      'terrain-anamer-bouchfoud': {
        eyebrow: 'مشروع رياضي',
        title: 'ملعب أنامر–بوشفود',
        intro:
          'فضاء رياضي مستقبلي مهيكل وآمن ومستدام لفائدة أطفال وشباب المنطقة.',
      },
      actualites: {
        eyebrow: 'أخبار الميدان',
        title: 'مستجدات الجمعية.',
        intro:
          'تابعوا المشاريع والأنشطة والمحطات المهمة انطلاقاً من معلومات تتحقق منها الجمعية.',
      },
      transparence: {
        eyebrow: 'الحكامة',
        title: 'الثقة تُبنى بالدلائل.',
        intro:
          'ستنشر المساهمات والمصاريف والوثائق ونسب تقدم المشاريع هنا بعد التحقق منها.',
      },
      partenaires: {
        eyebrow: 'شركاؤنا',
        title: 'لنبنِ أثراً مستداماً في أنامر.',
        intro:
          'لن يعرض هذا الفضاء إلا المؤسسات التي تم تأكيد شراكتها مع الجمعية.',
      },
      'devenir-partenaire': {
        eyebrow: 'لنعمل معاً',
        title: 'التزامكم يمكن أن يوسّع أثر مشاريعنا.',
        intro:
          'يمكن للشركات والمؤسسات دعم مبادرة محددة أو برنامج أو خبرة يحتاجها المشروع.',
      },
      soutenir: {
        eyebrow: 'ادعمنا',
        title: 'كل مساهمة يمكن أن تتحول إلى عمل ملموس.',
        intro:
          'اختر صيغة المشاركة المناسبة لك. لا توجد حالياً أي وسيلة دفع مفعلة.',
      },
      contact: {
        eyebrow: 'اتصل بنا',
        title: 'لنتحدث عما يمكننا بناؤه معاً.',
        intro: 'لديك سؤال أو اقتراح أو رغبة في المساهمة؟ حضّر رسالتك هنا.',
      },
    } satisfies Record<
      PageSlug,
      { eyebrow: string; title: string; intro: string }
    >,
  },
} satisfies Record<Locale, unknown>;

export const homeCopy = {
  fr: {
    location: 'Anamer, Souss-Massa',
    titleStart: 'Ensemble, construisons',
    titleAccent: 'l’avenir d’Anamer.',
    lead: 'Sport, éducation, culture, solidarité et engagement citoyen au service des générations d’aujourd’hui et de demain.',
    associationCta: 'Découvrir l’association',
    projectCta: 'Soutenir nos projets',
    partnerCta: 'Devenir partenaire',
    residentTitle: 'Une association portée par les habitants',
    residentText: 'pour transformer l’engagement local en impact durable.',
    since: 'Depuis 1999',
    visualTag: 'Agir ici. Construire pour demain.',
    beliefLabel: 'Notre conviction',
    belief: '« Le développement commence par les habitants de la région. »',
    actionEyebrow: 'Nos domaines d’action',
    actionTitle: 'Faire grandir les talents. Renforcer les liens.',
    actionIntro:
      'Des initiatives ancrées dans le quotidien d’Anamer, pensées avec les habitants et menées dans la transparence.',
    projectsEyebrow: 'Projets prioritaires',
    projectsTitle: 'Deux projets, une même promesse d’avenir.',
    projectsIntro:
      'L’éducation et le sport comme points d’appui pour la prochaine génération.',
    impactEyebrow: 'Impact & transparence',
    impactTitle: 'Dire ce qui est fait. Montrer comment.',
    impactIntro:
      'Aucun chiffre ne sera publié sans pièce justificative ni validation. Les données apparaîtront à mesure qu’elles seront disponibles.',
    newsEyebrow: 'Actualités',
    newsTitle: 'La vie de l’association, documentée.',
    newsEmpty: 'Les premières actualités vérifiées seront publiées ici.',
    teamEyebrow: 'L’équipe',
    teamTitle: 'Des responsabilités claires, au service d’une mission commune.',
    partnersEyebrow: 'Partenaires',
    partnersTitle: 'Construisons ensemble un impact durable à Anamer.',
    partnersEmpty: 'Aucun partenaire n’est affiché sans confirmation.',
  },
  ar: {
    location: 'أنامر، سوس ماسة',
    titleStart: 'معاً، نبني',
    titleAccent: 'مستقبل أنامر.',
    lead: 'الرياضة والتعليم والثقافة والتضامن والمواطنة في خدمة أجيال اليوم والغد.',
    associationCta: 'اكتشف الجمعية',
    projectCta: 'ادعم مشاريعنا',
    partnerCta: 'كن شريكاً',
    residentTitle: 'جمعية يقودها أبناء المنطقة',
    residentText: 'لتحويل الالتزام المحلي إلى أثر مستدام.',
    since: 'منذ 1999',
    visualTag: 'نعمل هنا. ونبني للغد.',
    beliefLabel: 'قناعتنا',
    belief: '« تبدأ التنمية من سكان المنطقة. »',
    actionEyebrow: 'مجالات عملنا',
    actionTitle: 'ننمي المواهب. ونقوي الروابط.',
    actionIntro: 'مبادرات من صميم حياة أنامر، تُصمّم مع السكان وتُنجز بشفافية.',
    projectsEyebrow: 'المشاريع ذات الأولوية',
    projectsTitle: 'مشروعان ووعد واحد للمستقبل.',
    projectsIntro: 'التعليم والرياضة ركيزتان لدعم الجيل القادم.',
    impactEyebrow: 'الأثر والشفافية',
    impactTitle: 'نوضح ما أُنجز. ونُظهر كيف.',
    impactIntro:
      'لن يُنشر أي رقم دون وثيقة إثبات ومصادقة. ستظهر البيانات تدريجياً عند توفرها.',
    newsEyebrow: 'المستجدات',
    newsTitle: 'حياة الجمعية موثقة.',
    newsEmpty: 'ستنشر هنا أولى الأخبار بعد التحقق منها.',
    teamEyebrow: 'الفريق',
    teamTitle: 'مسؤوليات واضحة في خدمة مهمة مشتركة.',
    partnersEyebrow: 'الشركاء',
    partnersTitle: 'لنبنِ معاً أثراً مستداماً في أنامر.',
    partnersEmpty: 'لا يُعرض أي شريك دون تأكيد.',
  },
} satisfies Record<Locale, Record<string, string>>;

export const pageDetails = {
  fr: {
    vision:
      'Contribuer à construire une communauté locale solidaire, dynamique et capable d’offrir davantage d’opportunités aux enfants et aux jeunes.',
    mission:
      'Mobiliser les habitants, les jeunes, les anciens élèves, la diaspora ainsi que les partenaires publics et privés autour de projets concrets, transparents et durables.',
    philosophy:
      'Nous croyons que le développement commence par les habitants de la région et que le travail sincère devient, avec le temps, un impact.',
    anamerContext:
      'La filiale scolaire d’Anamer a contribué pendant plusieurs générations à la formation des enfants de la région. Certains anciens élèves sont aujourd’hui ingénieurs, médecins, enseignants, entrepreneurs et professionnels dans différents secteurs. Une nouvelle génération y poursuit aujourd’hui sa scolarité.',
    pupils: 'Environ 24 élèves',
    pupilsNote:
      'Nombre définitif à confirmer avec l’administration de l’établissement.',
    anamerObjectives: [
      'Fournitures et cartables',
      'Matériel de géométrie et de dessin',
      'Vêtements, blouses et chaussures selon les besoins',
      'Hygiène et livres',
      'Matériel pédagogique',
      'Équipements collectifs après validation',
    ],
    anamerProcess: [
      'Identification des besoins',
      'Priorisation',
      'Budget',
      'Mobilisation',
      'Achats',
      'Distribution',
      'Justificatifs',
      'Bilan',
    ],
    terrainFields: [
      'Avancement',
      'Travaux',
      'Besoins',
      'Budget',
      'Partenaires',
      'Calendrier',
    ],
    supportOptions: [
      'Contribution financière',
      'Contribution matérielle',
      'Bénévolat',
      'Mécénat de compétences',
      'Sponsoring',
      'Prise en charge d’un projet',
    ],
    partnerOptions: [
      'Financer une étape précise',
      'Fournir du matériel utile',
      'Mobiliser des compétences',
      'Soutenir un programme dans la durée',
      'Co-construire une action locale',
    ],
    partnerProcess: [
      'Échange initial',
      'Identification du besoin',
      'Proposition documentée',
      'Convention',
      'Mise en œuvre',
      'Bilan partagé',
    ],
  },
  ar: {
    vision:
      'المساهمة في بناء مجتمع محلي متضامن وديناميكي وقادر على توفير فرص أكبر للأطفال والشباب.',
    mission:
      'تعبئة السكان والشباب والقدماء وأبناء المنطقة داخل المغرب وخارجه والشركاء العموميين والخواص حول مشاريع ملموسة وشفافة ومستدامة.',
    philosophy:
      'نؤمن بأن التنمية تبدأ من سكان المنطقة، وأن العمل الصادق يتحول مع الوقت إلى أثر.',
    anamerContext:
      'ساهمت فرعية أنامر المدرسية عبر أجيال في تعليم أطفال المنطقة. وأصبح بعض تلامذتها السابقين اليوم مهندسين وأطباء ومدرسين ومقاولين ومهنيين في قطاعات مختلفة. ويواصل جيل جديد دراسته فيها اليوم.',
    pupils: 'حوالي 24 تلميذاً',
    pupilsNote: 'العدد النهائي ينتظر تأكيد إدارة المؤسسة.',
    anamerObjectives: [
      'اللوازم والمحافظ المدرسية',
      'أدوات الهندسة والرسم',
      'الملابس والوزرات والأحذية حسب الحاجة',
      'مواد النظافة والكتب',
      'الوسائل التربوية',
      'التجهيزات الجماعية بعد المصادقة',
    ],
    anamerProcess: [
      'تحديد الحاجيات',
      'ترتيب الأولويات',
      'الميزانية',
      'التعبئة',
      'المشتريات',
      'التوزيع',
      'الوثائق المثبتة',
      'الحصيلة',
    ],
    terrainFields: [
      'نسبة التقدم',
      'الأشغال',
      'الحاجيات',
      'الميزانية',
      'الشركاء',
      'الجدول الزمني',
    ],
    supportOptions: [
      'مساهمة مالية',
      'مساهمة عينية',
      'التطوع',
      'تقديم الخبرات',
      'الرعاية',
      'التكفل بمشروع',
    ],
    partnerOptions: [
      'تمويل مرحلة محددة',
      'توفير معدات مفيدة',
      'تعبئة الخبرات',
      'دعم برنامج على المدى الطويل',
      'المشاركة في بناء مبادرة محلية',
    ],
    partnerProcess: [
      'تواصل أولي',
      'تحديد الحاجة',
      'مقترح موثق',
      'اتفاقية',
      'التنفيذ',
      'حصيلة مشتركة',
    ],
  },
} satisfies Record<Locale, Record<string, string | string[]>>;
