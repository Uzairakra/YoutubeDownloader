import { useState } from "react";

/**
 * ZigZagText — wraps any text with an animated SVG zig-zag underline.
 * The line grows to full width on hover and shrinks back on mouse-leave.
 *
 * Props:
 *  children  – text / JSX inside
 *  color     – stroke color (default blue)
 *  bottom    – vertical offset below text in px (default 4)
 *  height    – SVG height in px (default 8)
 *  style     – extra styles for the outer span
 */
export default function ZigZagText({
  children,
  color = "#2563eb",
  bottom = 4,
  height = 8,
  style = {},
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);

  const handleEnter = (e) => {
    setHovered(true);
    onMouseEnter && onMouseEnter(e);
  };
  const handleLeave = (e) => {
    setHovered(false);
    onMouseLeave && onMouseLeave(e);
  };

  return (
    <span
      style={{ position: "relative", display: "inline-block", ...style }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}

      {/* Animated zig-zag SVG underline */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -bottom,
          left: 0,
          width: hovered ? "100%" : "0%",
          height,
          overflow: "visible",
          transition: "width 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "block",
          pointerEvents: "none",
        }}
        viewBox="0 0 120 8"
        preserveAspectRatio="none"
      >
        <path
          d="M0,6 L6,2 L12,6 L18,2 L24,6 L30,2 L36,6 L42,2 L48,6 L54,2 L60,6 L66,2 L72,6 L78,2 L84,6 L90,2 L96,6 L102,2 L108,6 L114,2 L120,6"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
