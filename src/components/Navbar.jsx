import { useState } from "react";
import { MoonIco, SunIco, MenuIco, CloseIco } from "../icons";
import ZigZagText from "./ZigZagText";

const FM = { fontFamily: "'Montserrat',sans-serif" };
const FJ = { fontFamily: "'Josefin Sans',sans-serif" };
const FU = { fontFamily: "'Ubuntu',sans-serif" };

const NAV_LINKS = [
  ["Home", "home"],
  ["Features", "features"],
  ["FAQs", "faqs"],
];

/* ── Desktop nav link with zig-zag underline ── */
function NavItem({ label, id, jump, mu, blue, FM }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => jump(id)}
      style={{
        background: "none",
        border: "none",
        color: hovered ? blue : mu,
        cursor: "pointer",
        fontWeight: 600,
        fontSize: ".92rem",
        ...FM,
        transition: "color .2s",
        position: "relative",
        paddingBottom: 10,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}

      {/* Zig-zag underline */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: hovered ? "100%" : "0%",
          height: 7,
          overflow: "visible",
          transition: "width 0.38s cubic-bezier(0.4,0,0.2,1)",
          display: "block",
          pointerEvents: "none",
        }}
        viewBox="0 0 120 7"
        preserveAspectRatio="none"
      >
        <path
          d="M0,5 L6,1 L12,5 L18,1 L24,5 L30,1 L36,5 L42,1 L48,5 L54,1 L60,5 L66,1 L72,5 L78,1 L84,5 L90,1 L96,5 L102,1 L108,5 L114,1 L120,5"
          stroke={blue}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </button>
  );
}

export default function Navbar({ dark, setDark, menu, setMenu, jump }) {
  const blue = "#2563eb";
  const mu = dark ? "#8899b0" : "#6b7a99";
  const tx = dark ? "#e4eaf5" : "#1a2035";
  const bord = dark ? "#1e2d45" : "#dce8ff";
  const navBg = dark ? "rgba(11,15,26,.94)" : "rgba(244,247,255,.94)";

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 6%",
          height: 64,
          borderBottom: `1px solid ${bord}`,
          backdropFilter: "blur(18px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: navBg,
        }}
      >
        {/* Logo with zig-zag */}
        <ZigZagText
          color={blue}
          bottom={2}
          height={7}
          style={{ ...FJ, fontWeight: 800, fontSize: "1.5rem", color: blue, letterSpacing: "-0.5px", cursor: "pointer" }}
          onClick={() => jump("home")}
        >
          YtDown
        </ZigZagText>

        {/* Desktop nav links — each has its own hover/zig-zag */}
        <div className="d-nav">
          {NAV_LINKS.map(([lbl, id]) => (
            <NavItem key={id} label={lbl} id={id} jump={jump} mu={mu} blue={blue} FM={FM} />
          ))}
        </div>

        {/* Desktop theme toggle */}
        <div className="d-tog">
          <MoonIco />
          <input type="checkbox" id="dtog" className="theme-chk" checked={!dark} onChange={() => setDark(!dark)} />
          <label htmlFor="dtog" className="theme-lbl" />
          <SunIco />
        </div>

        {/* Hamburger */}
        <button className="hmenu" onClick={() => setMenu(!menu)} style={{ color: tx }}>
          {menu ? <CloseIco /> : <MenuIco />}
        </button>
      </nav>

      {/* ── Mobile Menu (no zig-zag here) ── */}
      <div
        className={`mob-nav ${menu ? "open" : ""}`}
        style={{ background: navBg, backdropFilter: "blur(18px)", borderBottom: `1px solid ${bord}` }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 0, paddingTop: 14 }}>
          {NAV_LINKS.map(([lbl, id]) => (
            <button
              key={id}
              onClick={() => jump(id)}
              style={{ background: "none", border: "none", borderBottom: `1px solid ${bord}`, color: tx, cursor: "pointer", fontWeight: 600, fontSize: "1rem", ...FM, padding: "13px 0", textAlign: "left" }}
            >
              {lbl}
            </button>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 18 }}>
            <MoonIco />
            <input type="checkbox" id="mtog" className="theme-chk" checked={!dark} onChange={() => setDark(!dark)} />
            <label htmlFor="mtog" className="theme-lbl" />
            <SunIco />
            <span style={{ color: mu, fontSize: ".85rem", fontWeight: 600, ...FU }}>{dark ? "Dark" : "Light"} Mode</span>
          </div>
        </div>
      </div>
    </>
  );
}
