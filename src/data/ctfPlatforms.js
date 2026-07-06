import htbLogo from "../assets/images/htb.png";
import thmLogo from "../assets/images/tryhackme.png";
import portswiggerLogo from "../assets/images/portswigger.png";
import vulnhubLogo from "../assets/images/vulnhub.png";
import hackviserLogo from "../assets/images/hackviser.png";

const ctfPlatforms = [
  {
    name: "Hack The Box",
    logo: htbLogo,
    username: "0xahmetcan",
    description:
      "Hands-on penetration testing labs, Active Directory environments and realistic attack simulations.",
    profile: "https://app.hackthebox.com/profile/0xahmetcan",
    writeups: "https://blog.0xahmetcan.com/htb",
    profileButton: "View Profile",
    writeupButton: "Read HTB Writeups",
  },

  {
    name: "TryHackMe",
    logo: thmLogo,
    username: "0xahmetcan",
    description:
      "Practical learning platform focused on offensive security, blue team operations and real-world labs.",
    profile: "https://tryhackme.com/p/0xahmetcan",
    writeups: "https://blog.0xahmetcan.com/thm",
    profileButton: "View Profile",
    writeupButton: "Read THM Writeups",
  },

  {
    name: "PortSwigger Web Security Academy",
    logo: portswiggerLogo,
    username: "0xahmetcan",
    description:
      "Advanced web security labs covering XSS, SQL Injection, SSRF, Authentication, CSRF and many more.",
    profile: "https://portswigger.net/web-security",
    writeups: "https://blog.0xahmetcan.com/portswigger",
    profileButton: "View Academy",
    writeupButton: "Read Lab Writeups",
  },

  {
    name: "VulnHub",
    logo: vulnhubLogo,
    username: "0xahmetcan",
    description:
      "Downloadable vulnerable machines designed for penetration testing, privilege escalation and red team practice.",
    profile: "https://www.vulnhub.com/",
    writeups: "https://blog.0xahmetcan.com/vulnhub",
    profileButton: "Visit VulnHub",
    writeupButton: "Read VulnHub Writeups",
  },

  {
    name: "Hackviser",
    logo: hackviserLogo,
    username: "0xahmetcan",
    description:
      "Cybersecurity challenges, penetration testing exercises and practical security learning paths.",
    profile: "https://hackviser.com",
    writeups: "https://blog.0xahmetcan.com/hackviser",
    profileButton: "Visit Platform",
    writeupButton: "Read Challenge Writeups",
  },
];

export default ctfPlatforms;