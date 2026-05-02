const navLinks = [
  {
    name: "Proyek",
    link: "#work",
  },
  // {
  //   name: "Pengalaman",
  //   link: "#experience",
  // },
  {
    name: "Kemampuan",
    link: "#skills",
  },
  // {
  //   name: "Testimoni",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ide", imgPath: "/images/ide.webp" },
  { text: "Konsep", imgPath: "/images/konsep.webp" },
  { text: "Desain", imgPath: "/images/desain.webp" },
  { text: "Kode", imgPath: "/images/coding.webp" },
  { text: "Ide", imgPath: "/images/ide.webp" },
  { text: "Konsep", imgPath: "/images/konsep.webp" },
  { text: "Desain", imgPath: "/images/desain.webp" },
  { text: "Kode", imgPath: "/images/coding.webp" },
];

const variables = [
  { text: "Inovatif" },
  { text: "Fungsional" },
  { text: "Terstruktur" },
  { text: "Intuitif" },
  { text: "Inovatif" },
  { text: "Fungsional" },
  { text: "Terstruktur" },
  { text: "Intuitif" },
];

const counterItems = [
  {
    value: 1,
    suffix: "+",
    imgPath: "/images/pengalaman.webp",
    label: "Tahun Pengalaman",
  },
  {
    value: 7,
    suffix: "",
    imgPath: "/images/pengembangan_web.webp",
    label: "Proyek Website",
  },
  {
    value: 3,
    suffix: "",
    imgPath: "/images/aplikasi_mobile.webp",
    label: "Proyek Mobile App",
  },
];

const percentages = [
  {
    id: 1,
    role: "Software Analyst",
    iconPath: "/images/analis_software.webp",
    languagePercentage: [
      {
        languageImg: "/images/Jira-fill.webp",
        name: "Jira",
        statsBar: 65,
        value: 65,
      },
      {
        languageImg: "/images/Drawio-fill.webp",
        name: "Draw.io",
        statsBar: 92,
        value: 92,
      },
      {
        languageImg: "/images/Lucidchart-fill.webp",
        name: "LucidChart",
        statsBar: 68,
        value: 68,
      },
      {
        languageImg: "/images/Figma-fill.webp",
        name: "Figma",
        statsBar: 82,
        value: 82,
      },
      {
        languageImg: "/images/Postman-fill.webp",
        name: "Postman",
        statsBar: 87,
        value: 87,
      },
      {
        languageImg: "/images/Sentry-fill.webp",
        name: "Sentry",
        statsBar: 40,
        value: 40,
      },
    ],
    shortTitle: "Analyst",
    recentProject: 12,
    overall: 7.2,
    status: "😐 Average",
  },
  {
    id: 2,
    role: "Web & Mobile Development",
    iconPath: "/images/kumpulan_framework.webp",
    languagePercentage: [
      {
        languageImg: "/images/Nextjs-fill.webp",
        name: "Next.js",
        statsBar: 73,
        value: 73,
      },
      {
        languageImg: "/images/Expressjs-fill.webp",
        name: "Express.js",
        statsBar: 86,
        value: 86,
      },
      {
        languageImg: "/images/Laravel-fill.webp",
        name: "Laravel",
        statsBar: 42,
        value: 42,
      },
      {
        languageImg: "/images/Django-fill.webp",
        name: "Django",
        statsBar: 50,
        value: 50,
      },
      {
        languageImg: "/images/React.webp",
        name: "React-Native",
        statsBar: 70,
        value: 70,
      },
      {
        languageImg: "/images/Flutter.webp",
        name: "Flutter",
        statsBar: 37,
        value: 37,
      },
    ],
    shortTitle: "Framework",
    recentProject: 10,
    overall: 5.9,
    status: "🗿 Bad",
  },
  {
    id: 3,
    role: "Database Management",
    iconPath: "/images/manajemen_database.webp",
    languagePercentage: [
      {
        languageImg: "/images/Mongodb-fill.webp",
        name: "MongoDB",
        statsBar: 74,
        value: 74,
      },
      {
        languageImg: "/images/Firebase-fill.webp",
        name: "Firebase",
        statsBar: 80,
        value: 80,
      },
      {
        languageImg: "/images/Mysql-fill.webp",
        name: "MySQL",
        statsBar: 68,
        value: 68,
      },
      {
        languageImg: "/images/Neondb-fill.webp",
        name: "NeonDB",
        statsBar: 75,
        value: 75,
      },
      {
        languageImg: "/images/Supabase-fill.webp",
        name: "Supabase",
        statsBar: 62,
        value: 62,
      },
      {
        languageImg: "/images/Oracle-fill.webp",
        name: "Oracle",
        statsBar: 46,
        value: 46,
      },
    ],
    shortTitle: "Database",
    recentProject: 10,
    overall: 6.7,
    status: "😢 Fair",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.webp",
  },
  {
    imgPath: "/images/logos/company-logo-2.webp",
  },
  {
    imgPath: "/images/logos/company-logo-3.webp",
  },
  {
    imgPath: "/images/logos/company-logo-4.webp",
  },
  {
    imgPath: "/images/logos/company-logo-5.webp",
  },
  {
    imgPath: "/images/logos/company-logo-6.webp",
  },
  {
    imgPath: "/images/logos/company-logo-7.webp",
  },
  {
    imgPath: "/images/logos/company-logo-8.webp",
  },
  {
    imgPath: "/images/logos/company-logo-9.webp",
  },
  {
    imgPath: "/images/logos/company-logo-10.webp",
  },
  {
    imgPath: "/images/logos/company-logo-11.webp",
  },
];

