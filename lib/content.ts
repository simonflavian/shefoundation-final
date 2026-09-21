export type Lang = 'en' | 'sw'

export const images = {
  logo: '/images/logo.webp',
  hero: '/images/wedo1.webp',
  heroAlt: '/images/wedo3.webp',
  access: '/images/image1.webp',
  awareness: '/images/image2.webp',
  empower: '/images/image3.webp',
  resources: '/images/image4.webp',
  partner: '/images/home1.webp',
  community: '/images/wedo2.webp',
  aboutHero: '/images/about-hero.webp',
  newsHero: '/images/news-hero.webp',
  dignityKit: '/images/menstrual-dignity-wheelchair.webp',
  inclusiveClassroom: '/images/classroom-inclusion.webp',
  groupStudy: '/images/group-study.webp',
  portraitGirl: '/images/portrait-girl.webp',
  volunteers: '/images/community-volunteers.webp',
}

export const teamPhotos = {
  nshoma: '/images/team/Team2.webp',
  mwajuma: '/images/team/Team1.webp',
  lulu: '/images/team/Team4.webp',
  glory: '/images/team/Team5.webp',
  abdulsalaam: '/images/team/Team3.webp',
}

export const regions = ['Iringa', 'Njombe', 'Mbeya', 'Morogoro', 'Songwe']

export const contactInfo = {
  email: 'info@shefoundation.or.tz',
  phone: '+255 754 687 475',
  phoneHref: 'tel:+255754687475',
  phone2: '+255 712 336 664',
  phone2Href: 'tel:+255712336664',
  whatsapp: 'https://wa.me/255754687475',
  instagram: 'https://www.instagram.com/shefoundation_tanzania',
  hours: 'Mon–Fri, 08:00–17:00',
  location: 'Dar es Salaam, Tanzania',
}

export const bankDetails = {
  bankName: 'CRDB Bank',
  accountName: 'She Foundation',
  accountNumber: '10242620564',
}

export const common = {
  en: {
    nav: { home: 'Home', about: 'About Us', work: 'What We Do', involved: 'Get Involved', volunteer: 'Become a Volunteer', partner: 'Become a Partner', news: 'News & Insights', contact: 'Contact', donate: 'Donate' },
    topbar: { call: 'Call us', email: 'Email us', search: 'Search the site', searchPlaceholder: 'Search pages…', searchEmpty: 'No matches. Try “volunteer” or “donate”.', lang: 'Language' },
    footer: {
      tagline: 'Social Impact · Health Care · Education',
      connect: 'Connect',
      explore: 'Explore',
      takeAction: 'Take action',
      newsletterTitle: 'Stay connected',
      newsletterText: 'Get occasional updates on our programs and impact across Tanzania.',
      newsletterPlaceholder: 'Your email address',
      newsletterButton: 'Subscribe',
      rights: 'SHE Foundation Tanzania. Made for dignity and inclusion.',
      credit: 'Website by Tech IQ Softwares',
    },
    whatsapp: { aria: 'Chat with SHE Foundation on WhatsApp', tooltip: 'Chat with us' },
    misc: { readMore: 'Read more', learnMore: 'Learn more', backToTop: 'Back to top', regionsServed: 'Regions we serve', registered: 'Registered NGO · Tanzania · 2023' },
  },
  sw: {
    nav: { home: 'Nyumbani', about: 'Kuhusu Sisi', work: 'Tunachofanya', involved: 'Shiriki Nasi', volunteer: 'Kuwa Mjitolea', partner: 'Kuwa Mshirika', news: 'Habari na Maarifa', contact: 'Wasiliana Nasi', donate: 'Changia' },
    topbar: { call: 'Piga simu', email: 'Tuma barua pepe', search: 'Tafuta kwenye tovuti', searchPlaceholder: 'Tafuta kurasa…', searchEmpty: 'Hakuna matokeo. Jaribu “mjitolea” au “changia”.', lang: 'Lugha' },
    footer: {
      tagline: 'Athari za Kijamii · Huduma za Afya · Elimu',
      connect: 'Wasiliana',
      explore: 'Vipengele',
      takeAction: 'Chukua Hatua',
      newsletterTitle: 'Baki karibu nasi',
      newsletterText: 'Pata taarifa za mara kwa mara kuhusu miradi na mafanikio yetu nchini Tanzania.',
      newsletterPlaceholder: 'Barua pepe yako',
      newsletterButton: 'Jiunge',
      rights: 'SHE Foundation Tanzania. Imetengenezwa kwa ajili ya heshima na ujumuishaji.',
      credit: 'Tovuti imetengenezwa na Tech IQ Softwares',
    },
    whatsapp: { aria: 'Ongea na SHE Foundation kupitia WhatsApp', tooltip: 'Ongea nasi' },
    misc: { readMore: 'Soma zaidi', learnMore: 'Jifunze zaidi', backToTop: 'Rudi juu', regionsServed: 'Mikoa tunayofikia', registered: 'Asasi Isiyo ya Kiserikali Iliyosajiliwa · Tanzania · 2023' },
  },
} as const

