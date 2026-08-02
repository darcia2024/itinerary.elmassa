import { useEffect, useRef, useState } from "react";

interface SectionDividerProps {
  color?: "gold" | "pink" | "white";
  delay?: number;
}

const SectionDivider = ({ color = "gold", delay = 0 }: SectionDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const glowColors: Record<string, string> = {
    gold: "rgba(212,163,57,0.95), rgba(196,140,60,0.7), rgba(220,180,80,0.4)",
    pink: "rgba(210,80,110,0.95), rgba(196,80,100,0.7), rgba(230,100,120,0.4)",
    white: "rgba(255,255,255,0.95), rgba(255,255,255,0.7), rgba(255,255,255,0.3)",
  };

  const lineColors: Record<string, string> = {
    gold: "rgba(212,163,57,0.25)",
    pink: "rgba(210,80,110,0.2)",
    white: "rgba(255,255,255,0.2)",
  };

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "6px" }}
    >
      {/* Base line */}
      <div
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
        style={{
          height: "1px",
          background: `linear-gradient(to right, transparent 0%, ${lineColors[color]} 20%, ${lineColors[color]} 80%, transparent 100%)`,
        }}
      />

      {/* Sweeping glow */}
      {visible && (
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            width: "28%",
            height: "6px",
            background: `radial-gradient(ellipse at center, ${glowColors[color]}, transparent 70%)`,
            filter: "blur(3px)",
            animation: `lightSweep 2.8s ${delay}s ease-in-out infinite`,
            animationFillMode: "both",
          }}
        />
      )}

      {/* Second sweep — slightly delayed for layered effect */}
      {visible && (
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            width: "14%",
            height: "3px",
            background: `radial-gradient(ellipse at center, rgba(255,255,255,0.9), rgba(255,255,255,0.4) 40%, transparent 70%)`,
            filter: "blur(1px)",
            animation: `lightSweep 2.8s ${delay + 0.08}s ease-in-out infinite`,
            animationFillMode: "both",
          }}
        />
      )}
    </div>
  );
};

export default SectionDivider;
