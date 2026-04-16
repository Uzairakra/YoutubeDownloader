export default function WarningBanner({ dark }) {
  const bg = dark ? "#07090f" : "#eef2ff";
  const hoverBg = dark ? "#0f172a" : "#e0e7ff";
  const text = dark ? "#6a7e9a" : "#475569";
  const svgStroke = dark ? "#ffffff" : "#000000";

  return (
    <div
      style={{
        width: "80%",
        margin: "40px auto",
        background: bg,
        color: text,
        textAlign: "center",
        padding: "20px 12%",
        fontSize: ".8rem",
        letterSpacing: ".07em",
        fontWeight: 700,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Josefin Sans',sans-serif",
        borderRadius: "16px",
        transition: "background .3s, transform .3s",
        boxShadow: dark ? "0 4px 20px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = hoverBg;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = bg;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Left curves */}
      <svg
        className="wsvg wsvg-l"
        viewBox="0 0 130 80"
        fill="none"
        style={{ width: 130, opacity: 0.3 }}
      >
        <path d="M0 80 Q50 40 0 0" stroke={svgStroke} strokeWidth="1.6" fill="none" />
        <path d="M22 80 Q72 40 22 0" stroke={svgStroke} strokeWidth=".9" fill="none" opacity=".5" />
        <circle cx="0" cy="80" r="35" stroke={svgStroke} strokeWidth="1" fill="none" opacity=".25" />
        <circle cx="0" cy="0" r="55" stroke={svgStroke} strokeWidth=".7" fill="none" opacity=".15" />
        <circle cx="0" cy="40" r="18" stroke={svgStroke} strokeWidth=".5" fill="none" opacity=".3" />
      </svg>

      WE DO NOT ALLOW / SUPPORT THE DOWNLOAD OF COPYRIGHTED MATERIAL

      {/* Right curves */}
      <svg
        className="wsvg wsvg-r"
        viewBox="0 0 130 80"
        fill="none"
        style={{ width: 130, opacity: 0.3 }}
      >
        <path d="M130 80 Q80 40 130 0" stroke={svgStroke} strokeWidth="1.6" fill="none" />
        <path d="M108 80 Q58 40 108 0" stroke={svgStroke} strokeWidth=".9" fill="none" opacity=".5" />
        <circle cx="130" cy="80" r="35" stroke={svgStroke} strokeWidth="1" fill="none" opacity=".25" />
        <circle cx="130" cy="0" r="55" stroke={svgStroke} strokeWidth=".7" fill="none" opacity=".15" />
        <circle cx="130" cy="40" r="18" stroke={svgStroke} strokeWidth=".5" fill="none" opacity=".3" />
      </svg>
    </div>
  );
}
