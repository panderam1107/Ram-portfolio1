import { useEffect, useRef } from "react";

export default function ParticleBackground({
  spacing = 28,
  radius = 140,
  strength = 0.9,
  color = "rgba(120, 170, 255, 0.8)",
  size = 1.8,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let dots = [];
    let width = 0;
    let height = 0;
    let frameId;
    const mouse = { x: -9999, y: -9999 };

    function build() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          dots.push({ hx: x, hy: y, x, y, vx: 0, vy: 0 });
        }
      }
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < radius && dist > 0.01) {
          const force = ((radius - dist) / radius) * strength;
          d.vx += (dx / dist) * force * 4;
          d.vy += (dy / dist) * force * 4;
        }

        d.vx += (d.hx - d.x) * 0.06;
        d.vy += (d.hy - d.y) * 0.06;
        d.vx *= 0.82;
        d.vy *= 0.82;
        d.x += d.vx;
        d.y += d.vy;

        ctx.beginPath();
        ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(frame);
    }

    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    build();
    frame();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", build);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", build);
    };
  }, [spacing, radius, strength, color, size]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}