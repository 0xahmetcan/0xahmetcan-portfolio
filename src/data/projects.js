const projects = (t) => [
  {
    title: t("projectsData.portfolio.title"),
    description: t("projectsData.portfolio.description"),
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite"
    ],
    github: "https://github.com/0xahmetcan/0xahmetcan-portfolio",
    demo: "https://0xahmetcan.com",
    featured: true
  },

  {
    title: t("projectsData.soc.title"),
    description: t("projectsData.soc.description"),
    technologies: [
      "Python",
      "QRadar",
      "Splunk"
    ],
    github: "#",
    demo: "#",
    featured: true
  },

  {
    title: t("projectsData.ad.title"),
    description: t("projectsData.ad.description"),
    technologies: [
      "Windows Server",
      "BloodHound",
      "Impacket"
    ],
    github: "#",
    demo: "#",
    featured: true
  },

  {
    title: t("projectsData.scanner.title"),
    description: t("projectsData.scanner.description"),
    technologies: [
      "Python",
      "Sockets",
      "Nmap"
    ],
    github: "#",
    demo: "#",
    featured: true
  }
];

export default projects;