import { useRef } from "react";

const MAX_TILT = 6; // derajat, sengaja kecil supaya terasa halus, bukan norak

export default function Tilt({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const frame = useRef(null);

  function handleMouseMove(e) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * MAX_TILT * 2;
      const rotateX = (0.5 - py) * MAX_TILT * 2;
      node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      node.style.setProperty("--glow-x", `${px * 100}%`);
      node.style.setProperty("--glow-y", `${py * 100}%`);
    });
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "";
  }

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
