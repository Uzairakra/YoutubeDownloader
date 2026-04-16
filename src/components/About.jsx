import { ChevR } from "../icons";
import ZigZagText from "./ZigZagText";

const FJ = { fontFamily: "'Josefin Sans',sans-serif" };
const FU = { fontFamily: "'Ubuntu',sans-serif" };

const ABOUT_CARDS = [
  {
    title: "Experience Buffer-Free Entertainment",
    body: "The YouTube Video Downloader promises uninterrupted entertainment and a buffer-free experience for your favourite content. Download effortlessly and say goodbye to buffering forever.",
  },
  {
    title: "Your One-Stop Solution to Video Downloading",
    body: "Tired of buffering pauses? With YtDown you can download your favourite videos for free, watch them offline at the highest quality available — whenever you like.",
  },
];

export default function About({ dark }) {
  const blue = "#2563eb";
  const mu = dark ? "#8899b0" : "#6b7a99";

  return (
    <section style={{ padding: "88px 6%", maxWidth: 1160, margin: "0 auto" }}>
      <p style={{ color: blue, fontWeight: 700, letterSpacing: ".09em", fontSize: ".76rem", marginBottom: 8, ...FJ }}>
        ABOUT
      </p>
      <h2 style={{ ...FJ, fontSize: "clamp(1.8rem,3.2vw,2.7rem)", fontWeight: 800, marginBottom: 18, color: { blue } }}>
        What is{" "}
        <ZigZagText color={blue} bottom={4} height={8} style={{ color: blue }}>
          YtDown
        </ZigZagText>
      </h2>
      <p style={{ color: mu, lineHeight: 1.85, maxWidth: 680, marginBottom: 52, fontSize: "1rem", ...FU }}>
        YtDown is one of the most popular downloader tools on the internet. Download and convert videos
        from YouTube, Twitter, Facebook, TikTok, and more. Paste the URL, choose your format, and click download.
      </p>

      <div className="info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {ABOUT_CARDS.map((item, i) => (
          <div
            key={i}
            style={{
              background: `linear-gradient(135deg,${blue},#1d4ed8)`,
              borderRadius: 18,
              padding: "32px 28px 50px",
              position: "relative",
              overflow: "hidden",
              transition: "transform .22s,box-shadow .22s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(37,99,235,.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Decorative circle */}
            <div style={{ position: "absolute", bottom: -28, right: -28, width: 110, height: 110, borderRadius: "50%", background: "rgba(255,255,255,.06)" }} />
            {/* Arrow button */}
            <div style={{ position: "absolute", bottom: 16, right: 16, width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,.16)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
              <ChevR />
            </div>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem", marginBottom: 14, ...FJ }}>{item.title}</h3>
            <p style={{ color: "rgba(255,255,255,.76)", fontSize: ".9rem", lineHeight: 1.78, ...FU }}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