export const searchIndex = [
  { href: '/', label: { en: 'Home', sw: 'Nyumbani' }, keywords: 'home nyumbani start' },
  { href: '/about', label: { en: 'About Us', sw: 'Kuhusu Sisi' }, keywords: 'about story mission vision team kuhusu historia' },
  { href: '/what-we-do', label: { en: 'What We Do', sw: 'Tunachofanya' }, keywords: 'programs work wash menstrual health kazi programu' },
  { href: '/volunteer', label: { en: 'Become a Volunteer', sw: 'Kuwa Mjitolea' }, keywords: 'volunteer join help mjitolea kusaidia' },
  { href: '/partner', label: { en: 'Become a Partner', sw: 'Kuwa Mshirika' }, keywords: 'partner corporate institution mshirika' },
  { href: '/news-and-insights', label: { en: 'News & Insights', sw: 'Habari na Maarifa' }, keywords: 'news stories insights blog habari makala' },
  { href: '/contact', label: { en: 'Contact', sw: 'Wasiliana Nasi' }, keywords: 'contact email phone location wasiliana simu' },
  { href: '/donate', label: { en: 'Donate', sw: 'Changia' }, keywords: 'donate give bank transfer changia mchango' },
]

export const home = {
  en: {
    hero: {
      eyebrow: 'Inclusion is a right, not a privilege',
      title: 'Every girl deserves to learn, grow, and thrive with dignity.',
      intro: 'SHE Foundation Tanzania promotes menstrual health and dignity for girls with disabilities — advancing access, education, and inclusion in communities too often left behind.',
      primary: 'Support our mission',
      secondary: 'Discover our work',
      badgeNumber: '2023',
      badgeText: 'Year SHE Foundation was registered as an NGO in Tanzania',
    },
    founding: {
      kicker: 'Who we are',
      title: 'Changing the story, one girl at a time.',
      text1: 'SHE Foundation stands for Social Impact, Health Care and Education. We are a legally registered NGO dedicated to ensuring no girl is left behind due to a lack of menstrual health support — with a particular focus on girls with disabilities.',
      text2: 'It began in 2013, when our founder’s mother, a child-protection and human-rights advocate, visited a special needs school in Iringa and witnessed first-hand the barriers disabled girls faced in managing their periods. What started as personal donations of pads, wheelchairs, and school materials has grown into a national mission.',
      quote: 'Inclusion is not a promise for tomorrow. It is a responsibility we carry today.',
      quoteAuthor: 'SHE Foundation Tanzania',
      link: 'Our full story',
    },
    pillars: {
      kicker: 'Our focus areas',
      title: 'Practical action. Lasting change.',
      text: 'We work alongside communities, schools, government, and partners across five regions to guarantee menstrual dignity and inclusive education.',
      items: [
        { title: 'Providing access', text: 'Safe menstrual products and accessible WASH facilities in schools.' },
        { title: 'Raising awareness', text: 'Community outreach and education that dismantles stigma.' },
        { title: 'Empowering girls', text: 'Training, mentorship, and advocacy that build confidence and dignity.' },
        { title: 'Sharing resources', text: 'Inclusive training handbooks for schools, volunteers, and parents.' },
      ],
    },
    challenge: {
      kicker: 'The challenge',
      title: 'Period poverty should never decide who gets an education.',
      text: 'Limited access to products, private facilities, and inclusive support creates real barriers to learning — especially for adolescent girls with disabilities.',
      stats: [
        { value: 34, suffix: '%', label: 'had no private changing rooms or clean toilets', source: 'NIMR, 2021' },
        { value: 26, suffix: '%', label: 'feared embarrassment from leaking', source: 'NIMR, 2021' },
        { value: 15.3, suffix: '%', label: 'missed school during their cycle', source: 'UNICEF' },
        { value: 30, suffix: '%', label: 'missed school due to lack of pads', source: 'UNICEF' },
      ],
    },
    journey: {
      kicker: 'Our journey',
      title: 'A movement built one step at a time.',
      items: [
        { year: '2013', title: 'A visit that changed everything', text: 'A visit to a special needs school in Iringa revealed the barriers disabled girls face in managing their periods.' },
        { year: '2023', title: 'Officially registered', text: 'SHE Foundation became a legally registered NGO in Tanzania, formalising a growing national mission.' },
        { year: 'Today', title: 'Five regions and growing', text: 'We work across Iringa, Njombe, Mbeya, Morogoro, and Songwe — with government, schools, and partners.' },
      ],
    },
    partner: {
      title: 'Stand with her.',
      text: 'Partner with us to make menstrual health and inclusive education possible for every girl.',
      button: 'Become a partner',
    },
  },
  sw: {
    hero: {
      eyebrow: 'Ushirikishwaji ni haki, si upendeleo',
      title: 'Kila msichana anastahili kujifunza, kukua na kufanikiwa kwa heshima.',
      intro: 'SHE Foundation Tanzania inaendeleza afya na heshima ya hedhi kwa wasichana wenye ulemavu — ikiwezesha upatikanaji, elimu na ujumuishaji katika jamii zinazosahaulika mara kwa mara.',
      primary: 'Saidia dhamira yetu',
      secondary: 'Gundua kazi yetu',
      badgeNumber: '2023',
      badgeText: 'Mwaka SHE Foundation ilipojisajili kama Asasi nchini Tanzania',
    },
    founding: {
      kicker: 'Sisi ni nani',
      title: 'Kubadilisha simulizi, msichana mmoja kwa wakati.',
      text1: 'SHE Foundation inasimamia Social Impact, Health Care and Education. Ni Asasi iliyosajiliwa kisheria inayohakikisha hakuna msichana anayeachwa nyuma kutokana na ukosefu wa msaada wa afya ya hedhi — hasa wasichana wenye ulemavu.',
      text2: 'Ilianza mwaka 2013, mama yake mwanzilishi wetu, mtetezi wa haki za watoto na binadamu, alipotembelea shule ya wenye mahitaji maalum mkoani Iringa na kushuhudia vikwazo wanavyokabiliana navyo wasichana wenye ulemavu katika kusimamia hedhi zao. Kilichoanza kama misaada binafsi ya taulo, viti vya magurudumu na vifaa vya shule, kimekua na kuwa dhamira ya kitaifa.',
      quote: 'Ujumuishaji si ahadi ya kesho. Ni jukumu tunalobeba leo.',
      quoteAuthor: 'SHE Foundation Tanzania',
      link: 'Historia yetu kamili',
    },
    pillars: {
      kicker: 'Maeneo yetu makuu',
      title: 'Hatua za vitendo. Mabadiliko ya kudumu.',
      text: 'Tunafanya kazi na jamii, shule, serikali na washirika katika mikoa mitano ili kuhakikisha heshima ya hedhi na elimu jumuishi.',
      items: [
        { title: 'Kutoa upatikanaji', text: 'Bidhaa salama za hedhi na vyoo/maji safi vinavyofikika shuleni.' },
        { title: 'Kuongeza uelewa', text: 'Uhamasishaji wa jamii na elimu inayovunja unyanyapaa.' },
        { title: 'Kuwawezesha wasichana', text: 'Mafunzo, ushauri na utetezi unaojenga kujiamini na heshima.' },
        { title: 'Kusambaza rasilimali', text: 'Miongozo jumuishi ya mafunzo kwa shule, wajitolea na wazazi.' },
      ],
    },
    challenge: {
      kicker: 'Changamoto',
      title: 'Umaskini wa hedhi haupaswi kuamua nani anapata elimu.',
      text: 'Ukosefu wa bidhaa, vyoo salama na msaada jumuishi huweka vikwazo halisi kwa kujifunza — hasa kwa wasichana wenye ulemavu.',
      stats: [
        { value: 34, suffix: '%', label: 'hawakuwa na vyoo/vyumba binafsi safi', source: 'NIMR, 2021' },
        { value: 26, suffix: '%', label: 'waliogopa aibu ya kuvuja', source: 'NIMR, 2021' },
        { value: 15.3, suffix: '%', label: 'walikosa shule wakati wa hedhi', source: 'UNICEF' },
        { value: 30, suffix: '%', label: 'walikosa shule kwa ukosefu wa taulo', source: 'UNICEF' },
      ],
    },
    journey: {
      kicker: 'Safari yetu',
      title: 'Harakati iliyojengwa hatua kwa hatua.',
      items: [
        { year: '2013', title: 'Ziara iliyobadilisha kila kitu', text: 'Ziara katika shule ya mahitaji maalum Iringa ilifichua vikwazo wanavyokutana navyo wasichana wenye ulemavu.' },
        { year: '2023', title: 'Usajili rasmi', text: 'SHE Foundation ikawa Asasi iliyosajiliwa kisheria Tanzania, ikirasimisha dhamira inayokua kitaifa.' },
        { year: 'Leo', title: 'Mikoa mitano na inaendelea kukua', text: 'Tunafanya kazi Iringa, Njombe, Mbeya, Morogoro na Songwe — pamoja na serikali, shule na washirika.' },
      ],
    },
    partner: {
      title: 'Simama naye.',
      text: 'Shirikiana nasi kufanya afya ya hedhi na elimu jumuishi iwezekane kwa kila msichana.',
      button: 'Kuwa mshirika',
    },
  },
} as const

