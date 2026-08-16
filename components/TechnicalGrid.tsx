export function TechnicalGrid({ dense = false }: { dense?: boolean }) {
  return (
    <div className={`technical-grid ${dense ? "technical-grid-dense" : ""}`} aria-hidden="true">
      <span className="grid-axis grid-axis-x" />
      <span className="grid-axis grid-axis-y" />
      <span className="grid-coordinate coordinate-a">x 06.24</span>
      <span className="grid-coordinate coordinate-b">y 19.08</span>
      <span className="grid-dot dot-a" />
      <span className="grid-dot dot-b" />
      <span className="grid-dot dot-c" />
    </div>
  );
}
