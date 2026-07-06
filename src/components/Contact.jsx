import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import ContactCard from "./ContactCard";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Whether you have a cybersecurity opportunity,
            collaboration idea, or simply want to connect,
            feel free to reach out.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value="ahmetcandev01@gmail.com"
            href="mailto:ahmetcandev01@gmail.com"
            button="Send Email"
          />

          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="github.com/0xahmetcan"
            href="https://github.com/0xahmetcan"
            button="Visit GitHub"
          />

          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="linkedin.com/in/ahmetcanaytekin"
            href="https://linkedin.com/in/ahmetcanaytekin"
            button="View Profile"
          />

          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Location"
            value="Ankara, Türkiye"
            href="https://maps.google.com/?q=Ankara"
            button="Open Maps"
          />

        </div>

      </div>
    </section>
  );
}

export default Contact;