import type { ReactNode } from "react";

export function MobileMain({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main className={`mobile-site ${className}`}>{children}</main>;
}

export function MobileContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`m-container ${className}`}>{children}</div>;
}

export function MobileSection({
  children,
  tone = "white",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "white" | "soft" | "dark" | "gold";
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`m-section m-section-${tone} ${className}`}>
      <MobileContainer>{children}</MobileContainer>
    </section>
  );
}

export function MobileEyebrow({ children }: { children: ReactNode }) {
  return <div className="m-eyebrow">{children}</div>;
}

export function MobileTitle({ children, as = "h2" }: { children: ReactNode; as?: "h1" | "h2" | "h3" }) {
  const Tag = as;
  return <Tag className={as === "h1" ? "m-title m-title-hero" : "m-title"}>{children}</Tag>;
}

export function MobileLead({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`m-lead${light ? " m-lead-light" : ""}`}>{children}</p>;
}

export function MobileCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`m-card ${className}`}>{children}</div>;
}

export function MobileIconCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <MobileCard className="m-icon-card">
      <div className="m-icon">{icon}</div>
      <div className="m-card-title">{title}</div>
      <p className="m-card-desc">{desc}</p>
    </MobileCard>
  );
}

export function MobileStatGrid({ items, dark = false }: { items: { val: string; label: string }[]; dark?: boolean }) {
  return (
    <div className={`m-stat-grid${dark ? " m-stat-grid-dark" : ""}`}>
      {items.map((item) => (
        <div className="m-stat" key={`${item.val}-${item.label}`}>
          <strong>{item.val}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function MobilePill({ children }: { children: ReactNode }) {
  return <div className="m-pill">{children}</div>;
}