export const about = {
  en: {
    hero: { eyebrow: 'Who we are', title: 'A movement built around dignity, opportunity, and her future.', intro: 'SHE Foundation Tanzania is a registered NGO advancing menstrual health, disability inclusion, and education for girls and women across Tanzania.' },
    story: {
      kicker: 'Our story',
      title: 'Small acts of care can become a national movement.',
      text1: 'The SHE Foundation was established by Nshoma Francis Mondi, a college student inspired by her mother, Mwajuma Kitoi Msangi — a seasoned child-protection, gender, and human-rights advocate. In 2013, Mwajuma visited a special needs school in Iringa and personally witnessed the challenges adolescent disabled girls faced in managing their menstrual hygiene.',
      text2: 'What started as personal donations of sanitary supplies, wheelchairs, and school materials has evolved into a national mission — promoting menstrual health, raising awareness about albinism and disability, and advocating for inclusion, in close partnership with government, local, and international partners.',
      quote: 'Inclusion is not a promise for tomorrow. It is a responsibility we carry today.',
    },
    vision: { title: 'Our vision', text: 'A Tanzania where marginalised adolescent girls with disabilities are fully empowered to realise their potential, actively participating in and contributing to the nation’s social, economic, and political progress.' },
    mission: { title: 'Our mission', text: 'Fostering dignified and comfortable menstruation management for girls with disabilities through comprehensive support — access, education, and advocacy.' },
    values: {
      kicker: 'What guides us',
      title: 'Our core values',
      items: [
        { title: 'Empowerment through dignity', text: 'Proper menstrual hygiene management enables girls to participate fully and equally in society, helping them reach their full potential.' },
        { title: 'Rights and respect for all', text: 'Promoting menstrual hygiene for girls with disabilities safeguards their rights, bodily integrity, and life opportunities — not just sanitation.' },
        { title: 'Equity in education', text: 'A monthly period should never keep a girl with a disability from school. Inclusion means safe, dignified support for every learner.' },
      ],
    },
    journey: {
      kicker: 'Our journey',
      title: 'From one visit to a national mission.',
      items: [
        { year: '2013', title: 'The visit to Iringa', text: 'Mwajuma Kitoi Msangi visits a special needs school and witnesses the barriers disabled girls face during menstruation.' },
        { year: '2018–2022', title: 'Personal donations grow', text: 'Sanitary supplies, wheelchairs, and school materials are donated directly to communities in need.' },
        { year: '2023', title: 'Officially registered', text: 'SHE Foundation becomes a legally registered NGO in Tanzania.' },
        { year: 'Today', title: 'A national mission', text: 'Active across five regions, working with government, schools, and partners to build an inclusive future.' },
      ],
    },
    team: {
      kicker: 'Our team',
      title: 'Passionate people, one shared purpose.',
      text: 'Our team consists of passionate college students and professionals dedicated to empowering girls with disabilities — focused on menstrual health, advocacy, and inclusive education.',
      members: [
        { name: 'Nshoma Francis Mondi', role: 'Founder & Chairperson', photo: teamPhotos.nshoma, lead: true },
        { name: 'Mwajuma Kitoi Msangi', role: 'Board Member', photo: teamPhotos.mwajuma },
        { name: 'Dr. Lulu Abasi', role: 'Board Member', photo: teamPhotos.lulu },
        { name: 'Glory Jamson Mwandunga', role: 'Board Member', photo: teamPhotos.glory },
        { name: 'AbdulSalaam Abubakari Mwinyi', role: 'Board Member', photo: teamPhotos.abdulsalaam },
      ],
    },
    action: { title: 'Help us move the mission forward.', text: 'Your partnership can help make every school, family, and community more inclusive.', label: 'Work with us' },
  },
  sw: {
    hero: { eyebrow: 'Sisi ni nani', title: 'Harakati iliyojengwa juu ya heshima, fursa, na mustakabali wake.', intro: 'SHE Foundation Tanzania ni Asasi iliyosajiliwa inayoendeleza afya ya hedhi, ujumuishaji wa ulemavu na elimu kwa wasichana na wanawake nchini Tanzania.' },
    story: {
      kicker: 'Historia yetu',
      title: 'Vitendo vidogo vya huruma vinaweza kuwa harakati ya kitaifa.',
      text1: 'SHE Foundation ilianzishwa na Nshoma Francis Mondi, mwanafunzi wa chuo aliyehamasishwa na mama yake, Mwajuma Kitoi Msangi — mtetezi mkongwe wa ulinzi wa mtoto, jinsia na haki za binadamu. Mwaka 2013, Mwajuma alitembelea shule ya mahitaji maalum mkoani Iringa na kushuhudia mwenyewe changamoto wanazokutana nazo wasichana wenye ulemavu katika kusimamia usafi wa hedhi.',
      text2: 'Kilichoanza kama misaada binafsi ya vifaa vya usafi, viti vya magurudumu na vifaa vya shule, kimebadilika na kuwa dhamira ya kitaifa — kuendeleza afya ya hedhi, kuongeza uelewa kuhusu ualbino na ulemavu, na kutetea ujumuishaji, kwa ushirikiano wa karibu na serikali, washirika wa ndani na wa kimataifa.',
      quote: 'Ujumuishaji si ahadi ya kesho. Ni jukumu tunalobeba leo.',
    },
    vision: { title: 'Dira yetu', text: 'Tanzania ambapo wasichana walio pembezoni wenye ulemavu wamewezeshwa kikamilifu kutimiza uwezo wao, wakishiriki kikamilifu katika maendeleo ya kijamii, kiuchumi na kisiasa ya taifa.' },
    mission: { title: 'Dhamira yetu', text: 'Kuwezesha usimamizi wa hedhi wenye heshima na starehe kwa wasichana wenye ulemavu kupitia msaada kamili — upatikanaji, elimu na utetezi.' },
    values: {
      kicker: 'Kinachotuongoza',
      title: 'Maadili yetu makuu',
      items: [
        { title: 'Uwezeshaji kupitia heshima', text: 'Usimamizi mzuri wa usafi wa hedhi huwezesha wasichana kushiriki kikamilifu na kwa usawa katika jamii, kuwasaidia kufikia uwezo wao kamili.' },
        { title: 'Haki na heshima kwa wote', text: 'Kuendeleza usafi wa hedhi kwa wasichana wenye ulemavu kunalinda haki zao, uadilifu wa mwili, na fursa za maisha — si usafi tu.' },
        { title: 'Usawa katika elimu', text: 'Hedhi ya kila mwezi haipaswi kumzuia msichana mwenye ulemavu kwenda shule. Ujumuishaji una maana ya msaada salama na wa heshima kwa kila mwanafunzi.' },
      ],
    },
    journey: {
      kicker: 'Safari yetu',
      title: 'Kutoka ziara moja hadi dhamira ya kitaifa.',
      items: [
        { year: '2013', title: 'Ziara ya Iringa', text: 'Mwajuma Kitoi Msangi anatembelea shule ya mahitaji maalum na kushuhudia vikwazo wanavyokutana navyo wasichana wenye ulemavu wakati wa hedhi.' },
        { year: '2018–2022', title: 'Misaada binafsi yaongezeka', text: 'Vifaa vya usafi, viti vya magurudumu na vifaa vya shule vinatolewa moja kwa moja kwa jamii zenye uhitaji.' },
        { year: '2023', title: 'Usajili rasmi', text: 'SHE Foundation inakuwa Asasi iliyosajiliwa kisheria Tanzania.' },
        { year: 'Leo', title: 'Dhamira ya kitaifa', text: 'Inafanya kazi katika mikoa mitano, ikishirikiana na serikali, shule na washirika kujenga mustakabali jumuishi.' },
      ],
    },
    team: {
      kicker: 'Timu yetu',
      title: 'Watu wenye shauku, lengo moja la pamoja.',
      text: 'Timu yetu inajumuisha wanafunzi wa vyuo na wataalamu wenye shauku waliojitolea kuwawezesha wasichana wenye ulemavu — wakizingatia afya ya hedhi, utetezi na elimu jumuishi.',
      members: [
        { name: 'Nshoma Francis Mondi', role: 'Mwanzilishi na Mwenyekiti', photo: teamPhotos.nshoma, lead: true },
        { name: 'Mwajuma Kitoi Msangi', role: 'Mjumbe wa Bodi', photo: teamPhotos.mwajuma },
        { name: 'Dr. Lulu Abasi', role: 'Mjumbe wa Bodi', photo: teamPhotos.lulu },
        { name: 'Glory Jamson Mwandunga', role: 'Mjumbe wa Bodi', photo: teamPhotos.glory },
        { name: 'AbdulSalaam Abubakari Mwinyi', role: 'Mjumbe wa Bodi', photo: teamPhotos.abdulsalaam },
      ],
    },
    action: { title: 'Tusaidie kusukuma dhamira mbele.', text: 'Ushirikiano wako unaweza kusaidia kufanya kila shule, familia na jamii kuwa jumuishi zaidi.', label: 'Fanya kazi nasi' },
  },
} as const