const abilities = [
  {
    imgPath: "/images/software-analyst.webp",
    title: "Software Analyst",
    desc: "Menerapkan algoritma SDLC Agile dalam menganalisis kebutuhan sistem serta merancang alur/spesifikasi menggunakan BRD, FSD, UML, dan FlowChart.",
  },
  {
    imgPath: "/images/data-visualization.webp",
    title: "Data Visualization",
    desc: "Pembuatan visualisasi data yang interaktif dan informatif menggunakan beberapa pustaka dalam pengambilan keputusan berbasis data.",
  },
  {
    imgPath: "/images/web-development.webp",
    title: "Web Development",
    desc: "Pembangunan dan desain website yang dinamis dengan memperhatikan fungsionalitas yang kuat pada berbagai perangkat.",
  },
  {
    imgPath: "/images/mobile-app.webp",
    title: "Mobile App",
    desc: "Pengembangan aplikasi mobile yang responsif untuk memenuhi kebutuhan spesifik pengguna di berbagai platform seperti Android dan iOS.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Aplikasi Mobile",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Visualisasi Data",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Pengembangan Web",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Diagram 3 Dimensi",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Manajemen Proyek",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Kemampuannya dalam pengembangan aplikasi mobile menunjukkan efisiensi yang baik. Aryo berdedikasi untuk mencoba teknologi baru yang memberinya nilai tambah dalam membangun proyek.",
    imgPath: "/images/react-native-exp.webp",
    logoPath: "/images/React.webp",
    location: "Kamboja",
    role: "Mobile App",
    title: "Food Order & Delivery",
    date: "17 April 2025 - 2 Mei 2025",
    responsibilities: [
      "Membangun aplikasi mobile cross-platform menggunakan React Native dengan UI yang interaktif.",
      "Mengintegrasikan API dasar dan penyimpanan lokal untuk mendukung fitur yang diminta.",
    ],
  },
  {
    review:
      "Oke dia cukup mampu menggabungkan fitur visualisasi data dan enkripsi dalam proyek berbasis web.",
    imgPath: "/images/angular-exp.webp",
    logoPath: "/images/Angular.webp",
    location: "Indonesia",
    role: "Web",
    title: "Inventory & Project Management",
    date: "26 Desember 2024 - 6 Februari 2025",
    responsibilities: [
      "Mengembangkan website responsif yang scalable dengan penyesuaian terhadap ruang lingkup dan tenggat waktu.",
      "Memanfaatkan Python untuk menampilkan grafik data dinamis dalam bentuk visualisasi interaktif.",
      "Mengimplementasikan algoritma enkripsi berbasis logika kriptografi dalam sistem keamanan data.",
    ],
  },
  {
    review:
      "Dia bisa ngebangun game edukatif berbasis memori yang kece sama ga berat. Terus juga logika permainan yang dibuat ga kaleng-kaleng, tingkat kesulitannya juga yang bikin game ini terasa seru & lebih menantang.",
    imgPath: "/images/flutter-exp.webp",
    logoPath: "/images/Flutter.webp",
    location: "Indonesia",
    role: "Mobile App",
    title: "Memory Game",
    date: "7 Juni 2024 - 17 Juni 2024",
    responsibilities: [
      "Mendesain dan mengembangkan game memori berbasis Flutter dengan level permainan bertingkat.",
      "Mengimplementasikan logika permainan untuk mencocokkan kartu menggunakan state dan animasi sederhana.",
      "Mengoptimalkan UI agar responsif di berbagai ukuran layar serta menjaga performa tetap ringan.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Sean Vincent",
    mentions: "@vincent3__3",
    location: "Australia",
    review:
      "Aryo menunjukkan kemampuan yang cukup baik meskipun baru terjun ke dunia pemrograman. Dia berhasil mengubah kebutuhan proyek kami yang kompleks menjadi website yang fungsional dan mudah digunakan.",
    imgPath: "/images/client1.webp",
  },
  {
    name: "Bagas Dwi",
    mentions: "@bagatrip80",
    location: "Indonesia",
    review:
      "Doi ngebawa sentuhan segar ke website yang gue minta. Gue puas banget sama hasilnya.",
    imgPath: "/images/client2.webp",
  },
  {
    name: "Tovan Galantra",
    mentions: "@face.me_",
    location: "Indonesia",
    review:
      "Walau hasilnya ga seberapa, tapi gua yakin dia punya dedikasi penuh buat ngembangin potensi dirinya lebih jauh lagi. Semangat bre!!!",
    imgPath: "/images/client3.webp",
  },
  {
    name: "Thùy Phương",
    mentions: "@_Phươnggg.",
    location: "Vietnam",
    review:
      "Dia dengan cepat memahami kebutuhan yang diminta dan mampu menghadirkan aplikasi mobile yang tidak hanya sesuai harapan, tapi melebihi ekspektasi. Ia cukup andal di sisi frontend dan backend.",
    imgPath: "/images/client00.webp",
  },
  {
    name: "Alan",
    mentions: "@msbreewclover",
    location: "Indonesia",
    review: "Mantep we.",
    imgPath: "/images/client00.webp",
  },
  {
    name: "Ponel",
    mentions: "@p0lus1_n1kel",
    location: "Indonesia",
    review:
      "Goodjob bro! Hasil lo bikin gw lumayan puas si... Ada beberapa fitur yang lo masukin padahal gw ga minta... Which is bagus si bro, cuma gw kasian aja ama lu nya.",
    imgPath: "/images/client6.webp",
  },
];

const socialImgs = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/cherrrrrrrryy__/",
    imgPath: "/images/instagram.webp",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/aryo-wibisono-93449b372/",
    imgPath: "/images/linkedin.webp",
  },
  {
    name: "Github",
    url: "https://github.com/awshied/portofolio",
    imgPath: "/images/github.webp",
  },
];

export {
  words,
  variables,
  abilities,
  logoIconsList,
  percentages,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
