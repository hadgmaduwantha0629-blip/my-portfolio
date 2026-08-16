import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <p>{profile.initials} / Portfolio</p>
        <p>(c) 2026</p>
        <p>01 Software / 02 Creative Technology</p>
      </div>
    </footer>
  );
}