export const whatWeDo = {
  en: {
    hero: { eyebrow: 'Our work', title: 'Practical programs. Visible progress. A future where no girl is left behind.', intro: 'We combine community insight, education, access, and partnerships to remove the barriers that keep girls from learning and leading.' },
    programs: {
      kicker: 'Our focus areas',
      title: 'Every program starts with listening.',
      text: 'Our work is designed with the communities we serve, then strengthened with evidence and collaboration.',
      items: [
        { title: 'Providing access', text: 'Supplying safe, affordable menstrual products and building or upgrading inclusive WASH facilities in schools.', image: images.access },
        { title: 'Raising awareness', text: 'Educating communities, reducing stigma, and advancing inclusive practices around menstrual health.', image: images.awareness },
        { title: 'Empowering girls', text: 'Strengthening confidence and dignity through training, mentorship, advocacy, and engagement.', image: images.empower },
        { title: 'Sharing resources', text: 'Publishing inclusive training handbooks and manuals for schools, volunteers, and parents.', image: images.resources },
      ],
    },
    process: {
      kicker: 'Our approach',
      title: 'Listen. Equip. Activate. Measure.',
      text: 'Four connected steps turn care into durable change.',
      steps: [
        { n: '01', title: 'Listen', text: 'Community insight' },
        { n: '02', title: 'Equip', text: 'Tools and training' },
        { n: '03', title: 'Activate', text: 'Local leadership' },
        { n: '04', title: 'Measure', text: 'Evidence and learning' },
      ],
    },
    action: { title: 'Ready to make a difference?', text: 'Join us in our mission to empower girls with disabilities and create lasting change in communities across Tanzania.', label: 'Get involved' },
  },
  sw: {
    hero: { eyebrow: 'Kazi yetu', title: 'Programu za vitendo. Maendeleo yanayoonekana. Mustakabali usiomuacha msichana yeyote nyuma.', intro: 'Tunachanganya uelewa wa jamii, elimu, upatikanaji na ushirikiano ili kuondoa vikwazo vinavyowazuia wasichana kujifunza na kuongoza.' },
    programs: {
      kicker: 'Maeneo yetu makuu',
      title: 'Kila programu huanza kwa kusikiliza.',
      text: 'Kazi yetu inabuniwa pamoja na jamii tunazohudumia, kisha kuimarishwa kwa ushahidi na ushirikiano.',
      items: [
        { title: 'Kutoa upatikanaji', text: 'Kusambaza bidhaa salama na za bei nafuu za hedhi na kujenga au kuboresha vyoo/maji vinavyofikika shuleni.', image: images.access },
        { title: 'Kuongeza uelewa', text: 'Kuelimisha jamii, kupunguza unyanyapaa, na kuendeleza mazoea jumuishi kuhusu afya ya hedhi.', image: images.awareness },
        { title: 'Kuwawezesha wasichana', text: 'Kuimarisha kujiamini na heshima kupitia mafunzo, ushauri, utetezi na ushirikishwaji.', image: images.empower },
        { title: 'Kusambaza rasilimali', text: 'Kuchapisha miongozo na vitabu vya mafunzo jumuishi kwa shule, wajitolea na wazazi.', image: images.resources },
      ],
    },
    process: {
      kicker: 'Mkabala wetu',
      title: 'Sikiliza. Wezesha. Amsha. Pima.',
      text: 'Hatua nne zinazounganishwa hubadilisha huduma kuwa mabadiliko ya kudumu.',
      steps: [
        { n: '01', title: 'Sikiliza', text: 'Uelewa wa jamii' },
        { n: '02', title: 'Wezesha', text: 'Zana na mafunzo' },
        { n: '03', title: 'Amsha', text: 'Uongozi wa ndani' },
        { n: '04', title: 'Pima', text: 'Ushahidi na mafunzo' },
      ],
    },
    action: { title: 'Uko tayari kuleta mabadiliko?', text: 'Jiunge nasi katika dhamira ya kuwawezesha wasichana wenye ulemavu na kuleta mabadiliko ya kudumu katika jamii kote Tanzania.', label: 'Shiriki nasi' },
  },
} as const

