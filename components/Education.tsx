import { SectionLabel } from "./SectionLabel";

const specs = [
  ["Degree", "B.A. (Honours) in Computer Studies"],
  ["Institution", "University of Kelaniya"],
  ["Level", "Final-year undergraduate"],
  ["Direction", "Software, Web, Mobile, AI / ML, IoT"],
];

export function Education() {
  return (
    <section className="education-band" aria-labelledby="education-title">
      <div className="section-shell">
        <SectionLabel number="04B" label="Education" align="right" />
        <div className="education-spec">
          <h2 id="education-title">Academic specification</h2>
          <dl>
            {specs.map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
