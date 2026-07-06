import htbLogo from "../assets/images/htb.png";
import thmLogo from "../assets/images/tryhackme.png";
import portswiggerLogo from "../assets/images/portswigger.png";
import vulnhubLogo from "../assets/images/vulnhub.png";
import hackviserLogo from "../assets/images/hackviser.png";

const ctfPlatforms = (t) => [
  {
    name: "Hack The Box",
    logo: htbLogo,
    username: "0xahmetcan",
    description: t("ctfPlatforms.htb.description"),
    profile: "https://app.hackthebox.com/profile/0xahmetcan",
    writeups: "https://blog.0xahmetcan.com/htb",
    profileButton: t("ctfPlatforms.htb.profileButton"),
    writeupButton: t("ctfPlatforms.htb.writeupButton"),
  },

  {
    name: "TryHackMe",
    logo: thmLogo,
    username: "0xahmetcan",
    description: t("ctfPlatforms.thm.description"),
    profile: "https://tryhackme.com/p/0xahmetcan",
    writeups: "https://blog.0xahmetcan.com/thm",
    profileButton: t("ctfPlatforms.thm.profileButton"),
    writeupButton: t("ctfPlatforms.thm.writeupButton"),
  },

  {
    name: "PortSwigger Web Security Academy",
    logo: portswiggerLogo,
    username: "0xahmetcan",
    description: t("ctfPlatforms.portswigger.description"),
    profile: "https://portswigger.net/web-security",
    writeups: "https://blog.0xahmetcan.com/portswigger",
    profileButton: t("ctfPlatforms.portswigger.profileButton"),
    writeupButton: t("ctfPlatforms.portswigger.writeupButton"),
  },

  {
    name: "VulnHub",
    logo: vulnhubLogo,
    username: "0xahmetcan",
    description: t("ctfPlatforms.vulnhub.description"),
    profile: "https://www.vulnhub.com/",
    writeups: "https://blog.0xahmetcan.com/vulnhub",
    profileButton: t("ctfPlatforms.vulnhub.profileButton"),
    writeupButton: t("ctfPlatforms.vulnhub.writeupButton"),
  },

  {
    name: "Hackviser",
    logo: hackviserLogo,
    username: "0xahmetcan",
    description: t("ctfPlatforms.hackviser.description"),
    profile: "https://hackviser.com",
    writeups: "https://blog.0xahmetcan.com/hackviser",
    profileButton: t("ctfPlatforms.hackviser.profileButton"),
    writeupButton: t("ctfPlatforms.hackviser.writeupButton"),
  },
];

export default ctfPlatforms;