export const volunteer = {
  en: {
    hero: { eyebrow: 'Get involved', title: 'Your time can change the shape of her tomorrow.', intro: 'Join a growing community of people who believe access, dignity, and opportunity should belong to every girl.' },
    why: {
      kicker: 'Why volunteer',
      title: 'Bring what you know. Learn something new. Leave a mark.',
      text: 'Our volunteers help with community outreach, events, storytelling, research, fundraising, and practical support.',
      checks: ['Flexible ways to contribute', 'Training and ongoing support', 'A community that genuinely cares'],
    },
    roles: {
      kicker: 'Volunteer roles',
      title: 'Ways to help',
      items: [
        { title: 'Community educator', text: 'Lead menstrual health and inclusion conversations in schools and communities.', hours: '4–6 hours / week', where: 'Iringa, Njombe, Mbeya, Morogoro, Songwe' },
        { title: 'Support coordinator', text: 'Help organise outreach visits, dignity-kit distribution, and volunteer logistics.', hours: 'Flexible hours', where: 'All operational regions' },
        { title: 'Story amplifier', text: 'Photograph, write, and share the stories that shift perceptions and inspire action.', hours: 'Project-based', where: 'Remote or on-site' },
      ],
    },
    steps: {
      kicker: 'How it works',
      title: 'From interest to impact in four steps.',
      items: [
        { n: '01', title: 'Apply', text: 'Tell us what you care about' },
        { n: '02', title: 'Onboard', text: 'Meet the team and get oriented' },
        { n: '03', title: 'Train', text: 'Learn the tools you need' },
        { n: '04', title: 'Make impact', text: 'Start contributing in the field' },
      ],
    },
    card: { title: 'Join the circle', text: 'Tell us what you care about and where you would love to contribute.', button: 'I want to volunteer' },
    action: { title: 'Ready to stand with her?', text: 'Start with a conversation. We will find the right fit together.', label: 'Start a conversation' },
  },
  sw: {
    hero: { eyebrow: 'Shiriki nasi', title: 'Muda wako unaweza kubadilisha umbo la kesho yake.', intro: 'Jiunge na jamii inayokua ya watu wanaoamini upatikanaji, heshima na fursa vinapaswa kuwa vya kila msichana.' },
    why: {
      kicker: 'Kwa nini ujitolee',
      title: 'Leta unachokijua. Jifunze kitu kipya. Acha alama.',
      text: 'Wajitolea wetu husaidia katika uhamasishaji wa jamii, matukio, usimulizi wa hadithi, utafiti, uchangishaji na msaada wa vitendo.',
      checks: ['Njia rahisi za kuchangia', 'Mafunzo na msaada endelevu', 'Jamii inayojali kwa dhati'],
    },
    roles: {
      kicker: 'Nafasi za ujitolea',
      title: 'Njia za kusaidia',
      items: [
        { title: 'Mwalimu wa jamii', text: 'Ongoza mazungumzo ya afya ya hedhi na ujumuishaji shuleni na jamiini.', hours: 'Masaa 4–6 / wiki', where: 'Iringa, Njombe, Mbeya, Morogoro, Songwe' },
        { title: 'Mratibu wa msaada', text: 'Saidia kupanga ziara za uhamasishaji, ugawaji wa vifurushi vya heshima, na vifaa vya wajitolea.', hours: 'Masaa yanayobadilika', where: 'Mikoa yote ya uendeshaji' },
        { title: 'Msambazaji wa hadithi', text: 'Piga picha, andika na sambaza hadithi zinazobadilisha mitazamo na kuhamasisha vitendo.', hours: 'Kulingana na mradi', where: 'Mtandaoni au uwandani' },
      ],
    },
    steps: {
      kicker: 'Jinsi inavyofanya kazi',
      title: 'Kutoka hamu hadi mafanikio kwa hatua nne.',
      items: [
        { n: '01', title: 'Omba', text: 'Tuambie unachokijali' },
        { n: '02', title: 'Karibishwa', text: 'Kutana na timu na upate mwelekeo' },
        { n: '03', title: 'Pata mafunzo', text: 'Jifunze zana unazohitaji' },
        { n: '04', title: 'Leta mabadiliko', text: 'Anza kuchangia uwandani' },
      ],
    },
    card: { title: 'Jiunge na mduara', text: 'Tuambie unachokijali na mahali unapopenda kuchangia.', button: 'Nataka kujitolea' },
    action: { title: 'Uko tayari kusimama naye?', text: 'Anza na mazungumzo. Tutapata nafasi inayokufaa pamoja.', label: 'Anza mazungumzo' },
  },
} as const

