import Select from "react-select";
import { DlIco, MusicIco, PlayIco2, SparkIco, YTIco } from "../icons";
import { FORMAT_OPTIONS } from "../data";
import ZigZagText from "./ZigZagText";

const FM = { fontFamily: "'Montserrat',sans-serif" };
const FJ = { fontFamily: "'Josefin Sans',sans-serif" };
const FU = { fontFamily: "'Ubuntu',sans-serif" };

export default function Hero({
  dark,
  url,
  setUrl,
  fmt,
  setFmt,
  err,
  setErr,
  busy,
  go,
  data,
  aErr,
  link,
}) {
  const blue = "#2563eb";
  const mu = dark ? "#8899b0" : "#6b7a99";
  const tx = dark ? "#e4eaf5" : "#1a2035";
  const card = dark ? "#161e30" : "#ffffff";
  const bord = dark ? "#1e2d45" : "#dce8ff";
  const soft = dark ? "rgba(37,99,235,.14)" : "rgba(37,99,235,.08)";

  const selStyles = {
    container: (b) => ({ ...b, width: "100%" }),
    control: (b, s) => ({
      ...b,
      background: dark ? "#0e1626" : "#eef2ff",
      border: s.isFocused
        ? `2px solid ${blue}`
        : `2px solid ${dark ? "#1e2d45" : "#c7d8ff"}`,
      borderRadius: "12px",
      boxShadow: "none",
      minHeight: "52px",
      cursor: "pointer",
      ...FM,
      fontWeight: 600,
      "&:hover": { borderColor: blue },
    }),
    menu: (b) => ({
      ...b,
      background: dark ? "#131929" : "#fff",
      border: `1px solid ${dark ? "#1e2d45" : "#c7d8ff"}`,
      borderRadius: "12px",
      overflow: "hidden",
      zIndex: 9999,
      boxShadow: "0 12px 40px rgba(0,0,0,.28)",
    }),
    menuList: (b) => ({ ...b, padding: "6px", maxHeight: "220px" }),
    option: (b, { isFocused, isSelected }) => ({
      ...b,
      background: isSelected
        ? blue
        : isFocused
        ? dark
          ? "#1e2d45"
          : "#eef2ff"
        : "transparent",
      color: isSelected ? "#fff" : tx,
      borderRadius: "8px",
      cursor: "pointer",
      ...FM,
      fontWeight: 500,
      fontSize: ".9rem",
      padding: "10px 14px",
    }),
    singleValue: (b) => ({ ...b, color: tx, ...FM, fontWeight: 700 }),
    placeholder: (b) => ({ ...b, color: mu }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (b) => ({ ...b, color: blue }),
    valueContainer: (b) => ({ ...b, padding: "2px 14px" }),
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        padding: "80px 6% 68px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* bg glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 500,
          background:
            "radial-gradient(ellipse,rgba(37,99,235,.16) 0%,transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating icons (desktop only via global.css) */}
      <div
        className="fi-l float-1"
        style={{
          position: "absolute",
          left: "7%",
          top: "48%",
          transform: "translateY(-50%)",
          background: "linear-gradient(135deg,#ef4444,#dc2626)",
          borderRadius: "50%",
          width: 62,
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 8px 26px rgba(239,68,68,.38)",
        }}
      >
        <MusicIco />
      </div>
      <div
        className="fi-r float-2"
        style={{
          position: "absolute",
          right: "7%",
          top: "48%",
          transform: "translateY(-50%)",
          background: `linear-gradient(135deg,${blue},#1d4ed8)`,
          borderRadius: "50%",
          width: 62,
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 8px 26px rgba(37,99,235,.38)",
        }}
      >
        <PlayIco2 />
      </div>

      {/* Decorations */}
      <span
        className="sparkle"
        style={{
          position: "absolute",
          top: 30,
          left: "14%",
          color: blue,
          opacity: 0.75,
        }}
      >
        <SparkIco />
      </span>
      <span style={{ position: "absolute", top: 42, right: "11%" }}>
        <YTIco />
      </span>

      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: soft,
          border: `1px solid ${dark ? "#1e3a6e" : "#c7d8ff"}`,
          borderRadius: 50,
          padding: "6px 18px",
          marginBottom: 26,
        }}
      >
        <span
          style={{
            color: blue,
            fontWeight: 700,
            fontSize: ".76rem",
            letterSpacing: ".07em",
            ...FJ,
          }}
        >
          • FREE • FAST • NO LIMITS
        </span>
      </div>

      <h1
        style={{
          ...FJ,
          fontSize: "clamp(2rem,5.5vw,3.6rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: 20,
          letterSpacing: "-1px",
        }}
      >
        YouTube Video{" "}
        <ZigZagText
          color={blue}
          bottom={6}
          height={10}
          style={{ color: blue }}
        >
          Downloader
        </ZigZagText>
      </h1>

      <p
        style={{
          color: mu,
          maxWidth: 540,
          margin: "0 auto 46px",
          fontSize: "1.04rem",
          lineHeight: 1.8,
          ...FU,
        }}
      >
        Quick, hassle-free downloads from YouTube. Paste your link, choose your
        format, and hit download — it's that simple.
      </p>

      {/* Form */}
      <div
        className="form-row"
        style={{
          display: "flex",
          gap: 10,
          maxWidth: 730,
          margin: "0 auto",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="sel-w" style={{ width: 170, flexShrink: 0 }}>
          <Select
            options={FORMAT_OPTIONS}
            value={fmt}
            onChange={setFmt}
            styles={selStyles}
            isSearchable={false}
            menuPlacement="auto"
            menuPortalTarget={document.body}
          />
        </div>

        <div className="inp-w" style={{ flex: 1, minWidth: 200 }}>
          <input
            type="text"
            placeholder="Paste YouTube URL here…"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setErr("");
            }}
            onKeyDown={(e) => e.key === "Enter" && go()}
            style={{
              width: "100%",
              height: 52,
              padding: "0 16px",
              border: err
                ? `2px solid #ef4444`
                : `2px solid ${dark ? "#1e2d45" : "#c7d8ff"}`,
              borderRadius: 12,
              background: dark ? "#0e1626" : "#eef2ff",
              color: tx,
              fontSize: ".93rem",
              outline: "none",
              boxSizing: "border-box",
              ...FM,
              fontWeight: 500,
              transition: "border .2s",
            }}
          />
          {err && (
            <p
              style={{
                color: "#ef4444",
                fontSize: ".8rem",
                marginTop: 6,
                textAlign: "left",
                ...FU,
              }}
            >
              {err}
            </p>
          )}
        </div>

        <button
          className={!busy ? "pulse" : ""}
          onClick={go}
          disabled={busy}
          style={{
            height: 52,
            padding: "0 28px",
            background: blue,
            color: "#fff",
            border: "none",
            borderRadius: 12,
            fontWeight: 700,
            fontSize: ".93rem",
            cursor: busy ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            ...FM,
            opacity: busy ? 0.75 : 1,
            transition: "opacity 0.2s,transform .15s",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            if (!busy) e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <DlIco />
          {busy ? "Fetching…" : "Download"}
        </button>
      </div>

      {aErr && (
        <p
          style={{
            color: "#ef4444",
            marginTop: 14,
            fontSize: ".88rem",
            ...FU,
          }}
        >
          {aErr}
        </p>
      )}

      {/* Result card */}
      {data && (
        <div
          className="fade-up"
          style={{
            maxWidth: 710,
            margin: "28px auto 0",
            background: card,
            borderRadius: 18,
            border: `1px solid ${bord}`,
            padding: 22,
            display: "flex",
            gap: 18,
            alignItems: "flex-start",
            textAlign: "left",
            boxShadow: "0 8px 40px rgba(0,0,0,.18)",
            flexWrap: "wrap",
          }}
        >
          <img
            src={data.thumbnail}
            alt="thumb"
            style={{
              width: 138,
              height: 84,
              objectFit: "cover",
              borderRadius: 10,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: 180 }}>
            <p
              style={{
                fontWeight: 700,
                marginBottom: 6,
                fontSize: ".96rem",
                lineHeight: 1.45,
                ...FJ,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {data.title}
            </p>
            <p style={{ color: mu, fontSize: ".8rem", marginBottom: 14, ...FU }}>
              Format: {fmt.label}
            </p>
            <a
              className={!busy ? "pulse" : ""}
              href={link()}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: blue,
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: ".88rem",
                textDecoration: "none",
                ...FM,
              }}
            >
              <DlIco /> Download {fmt.label}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
