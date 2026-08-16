import { ConstructionLines } from "./ConstructionLines";
import { TechnicalGrid } from "./TechnicalGrid";

export function GeometricBackground({ compact = false }: { compact?: boolean }) {
  return (
    <div className="geometric-background" aria-hidden="true">
      <TechnicalGrid dense={!compact} />
      <ConstructionLines compact={compact} />
      <div className="crosshair crosshair-a" />
      <div className="crosshair crosshair-b" />
      <div className="wireframe wireframe-a" />
      <div className="wireframe wireframe-b" />
    </div>
  );
}