export const partner = {
  en: {
    hero: { eyebrow: 'Partnerships', title: 'Big change needs people willing to build it together.', intro: 'Partner with SHE Foundation Tanzania to move from good intentions to measurable progress for girls and communities.' },
    why: {
      kicker: 'Why partner with us',
      title: 'Turn your resources into a pathway to opportunity.',
      points: [
        { n: '01', text: 'Build locally-led solutions with trusted community relationships.' },
        { n: '02', text: 'Create meaningful impact that can be measured and learned from.' },
        { n: '03', text: 'Strengthen your organisation’s commitment to inclusion.' },
      ],
    },
    types: {
      kicker: 'Ways to collaborate',
      title: 'Partnership types',
      items: [
        { title: 'Institutional partner', text: 'Co-design programs and strengthen systems across regions with government and NGOs.' },
        { title: 'Corporate partner', text: 'Invest in a focused cause through funding, employee skills, or distribution reach.' },
        { title: 'Knowledge partner', text: 'Help us build evidence, tools, monitoring, and better practice.' },
      ],
    },
    steps: {
      kicker: 'How partnership works',
      title: 'Connect. Co-design. Launch. Grow.',
      items: [
        { n: '01', title: 'Connect', text: 'Share your goals with us' },
        { n: '02', title: 'Co-design', text: 'Shape a program together' },
        { n: '03', title: 'Launch', text: 'Deliver it in communities' },
        { n: '04', title: 'Grow', text: 'Track results, then scale' },
      ],
    },
    action: { title: 'Let’s make a plan with purpose.', text: 'Tell us what you want to change. We will bring the right people to the table.', label: 'Open a partnership conversation' },
  },
  sw: {
    hero: { eyebrow: 'Ushirikiano', title: 'Mabadiliko makubwa yanahitaji watu walio tayari kuyajenga pamoja.', intro: 'Shirikiana na SHE Foundation Tanzania kuhamia kutoka nia njema hadi maendeleo yanayopimika kwa wasichana na jamii.' },
    why: {
      kicker: 'Kwa nini ushirikiane nasi',
      title: 'Geuza rasilimali zako kuwa njia ya fursa.',
      points: [
        { n: '01', text: 'Jenga suluhisho za kimaeneo kwa kutumia mahusiano ya kuaminika ya kijamii.' },
        { n: '02', text: 'Leta athari yenye maana inayoweza kupimwa na kujifunza kutoka.' },
        { n: '03', text: 'Imarisha dhamira ya taasisi yako kwa ujumuishaji.' },
      ],
    },
    types: {
      kicker: 'Njia za kushirikiana',
      title: 'Aina za ushirikiano',
      items: [
        { title: 'Mshirika wa kitaasisi', text: 'Bunia programu pamoja na imarisha mifumo katika mikoa na serikali na Asasi zisizo za kiserikali.' },
        { title: 'Mshirika wa kibiashara', text: 'Wekeza katika dhamira maalum kupitia ufadhili, ujuzi wa wafanyakazi au mtandao wa usambazaji.' },
        { title: 'Mshirika wa maarifa', text: 'Tusaidie kujenga ushahidi, zana, ufuatiliaji na mbinu bora.' },
      ],
    },
    steps: {
      kicker: 'Jinsi ushirikiano unavyofanya kazi',
      title: 'Ungana. Bunia Pamoja. Zindua. Kua.',
      items: [
        { n: '01', title: 'Ungana', text: 'Tushirikishe malengo yako' },
        { n: '02', title: 'Bunia pamoja', text: 'Unda programu pamoja' },
        { n: '03', title: 'Zindua', text: 'Itekeleze katika jamii' },
        { n: '04', title: 'Kua', text: 'Fuatilia matokeo, kisha panua' },
      ],
    },
    action: { title: 'Hebu tuunde mpango wenye lengo.', text: 'Tuambie unachotaka kubadilisha. Tutaleta watu sahihi mezani.', label: 'Anzisha mazungumzo ya ushirikiano' },
  },
} as const

