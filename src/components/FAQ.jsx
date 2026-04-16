import { useState } from "react";
import { FAQS } from "../data";
import { QIco, ChevD } from "../icons";

const FJ = { fontFamily: "'Josefin Sans',sans-serif" };
const FU = { fontFamily: "'Ubuntu',sans-serif" };

export default function FAQ({ dark }) {
  const [faq, setFaq] = useState({});

  const blue = "#2563eb";
  const card = dark ? "#161e30" : "#ffffff";
  const bord = dark ? "#1e2d45" : "#dce8ff";
  const mu   = dark ? "#8899b0" : "#6b7a99";

  const toggle = (si, qi) => {
    const k = `${si}-${qi}`;
    setFaq(prev => ({ ...prev, [k]: !prev[k] }));
  };

  return (
    <section id="faqs" style={{ background: dark ? "#0d1422" : "#eef3ff", padding: "88px 6%" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <p style={{ textAlign: "center", color: blue, fontWeight: 700, letterSpacing: ".09em", fontSize: ".76rem", marginBottom: 8, ...FJ }}>
          HELP
        </p>
        <h2 style={{ textAlign: "center", ...FJ, fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 800, marginBottom: 54 }}>
          Frequently Asked Questions
        </h2>

        <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {FAQS.map((sec, si) => (
            <div key={si}>
              {/* Section heading */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                <h3 style={{ fontWeight: 800, fontSize: "1rem", ...FJ }}>{sec.section}</h3>
                <span style={{ color: blue }}><QIco /></span>
              </div>

              {/* FAQ items */}
              {sec.items.map(({ q, a }, qi) => {
                const k    = `${si}-${qi}`;
                const open = !!faq[k];
                return (
                  <div
                    key={qi}
                    style={{ background: card, borderRadius: 12, marginBottom: 10, border: `1px solid ${open ? blue : bord}`, overflow: "hidden", transition: "border .25s" }}
                  >
                    <div
                      onClick={() => toggle(si, qi)}
                      style={{ padding: "15px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
                    >
                      <span style={{ fontSize: ".9rem", fontWeight: 600, lineHeight: 1.5, ...FU }}>{q}</span>
                      <span style={{ color: blue, flexShrink: 0 }} className={`faq-chevron ${open ? "open" : ""}`}>
                        <ChevD />
                      </span>
                    </div>
                    <div className={`faq-body ${open ? "open" : ""}`}>
                      <p style={{ padding: "0 18px 16px", color: mu, fontSize: ".88rem", lineHeight: 1.72, ...FU }}>{a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
