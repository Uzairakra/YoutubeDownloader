/* ═══════════════════════════════════════════════════════════════
   STATIC DATA & CONFIG
═══════════════════════════════════════════════════════════════ */

export const API = "https://yt-dl.officialhectormanuel.workers.dev/?url=";

export const FORMAT_OPTIONS = [
  { value: "mp3",  label: "MP3"   },
  { value: "1080", label: "1080p" },
  { value: "720",  label: "720p"  },
  { value: "480",  label: "480p"  },
  { value: "360",  label: "360p"  },
  { value: "240",  label: "240p"  },
  { value: "144",  label: "144p"  },
];

export const FEATURES = [
  {
    iconName: "inf",
    title: "No Download Limit",
    desc: "Download as much content as you want — no caps, no restrictions, ever.",
  },
  {
    iconName: "coin",
    title: "Completely Free",
    desc: "Convert and download Video & Audio content without spending a single rupee.",
  },
  {
    iconName: "bolt",
    title: "Lightning Fast Speeds",
    desc: "Our platform converts and delivers Audio & Video files within seconds.",
  },
  {
    iconName: "cursor",
    title: "Easy to Use",
    desc: "Paste a link, pick a format, hit download. That is really all there is to it.",
  },
  {
    iconName: "phone",
    title: "No App Needed",
    desc: "Works entirely in your browser — no installs, no updates, no hassle.",
  },
  {
    iconName: "shield",
    title: "Secure & Private",
    desc: "Your data stays yours. We built YtDown with your privacy front and centre.",
  },
];

export const FAQS = [
  {
    section: "YouTubeDownloader: FAQs",
    items: [
      {
        q: "Are there any subscription plans, or is it a one-time purchase?",
        a: "YtDown is completely free. No subscription, no one-time fee. Just paste your URL and download instantly.",
      },
      {
        q: "Can the downloader be used without providing personal information?",
        a: "Absolutely. No login, no registration, no personal data required. Your privacy is fully respected.",
      },
      {
        q: "What video quality options are available?",
        a: "We support MP3 audio and video from 144p up to 1080p Full HD — choose your preferred format before downloading.",
      },
    ],
  },
  {
    section: "YtDown: FAQs",
    items: [
      {
        q: "Are there any subscription plans, or is it a one-time purchase?",
        a: "No plans, no purchases. YtDown is 100% free. Use it as many times as you like with zero cost.",
      },
      {
        q: "Can the downloader be used without providing personal information?",
        a: "Yes! We collect no personal data. Paste your YouTube link and download — completely anonymous.",
      },
      {
        q: "How fast are the download speeds?",
        a: "Our servers are optimized for speed. Most conversions complete within seconds depending on video length.",
      },
    ],
  },
];

export const isYT = (url) =>
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)[\w-]{11}/.test(
    url.trim()
  );
