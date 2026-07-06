import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";
import ContactCard from "./ContactCard";

function Contact() {

  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            {t("contact.badge")}
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {t("contact.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {t("contact.description")}
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <ContactCard
            icon={<FaEnvelope />}
            title={t("contact.email")}
            value="ahmetcandev01@gmail.com"
            href="mailto:ahmetcandev01@gmail.com"
            button={t("contact.sendEmail")}
          />

          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="github.com/0xahmetcan"
            href="https://github.com/0xahmetcan"
            button={t("contact.visitGithub")}
          />

          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="linkedin.com/in/ahmetcanaytekin"
            href="https://linkedin.com/in/ahmetcanaytekin"
            button={t("contact.viewProfile")}
          />

          <ContactCard
            icon={<FaMapMarkerAlt />}
            title={t("contact.location")}
            value={t("contact.locationValue")}
            href="https://maps.google.com/?q=Ankara"
            button={t("contact.openMaps")}
          />

        </div>

      </div>
    </section>
  );
}

export default Contact;