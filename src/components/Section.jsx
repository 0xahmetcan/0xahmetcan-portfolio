function Section({ id, children }) {
  return (
    <section
      id={id}
      className="max-w-7xl mx-auto px-6 lg:px-8 py-28"
    >
      {children}
    </section>
  );
}

export default Section;