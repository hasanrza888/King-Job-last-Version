module.exports = [
  {
    id: 1,
    title: "Namizədlər",
    menuList: [
      { name: "Vakansiya axtar", route: "/vacancies-list" },
      // { name: "Browse Categories", route: "/job-list-v3" },
      { name: "İş axtaran hesabı", route: "/applicants-dashboard/dashboard" },
      { name: "Müraciətlərim", route: "/applicants-dashboard/applies" },
      { name: "Geri Dönüşlər", route: "/applicants-dashboard/feedbacks" },
    ],
  },
  {
    id: 2,
    title: "Şirkətlər",
    menuList: [
      { name: "Vakansiya paylaş", route: "/company-dashboard/post-vacancy" },
      { name: "İşçi axtaran hesabı", route: "/company-dashboard/dashboard" },
      { name: "Namizədlər", route: "/company-dashboard/all-applicants" },
      { name: "Vakansiyalarım", route: "/company-dashboard/manage-vacancies" },
    ],
  },
  {
    id: 3,
    title: "Haqqımızda",
    menuList: [
      { name: "Haqqımızda", route: "/about" },
      // { name: "Abunəliklər", route: "/subscriptions" },
      { name: "Şərtlər", route: "/terms" },
      { name: "Əlaqə", route: "/contact" },
    ],
  },
  // {
  //   id: 4,
  //   title: "Helpful Resources",
  //   menuList: [
  //     { name: "Site Map", route: "/" },
  //     { name: "Terms of Use", route: "/terms" },
  //     { name: "Privacy Center", route: "/" },
  //     { name: "Security Center", route: "/" },
  //     { name: "Accessibility Center", route: "/" },
  //   ],
  // },
];