export const contact = {
  en: {
    hero: { eyebrow: 'Say hello', title: 'There is always room for one more conversation.', intro: 'Questions, ideas, partnership opportunities, or simply want to learn more? We would love to hear from you.' },
    details: { kicker: 'Contact details', title: 'Let’s start where you are.', emailLabel: 'Email', phoneLabel: 'Phone', hoursLabel: 'Hours', locationLabel: 'Based in' },
    form: { name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'you@example.com', message: 'How can we help?', messagePh: 'Tell us a little more…', submit: 'Send message' },
    next: {
      kicker: 'What happens next',
      title: 'Simple, human, and responsive.',
      items: [
        { n: '01', title: 'Send your message', text: 'Use the form, email, or WhatsApp' },
        { n: '02', title: 'Our team reviews it', text: 'We read every message personally' },
        { n: '03', title: 'We get back to you', text: 'With next steps or an answer' },
      ],
    },
    map: { title: 'Find us', text: 'Our office is based in Dar es Salaam, Tanzania.' },
  },
  sw: {
    hero: { eyebrow: 'Salamu', title: 'Kuna nafasi kila wakati kwa mazungumzo mengine.', intro: 'Maswali, mawazo, fursa za ushirikiano, au unataka tu kujifunza zaidi? Tungependa kusikia kutoka kwako.' },
    details: { kicker: 'Mawasiliano', title: 'Hebu tuanze pale ulipo.', emailLabel: 'Barua pepe', phoneLabel: 'Simu', hoursLabel: 'Saa za kazi', locationLabel: 'Tupo' },
    form: { name: 'Jina', namePh: 'Jina lako', email: 'Barua pepe', emailPh: 'wewe@mfano.com', message: 'Tunawezaje kusaidia?', messagePh: 'Tuambie zaidi kidogo…', submit: 'Tuma ujumbe' },
    next: {
      kicker: 'Nini kinafuata',
      title: 'Rahisi, kibinadamu, na yenye mwitikio.',
      items: [
        { n: '01', title: 'Tuma ujumbe wako', text: 'Tumia fomu, barua pepe au WhatsApp' },
        { n: '02', title: 'Timu yetu inaupitia', text: 'Tunasoma kila ujumbe binafsi' },
        { n: '03', title: 'Tutakujibu', text: 'Kwa hatua zinazofuata au jibu' },
      ],
    },
    map: { title: 'Tupate', text: 'Ofisi yetu ipo Dar es Salaam, Tanzania.' },
  },
} as const

