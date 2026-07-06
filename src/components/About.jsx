function About() {
  return (
    <section
      id="about"
      className="py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Title */}

        <div className="mb-20 max-w-3xl">

          <p className="text-sky-400 uppercase tracking-[0.25em] text-sm font-semibold">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white leading-tight">
            Passionate About Building
            a Safer Digital World
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Content */}

          <div>

            <p className="text-lg leading-9 text-slate-400">

              I am a <span className="text-white font-semibold">
                Cyber Security Enthusiast
              </span>{" "}
              who is deeply passionate about cybersecurity and
              continuously improving my offensive and defensive
              security skills.

              My interests include Web Application Security,
              Active Directory Security, Security Operations,
              Incident Response, Threat Hunting,
              Vulnerability Assessment, and Penetration Testing.

            </p>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              During my <span className="font-semibold text-white">
                6-month long-term internship at SOITRON Cyber Security
              </span>,
              I gained valuable hands-on experience by working with
              real-world security events, SIEM technologies,
              alert validation, incident investigation,
              and security monitoring within a professional
              Security Operations Center (SOC).

            </p>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              Alongside professional experience,
              I actively improve my practical skills through
              Capture The Flag competitions,
              home laboratory environments,
              security research,
              and structured cybersecurity programs including
              <span className="font-semibold text-white">
                {" "}Bilişim Academy
              </span>
              {" "}and
              <span className="font-semibold text-white">
                {" "}Siber Vatan.
              </span>

              I strongly believe that continuous learning,
              curiosity,
              and hands-on practice are the foundation of becoming
              a successful cybersecurity professional.

            </p>

          </div>

          {/* Timeline */}

          <div className="border-l border-slate-800 pl-8 space-y-12">

            <div>

              <span className="text-sky-400 font-semibold">
                2023
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Software Development
              </h3>

              <p className="mt-2 text-slate-400">
                Started my journey in software development,
                building modern web applications and strengthening
                programming fundamentals.
              </p>

            </div>

            <div>

              <span className="text-sky-400 font-semibold">
                2024
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Cyber Security Journey
              </h3>

              <p className="mt-2 text-slate-400">
                Participated in the Turkey Cyber Homeland
                (Siber Vatan) Program and completed various
                cybersecurity training programs while building
                practical laboratory environments.
              </p>

            </div>

            <div>

              <span className="text-sky-400 font-semibold">
                2025
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                SOITRON Cyber Security Internship
              </h3>

              <p className="mt-2 text-slate-400">
                Worked within a professional SOC environment,
                analyzing security alerts,
                validating incidents,
                monitoring SIEM solutions,
                and collaborating with experienced security analysts.
              </p>

            </div>

            <div>

              <span className="text-sky-400 font-semibold">
                Today
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Continuous Growth
              </h3>

              <p className="mt-2 text-slate-400">
                Expanding my expertise through
                CTF platforms,
                penetration testing labs,
                Active Directory environments,
                malware research,
                and technical blogging while preparing for
                advanced cybersecurity certifications.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;