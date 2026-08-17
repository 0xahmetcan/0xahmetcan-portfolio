const projects = (t) => [
  {
    title: t("projectsData.agenttesla.title"),
    description: t("projectsData.agenttesla.description"),
    technologies: [
      "Suricata",
      "Wireshark / TShark",
      "PCAP Analysis",
      "Network Forensics",
      "Detection Engineering",
      "MITRE ATT&CK"
    ],
    github: "https://github.com/0xahmetcan/agenttesla-network-forensics-suricata",
    demo: null,
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
    github: null,
    demo: null,
    featured: true
  },

  {
    title: t("projectsData.ad.title"),
    description: t("projectsData.ad.description"),
    technologies: [
      "Windows Server",
      "Active Directory",
      "BloodHound",
      "Impacket"
    ],
    github: null,
    demo: null,
    featured: false
  },

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
    featured: false
  }
];

export default projects;