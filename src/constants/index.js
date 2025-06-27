const navLinks = [
  {
    name: "Proyek",
    link: "#work",
  },
  {
    name: "Pengalaman",
    link: "#experience",
  },
  {
    name: "Kemampuan",
    link: "#skills",
  },
  {
    name: "Testimoni",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ide", imgPath: "/images/ide.png" },
  { text: "Konsep", imgPath: "/images/konsep.png" },
  { text: "Desain", imgPath: "/images/desain.png" },
  { text: "Kode", imgPath: "/images/coding.png" },
  { text: "Ide", imgPath: "/images/ide.png" },
  { text: "Konsep", imgPath: "/images/konsep.png" },
  { text: "Desain", imgPath: "/images/desain.png" },
  { text: "Kode", imgPath: "/images/coding.png" },
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
  { value: 1, suffix: "+", label: "Tahun Pengalaman" },
  { value: 9, suffix: "+", label: "Klien Puas" },
  { value: 11, suffix: "+", label: "Proyek Selesai" },
  { value: 2, suffix: "+", label: "Proyek Unggulan" },
];

const percentages = [
  {
    id: 1,
    role: "Data Visualization",
    iconPath: "/images/visualisasi_data.png",
    languagePercentage: [
      {
        languageImg: "/images/Matplotlib-fill.png",
        name: "Matplotlib",
        statsBar: 62,
        value: 62,
      },
      {
        languageImg: "/images/Phpchart-fill.png",
        name: "Php Chart",
        statsBar: 47,
        value: 47,
      },
      {
        languageImg: "/images/Seaborn-fill.png",
        name: "Seaborn",
        statsBar: 21,
        value: 21,
      },
      {
        languageImg: "/images/Threejs-fill.png",
        name: "Three.js",
        statsBar: 70,
        value: 70,
      },
      {
        languageImg: "/images/Chartjs-fill.png",
        name: "Chart.js",
        statsBar: 53,
        value: 53,
      },
      {
        languageImg: "/images/D3-fill.png",
        name: "D3.js",
        statsBar: 67,
        value: 67,
      },
    ],
    recentProject: 5,
    overall: 5.3,
    status: "🗿 Bad",
  },
  {
    id: 2,
    role: "Mobile App",
    iconPath: "/images/aplikasi_mobile.png",
    languagePercentage: [
      {
        languageImg: "/images/Flutter.png",
        name: "Flutter",
        statsBar: 65,
        value: 65,
      },
      {
        languageImg: "/images/Kotlin-fill.png",
        name: "Kotlin",
        statsBar: 64,
        value: 64,
      },
      {
        languageImg: "/images/React.png",
        name: "React-Native",
        statsBar: 92,
        value: 92,
      },
      {
        languageImg: "/images/Swift-fill.png",
        name: "Swift",
        statsBar: 30,
        value: 30,
      },
      {
        languageImg: "/images/Mongodb-fill.png",
        name: "MongoDB",
        statsBar: 75,
        value: 75,
      },
      {
        languageImg: "/images/Firebase-fill.png",
        name: "Firebase",
        statsBar: 88,
        value: 88,
      },
    ],
    recentProject: 3,
    overall: 6.9,
    status: "🗿 Bad",
  },
  {
    id: 3,
    role: "Web Development",
    iconPath: "/images/pengembangan_web.png",
    languagePercentage: [
      {
        languageImg: "/images/Php-fill.png",
        name: "Php",
        statsBar: 74,
        value: 74,
      },
      {
        languageImg: "/images/Typescript-fill.png",
        name: "TypeScript",
        statsBar: 85,
        value: 85,
      },
      {
        languageImg: "/images/Laravel-fill.png",
        name: "Laravel",
        statsBar: 46,
        value: 46,
      },
      {
        languageImg: "/images/Expressjs-fill.png",
        name: "Express.js",
        statsBar: 82,
        value: 82,
      },
      {
        languageImg: "/images/Mysql-fill.png",
        name: "MySQL",
        statsBar: 93,
        value: 93,
      },
      {
        languageImg: "/images/Postgresql-fill.png",
        name: "PostgreSQL",
        statsBar: 77,
        value: 77,
      },
    ],
    recentProject: 8,
    overall: 7.6,
    status: "😐 Average",
  },
  {
    id: 4,
    role: "Cryptography",
    iconPath: "/images/kriptografi.png",
    languagePercentage: [
      {
        languageImg: "/images/C++-fill.png",
        name: "Crypto++",
        statsBar: 7,
        value: 7,
      },
      {
        languageImg: "/images/Javascript-fill.png",
        name: "Crypto.js",
        statsBar: 48,
        value: 48,
      },
      {
        languageImg: "/images/JCA-fill.png",
        name: "Java Cryptography Architecture",
        statsBar: 15,
        value: 15,
      },
      {
        languageImg: "/images/Python-fill.png",
        name: "PyCrypto",
        statsBar: 15,
        value: 15,
      },
    ],
    recentProject: 2,
    overall: 2.1,
    status: "☠️ Very Bad",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/data-visualization.png",
    title: "Data Visualization",
    desc: "Pembuatan visualisasi data yang interaktif dan informatif menggunakan pustaka Python dalam pengambilan keputusan berbasis data.",
  },
  {
    imgPath: "/images/mobile-app.png",
    title: "Mobile App",
    desc: "Pengembangan aplikasi mobile yang responsif untuk memenuhi kebutuhan spesifik pengguna di berbagai platform seperti Android dan iOS.",
  },
  {
    imgPath: "/images/web-development.png",
    title: "Web Development",
    desc: "Pembangunan dan desain website yang dinamis dengan memperhatikan fungsionalitas yang kuat pada berbagai perangkat.",
  },
  {
    imgPath: "/images/cryptography.png",
    title: "Cryptography",
    desc: "Pemahaman prinsip dasar kriptografi dalam implementasi solusi untuk mengamankan data dan informasi agar menjaga kerahasiaan serta integritas.",
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
    name: "Mobile App",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Data Visualization",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Web Development",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "3D Diagram",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Kemampuannya dalam pengembangan aplikasi mobile menunjukkan efisiensi yang baik. Aryo berdedikasi untuk mencoba teknologi baru yang memberinya nilai tambah dalam membangun proyek.",
    imgPath: "/images/react-native-exp.png",
    logoPath: "/images/React.png",
    location: "Kamboja",
    title: "Mobile App - Food Order & Delivery",
    date: "17 April 2025 - 2 Mei 2025",
    responsibilities: [
      "Membangun aplikasi mobile cross-platform menggunakan React Native dengan UI yang interaktif.",
      "Mengintegrasikan API dasar dan penyimpanan lokal untuk mendukung fitur yang diminta.",
    ],
  },
  {
    review:
      "Oke dia cukup mampu menggabungkan fitur visualisasi data dan enkripsi dalam proyek berbasis web.",
    imgPath: "/images/angular-exp.png",
    logoPath: "/images/Angular.png",
    location: "Indonesia",
    title: "Web - Inventory & Project Management",
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
    imgPath: "/images/flutter-exp.png",
    logoPath: "/images/Flutter.png",
    location: "Indonesia",
    title: "Mobile App - Memory Game",
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
    imgPath: "/images/client1.png",
  },
  {
    name: "Bagas Dwi",
    mentions: "@bagatrip80",
    location: "Indonesia",
    review:
      "Doi ngebawa sentuhan segar ke website yang gue minta. Gue puas banget sama hasilnya.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Tovan Galantra",
    mentions: "@face.me_",
    location: "Indonesia",
    review:
      "Walau hasilnya ga seberapa, tapi gua yakin dia punya dedikasi penuh buat ngembangin potensi dirinya lebih jauh lagi. Semangat bre!!!",
    imgPath: "/images/client3.png",
  },
  {
    name: "Thùy Phương",
    mentions: "@_Phươnggg.",
    location: "Vietnam",
    review:
      "Aryo dengan cepat memahami kebutuhan yang diminta dan mampu menghadirkan aplikasi mobile yang tidak hanya sesuai harapan, tapi melebihi ekspektasi. Ia cukup andal di sisi frontend dan backend.",
    imgPath: "/images/client00.png",
  },
  {
    name: "Alan",
    mentions: "@msbreewclover",
    location: "Indonesia",
    review: "Mantep we.",
    imgPath: "/images/client00.png",
  },
  {
    name: "Ponel",
    mentions: "@p0lus1_n1kel",
    location: "Indonesia",
    review:
      "Goodjob bro! Hasil lo bikin gw lumayan puas si... Ada beberapa fitur yang lo masukin padahal gw ga minta... Which is bagus si bro, cuma gw kasian aja ama lu nya.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/cherrrrrrrryy__/",
    imgPath: "/images/insta.png",
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
