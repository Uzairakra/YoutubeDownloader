const FJ = { fontFamily: "'Josefin Sans',sans-serif" };
const FU = { fontFamily: "'Ubuntu',sans-serif" };

export default function Footer() {
  const blue = "#2563eb";

  return (
    <footer style={{ background: "#05080f", padding: "34px 6%" }}>
      <div
        className="foot-in"
        style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}
      >
        <span style={{ ...FJ, fontWeight: 800, fontSize: "1.4rem", color: blue, letterSpacing: "-0.5px" }}>
          YtDown
        </span>
        <span style={{ color: "#374151", fontSize: ".83rem", ...FU }}>
          © {new Date().getFullYear()} All Rights Reserved — Zarii Web Dev
        </span>
      </div>
    </footer>
  );
}
