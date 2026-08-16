type SectionLabelProps = {
  number: string;
  label: string;
  align?: "left" | "right";
};

export function SectionLabel({ number, label, align = "left" }: SectionLabelProps) {
  return (
    <div
      className={`section-label ${align === "right" ? "ml-auto text-right" : ""}`}
      aria-label={`${number} ${label}`}
    >
      <span>{number}</span>
      <span className="section-label-line" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
