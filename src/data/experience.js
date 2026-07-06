const experience = (t) => [
  {
    year: "2025",
    company: "SOITRON Cyber Security",
    position: t("experienceData.soitron.position"),
    description: t("experienceData.soitron.description"),

    technologies: [
      "IBM QRadar",
      "Splunk",
      "FortiSIEM",
      "SOAR",
      "Threat Hunting",
      "Incident Response"
    ]
  },

  {
    year: "2024",
    company: "Hızlı İmzala",
    position: t("experienceData.hizliimzala.position"),

    description: t("experienceData.hizliimzala.description"),

    technologies: [
      "ASP.NET",
      "C#",
      "REST API",
      "Authentication",
      "SQL Server"
    ]
  },

  {
    year: "2024",
    company: "Hızlı Akademi",
    position: t("experienceData.hizliakademi.position"),

    description: t("experienceData.hizliakademi.description"),

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design"
    ]
  }
];

export default experience;