import { FEATURES } from "../data";
import { FEATURE_ICONS } from "../icons";

const FJ = { fontFamily: "'Josefin Sans',sans-serif" };
const FU = { fontFamily: "'Ubuntu',sans-serif" };

export default function Features({ dark }) {
  const blue = "#2563eb";
  const card = dark ? "#161e30" : "#ffffff";
  const bord = dark ? "#1e2d45" : "#dce8ff";
  const mu   = dark ? "#8899b0" : "#6b7a99";
  const soft = dark ? "rgba(37,99,235,.14)" : "rgba(37,99,235,.08)";

  return (
    <section id="features" style={{ padding: "88px 6%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <p style={{ textAlign: "center", color: blue, fontWeight: 700, letterSpacing: ".09em", fontSize: ".76rem", marginBottom: 8, ...FJ }}>
          WHY US
        </p>
        <h2 style={{ textAlign: "center", ...FJ, fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, marginBottom: 54 }}>
          What Makes Us Special
        </h2>

        <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{ background: card, borderRadius: 18, padding: "28px 24px", border: `1px solid ${bord}`, transition: "transform .25s,box-shadow .25s,border-color .25s" }}
              onMouseEnter={e => {
                e.currentTarget.style.transform   = "translateY(-6px)";
                e.currentTarget.style.boxShadow  = "0 16px 44px rgba(37,99,235,.14)";
                e.currentTarget.style.borderColor = blue;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform   = "none";
                e.currentTarget.style.boxShadow  = "none";
                e.currentTarget.style.borderColor = bord;
              }}
            >
              <div style={{ width: 54, height: 54, borderRadius: 15, background: soft, border: `1px solid ${dark ? "#1e3a6e" : "#c7d8ff"}`, display: "flex", alignItems: "center", justifyContent: "center", color: blue, marginBottom: 18 }}>
                {FEATURE_ICONS[f.iconName]}
              </div>
              <h3 style={{ fontWeight: 800, marginBottom: 10, fontSize: ".97rem", ...FJ }}>{f.title}</h3>
              <p  style={{ color: mu, fontSize: ".87rem", lineHeight: 1.72, ...FU }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