export const donate = {
  en: {
    hero: { eyebrow: 'Support her future', title: 'A small act of generosity can open a whole new path.', intro: 'Your donation helps girls access dignity, education, safe spaces, and the support they need to thrive.' },
    impact: {
      kicker: 'Your impact',
      title: 'Give a girl more room to dream.',
      text: 'Every contribution helps us bring practical support closer to the communities who need it most.',
      icons: [
        { title: 'Dignity', text: 'Menstrual products and private facilities' },
        { title: 'Safety', text: 'Accessible, inclusive WASH spaces' },
        { title: 'Opportunity', text: 'Uninterrupted days at school' },
      ],
    },
    bank: { title: 'Bank transfer details', note: 'You can contribute any amount to this account. Every contribution helps us make a difference.' },
    steps: {
      kicker: 'How to pay',
      title: 'Give by bank transfer in five simple steps.',
      items: [
        { n: '01', title: 'Visit your bank', text: 'Or use your mobile banking app' },
        { n: '02', title: 'Use the details', text: 'CRDB Bank · She Foundation' },
        { n: '03', title: 'Enter an amount', text: 'Every amount makes a difference' },
        { n: '04', title: 'Confirm & keep your receipt', text: 'For your own records' },
        { n: '05', title: 'Contact us', text: 'For confirmation or any questions' },
      ],
    },
    note: { kicker: 'Transparency matters', title: 'We steward every contribution with care.', text: 'We believe supporters deserve clarity, accountability, and a direct connection to the change they help make.', link: 'Ask us anything' },
  },
  sw: {
    hero: { eyebrow: 'Saidia mustakabali wake', title: 'Tendo dogo la ukarimu linaweza kufungua njia mpya kabisa.', intro: 'Mchango wako unawasaidia wasichana kupata heshima, elimu, maeneo salama na msaada wanaohitaji kufanikiwa.' },
    impact: {
      kicker: 'Athari yako',
      title: 'Mpe msichana nafasi zaidi ya kuota.',
      text: 'Kila mchango unatusaidia kuleta msaada wa vitendo karibu zaidi na jamii zinazouhitaji zaidi.',
      icons: [
        { title: 'Heshima', text: 'Bidhaa za hedhi na vyoo binafsi' },
        { title: 'Usalama', text: 'Maeneo ya WASH yanayofikika na jumuishi' },
        { title: 'Fursa', text: 'Siku za shule zisizokatizwa' },
      ],
    },
    bank: { title: 'Taarifa za uhamisho wa benki', note: 'Unaweza kuchangia kiasi chochote katika akaunti hii. Kila mchango unatusaidia kuleta mabadiliko.' },
    steps: {
      kicker: 'Jinsi ya kulipa',
      title: 'Changia kupitia uhamisho wa benki kwa hatua tano rahisi.',
      items: [
        { n: '01', title: 'Tembelea benki yako', text: 'Au tumia programu ya benki ya simu' },
        { n: '02', title: 'Tumia taarifa hizi', text: 'CRDB Bank · She Foundation' },
        { n: '03', title: 'Weka kiasi', text: 'Kila kiasi kina maana' },
        { n: '04', title: 'Thibitisha na hifadhi risiti', text: 'Kwa kumbukumbu yako' },
        { n: '05', title: 'Wasiliana nasi', text: 'Kwa uthibitisho au maswali yoyote' },
      ],
    },
    note: { kicker: 'Uwazi ni muhimu', title: 'Tunasimamia kila mchango kwa uangalifu.', text: 'Tunaamini wafadhili wanastahili uwazi, uwajibikaji, na muunganiko wa moja kwa moja na mabadiliko wanayosaidia kuleta.', link: 'Tuulize chochote' },
  },
} as const

export const news = {
  en: {
    hero: { eyebrow: 'News & insights', title: 'Stories that make space for better questions and bolder action.', intro: 'Explore reflections, field notes, and updates from the work of building a more inclusive Tanzania.' },
    readMore: 'Continue on Instagram',
    followUs: 'Follow us on Instagram for more updates',
  },
  sw: {
    hero: { eyebrow: 'Habari na maarifa', title: 'Hadithi zinazotengeneza nafasi kwa maswali bora na hatua za ujasiri.', intro: 'Gundua mawazo, taarifa za uwandani, na taarifa mpya kutoka kazi ya kujenga Tanzania jumuishi zaidi.' },
    readMore: 'Endelea Instagram',
    followUs: 'Tufuate Instagram kwa taarifa zaidi',
  },
} as const
