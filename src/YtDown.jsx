import { useState } from "react";
import "./styles/global.css";

/* Components */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WarningBanner from "./components/WarningBanner";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";

/* Data & Utils */
import { API, isYT } from "./data";

export default function YtDown() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [url, setUrl] = useState("");
  const [fmt, setFmt] = useState(null);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [data, setData] = useState(null);
  const [aErr, setAErr] = useState("");

  const bg = dark ? "#0b0f1a" : "#f4f7ff";
  const tx = dark ? "#e4eaf5" : "#1a2035";

  const FM = { fontFamily: "'Montserrat',sans-serif" };

  const go = async () => {
    setData(null);
    setAErr("");
    if (!url.trim()) {
      setErr("Please enter a YouTube URL.");
      return;
    }
    if (!isYT(url)) {
      setErr(
        "❌ Enter a valid YouTube URL — e.g. https://youtube.com/watch?v=..."
      );
      return;
    }
    setErr("");
    setBusy(true);
    try {
      const r = await fetch(`${API}${encodeURIComponent(url.trim())}`);
      const d = await r.json();
      if (!d.status) throw new Error();
      setData(d);
      // Build format options from API response and auto-select first
      const quals = d.available_qualities || [];
      const firstOpt = quals.length
        ? { value: quals[0], label: quals[0] === "mp3" ? "MP3 (Audio)" : `${quals[0]}p` }
        : null;
      setFmt(firstOpt);
    } catch {
      setAErr("Could not fetch video info. Check the URL or try again.");
    } finally {
      setBusy(false);
    }
  };

  const link = () => {
    if (!data || !fmt) return "#";
    return fmt.value === "mp3" ? data.audio : data.videos?.[fmt.value] || "#";
  };

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div
      style={{
        ...FM,
        background: bg,
        color: tx,
        minHeight: "100vh",
        transition: "background .3s,color .3s",
        overflowX: "hidden",
      }}
    >
      <Navbar
        dark={dark}
        setDark={setDark}
        menu={menu}
        setMenu={setMenu}
        jump={jump}
      />

      <Hero
        dark={dark}
        url={url}
        setUrl={setUrl}
        fmt={fmt}
        setFmt={setFmt}
        err={err}
        setErr={setErr}
        busy={busy}
        go={go}
        data={data}
        aErr={aErr}
        link={link}
      />

      <WarningBanner dark={!dark} />

      <About dark={dark} />

      <FAQ dark={dark} />

      <Features dark={dark} />

      <Footer />
    </div>
  );
}
