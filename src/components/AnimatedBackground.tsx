"use client";

import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  variant?: "hero" | "contact";
  className?: string;
}

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  pulseSpeed: number;
};

export default function AnimatedBackground({
  variant = "hero",
  className = "",
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationFrameId = 0;
    let mousePos: { x: number; y: number } | null = null;
    let isVisible = true;
    let isRunning = false;

    function resize() {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      width = rect.width || container.clientWidth || window.innerWidth || 1200;
      height = rect.height || container.clientHeight || window.innerHeight || 800;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (nodes.length === 0 || Math.abs(nodes[0]?.x - width) > width) {
        initNodes();
      }
    }

    function initNodes() {
      if (width <= 0 || height <= 0) return;
      // Balanced density: visible constellation networks without visual crowding or CPU waste
      const maxDensity = variant === "hero" ? 38 : 28;
      const count = Math.min(
        Math.max(Math.round((width * height) / 22000), 20),
        maxDensity
      );
      const speed = variant === "hero" ? 0.28 : 0.22;

      nodes = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        // Balanced node radius (1.8px to 2.8px) - clearly visible yet elegant
        r: Math.random() * 1.0 + 1.8,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.025 + 0.015,
      }));
    }

    const connectDistance = variant === "hero" ? 140 : 125;
    const connectDistSq = connectDistance * connectDistance;
    const mouseRadius = 160;

    function renderFrame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // 1. Update node physics (only when animated)
      if (!prefersReducedMotion) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          n.pulse += n.pulseSpeed;

          // Rebound from boundaries
          if (n.x < 0) {
            n.x = 0;
            n.vx *= -1;
          } else if (n.x > width) {
            n.x = width;
            n.vx *= -1;
          }

          if (n.y < 0) {
            n.y = 0;
            n.vy *= -1;
          } else if (n.y > height) {
            n.y = height;
            n.vy *= -1;
          }

          // Gentle mouse repulsion
          if (mousePos) {
            const dx = n.x - mousePos.x;
            const dy = n.y - mousePos.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < mouseRadius * mouseRadius && distSq > 0) {
              const dist = Math.sqrt(distSq);
              const force = (mouseRadius - dist) / mouseRadius;
              n.x += (dx / dist) * force * 0.8;
              n.y += (dy / dist) * force * 0.8;
            }
          }
        }
      }

      // 2. Draw Subtle White Constellation Lines
      ctx.shadowColor = "rgba(0, 0, 0, 0.18)";
      ctx.shadowBlur = 3;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 1;
      ctx.lineWidth = 1.1;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectDistSq) {
            const dist = Math.sqrt(distSq);
            const norm = 1 - dist / connectDistance;
            ctx.strokeStyle = `rgba(255, 255, 255, ${norm * 0.85})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 3. Delicate White Cursor Tracer Lines
      if (mousePos && !prefersReducedMotion) {
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        ctx.shadowBlur = 4;
        ctx.lineWidth = 1.2;

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = n.x - mousePos.x;
          const dy = n.y - mousePos.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseRadius * mouseRadius) {
            const dist = Math.sqrt(distSq);
            const norm = 1 - dist / mouseRadius;
            ctx.strokeStyle = `rgba(255, 255, 255, ${norm * 0.9})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
          }
        }
      }

      // 4. White Tech Dots (Solid core with micro-shadow)
      ctx.shadowColor = "rgba(0, 0, 0, 0.22)";
      ctx.shadowBlur = 3;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 1;
      ctx.fillStyle = "#FFFFFF";

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const glow = (Math.sin(n.pulse) + 1) / 2;
        const currentR = n.r + glow * 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Soft luminous white halo without shadow
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const glow = (Math.sin(n.pulse) + 1) / 2;
        const currentR = n.r + glow * 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR * 1.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + glow * 0.25})`;
        ctx.fill();
      }
    }

    function draw() {
      if (!isVisible || prefersReducedMotion) {
        isRunning = false;
        return;
      }
      renderFrame();
      animationFrameId = requestAnimationFrame(draw);
    }

    function startLoop() {
      if (isRunning || prefersReducedMotion) return;
      isRunning = true;
      animationFrameId = requestAnimationFrame(draw);
    }

    function stopLoop() {
      isRunning = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    }

    // Initial setup
    resize();
    initNodes();

    if (prefersReducedMotion) {
      // Draw static composition once without starting rAF loop
      renderFrame();
    } else {
      startLoop();
    }

    // Visibility Observer to pause animation loop when off-screen
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion) {
        renderFrame();
      }
    });
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const inX = e.clientX >= rect.left && e.clientX <= rect.right;
      const inY = e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (inX && inY) {
        mousePos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      } else {
        mousePos = null;
      }
    };

    const handleMouseLeave = () => {
      mousePos = null;
    };

    window.addEventListener("resize", resize);
    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      stopLoop();
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
    >
      {/* Soft Luminous Warm Aurora Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gentle ambient warmth for white constellation contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(201, 164, 92, 0.08) 0%, rgba(229, 227, 220, 0.14) 50%, transparent 80%)",
          }}
        />

        <div
          className={`absolute rounded-full filter blur-[90px] sm:blur-[120px] will-change-transform animate-aurora-drift-1 ${
            variant === "hero"
              ? "h-[450px] w-[450px] sm:h-[650px] sm:w-[650px] -top-20 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-[#C9A45C]/30 via-[#D6B56D]/20 to-transparent"
              : "h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] top-1/4 -right-10 bg-gradient-to-br from-[#C9A45C]/25 via-[#D6B56D]/15 to-transparent"
          }`}
        />
        <div
          className={`absolute rounded-full filter blur-[80px] sm:blur-[100px] will-change-transform animate-aurora-drift-2 ${
            variant === "hero"
              ? "h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] bottom-10 left-[10%] bg-gradient-to-br from-[#E5E3DC] via-[#C9A45C]/20 to-transparent"
              : "h-[360px] w-[360px] sm:h-[500px] sm:w-[500px] -bottom-10 left-10 bg-gradient-to-tr from-[#C9A45C]/22 via-[#E5E3DC] to-transparent"
          }`}
        />
      </div>

      {/* Living Interactive Constellation Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
      />

      {/* Soft Top/Bottom Vignette Blends */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#F7F6F2] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#F7F6F2] to-transparent pointer-events-none" />
    </div>
  );
}
