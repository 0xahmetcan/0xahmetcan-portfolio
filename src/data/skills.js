const skills = (t) => [
  {
    title: t("skillsData.offensive.title"),
    level: 90,
    items: [
      t("skillsData.offensive.items.web"),
      "Burp Suite",
      "OWASP Top 10",
      "Active Directory",
      "BloodHound",
      "Impacket",
      "Metasploit",
      "Nmap"
    ]
  },

  {
    title: t("skillsData.blue.title"),
    level: 85,
    items: [
      "IBM QRadar",
      "Splunk",
      "FortiSIEM",
      "SOAR",
      t("skillsData.blue.items.ir"),
      t("skillsData.blue.items.th"),
      t("skillsData.blue.items.ioc"),
      "MITRE ATT&CK"
    ]
  },

  {
    title: t("skillsData.programming.title"),
    level: 80,
    items: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "HTML",
      "CSS"
    ]
  },

  {
    title: t("skillsData.systems.title"),
    level: 75,
    items: [
      "Linux",
      "Windows Server",
      "Docker",
      "Git",
      "GitHub",
      "VMware",
      "VirtualBox",
      "VS Code"
    ]
  }
];

export default skills;