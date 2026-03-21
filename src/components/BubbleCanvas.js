
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectBubbleInfo } from "../fileinfo/projectbubbleinfo";

const SIZE_MAP = { major: 140, medium: 100, minor: 70 };
const HOVER_SCALE = 1.6;
const SQUISH_AMOUNT = 0.18;
const SQUISH_DURATION = 400; // ms

const BubbleCanvas = () => {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const bubblesRef = useRef([]);
  const [positions, setPositions] = useState([]);
  const [squishes, setSquishes] = useState({});
  const animFrameRef = useRef(0);
  const pausedRef = useRef(false);
  const squishesRef = useRef({});

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();

    const initial = projectBubbleInfo.map((p, i) => {
      const size = SIZE_MAP[p.importance];
      const angle = (i / projectBubbleInfo.length) * Math.PI * 2;
      const radius = Math.min(width, height) * 0.25;
      return {
        x: width / 2 + Math.cos(angle) * radius - size / 2,
        y: height / 2 + Math.sin(angle) * radius - size / 2,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
      };
    });
    bubblesRef.current = initial;
    setPositions([...initial]);
  }, [projectBubbleInfo]);

  const triggerSquish = useCallback((id, nx, ny) => {
    const angle = Math.atan2(ny, nx) * (180 / Math.PI);
    squishesRef.current[id] = {
      scaleX: 1 + SQUISH_AMOUNT,
      scaleY: 1 - SQUISH_AMOUNT,
      rotation: angle,
      timestamp: Date.now(),
    };
  }, []);

  const animate = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (pausedRef.current) {
      animFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    const { width, height } = el.getBoundingClientRect();
    const bubbles = bubblesRef.current;
    const now = Date.now();

    // Move
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].x += bubbles[i].vx;
      bubbles[i].y += bubbles[i].vy;
    }

    // Bubble-to-bubble collision
    for (let i = 0; i < bubbles.length; i++) {
      const sizeI = SIZE_MAP[projectBubbleInfo[i].importance];
      const rI = sizeI / 2;
      const cxI = bubbles[i].x + rI;
      const cyI = bubbles[i].y + rI;

      for (let j = i + 1; j < bubbles.length; j++) {
        const sizeJ = SIZE_MAP[projectBubbleInfo[j].importance];
        const rJ = sizeJ / 2;
        const cxJ = bubbles[j].x + rJ;
        const cyJ = bubbles[j].y + rJ;

        const dx = cxJ - cxI;
        const dy = cyJ - cyI;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = rI + rJ;

        if (dist < minDist && dist > 0) {
          const nx = dx / dist;
          const ny = dy / dist;

          const dvx = bubbles[i].vx - bubbles[j].vx;
          const dvy = bubbles[i].vy - bubbles[j].vy;
          const dvDotN = dvx * nx + dvy * ny;

          if (dvDotN > 0) {
            const mI = rI * rI;
            const mJ = rJ * rJ;
            const totalM = mI + mJ;

            bubbles[i].vx -= (2 * mJ / totalM) * dvDotN * nx;
            bubbles[i].vy -= (2 * mJ / totalM) * dvDotN * ny;
            bubbles[j].vx += (2 * mI / totalM) * dvDotN * nx;
            bubbles[j].vy += (2 * mI / totalM) * dvDotN * ny;

            // Trigger squish on both
            triggerSquish(projectBubbleInfo[i].id, -nx, -ny);
            triggerSquish(projectBubbleInfo[j].id, nx, ny);
          }

          const overlap = minDist - dist;
          const sepX = (overlap / 2) * nx;
          const sepY = (overlap / 2) * ny;
          bubbles[i].x -= sepX;
          bubbles[i].y -= sepY;
          bubbles[j].x += sepX;
          bubbles[j].y += sepY;
        }
      }
    }

    // Wall bounce
    for (let i = 0; i < bubbles.length; i++) {
      const b = bubbles[i];
      const size = SIZE_MAP[projectBubbleInfo[i].importance];

      if (b.x <= 0) {
        b.vx = Math.abs(b.vx);
        b.x = 0;
        triggerSquish(projectBubbleInfo[i].id, 1, 0);
      } else if (b.x + size >= width) {
        b.vx = -Math.abs(b.vx);
        b.x = width - size;
        triggerSquish(projectBubbleInfo[i].id, -1, 0);
      }
      if (b.y <= 0) {
        b.vy = Math.abs(b.vy);
        b.y = 0;
        triggerSquish(projectBubbleInfo[i].id, 0, 1);
      } else if (b.y + size >= height) {
        b.vy = -Math.abs(b.vy);
        b.y = height - size;
        triggerSquish(projectBubbleInfo[i].id, 0, -1);
      }

      const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
      const maxSpeed = 1.2;
      if (speed > maxSpeed) {
        b.vx = (b.vx / speed) * maxSpeed;
        b.vy = (b.vy / speed) * maxSpeed;
      }
    }

    // Decay squishes
    const sqs = squishesRef.current;
    let squishChanged = false;
    for (const id in sqs) {
      const elapsed = now - sqs[id].timestamp;
      if (elapsed >= SQUISH_DURATION) {
        delete sqs[id];
        squishChanged = true;
      } else {
        // Spring-like decay with overshoot
        const t = elapsed / SQUISH_DURATION;
        const spring = Math.exp(-4 * t) * Math.cos(t * Math.PI * 2.5);
        sqs[id].scaleX = 1 + SQUISH_AMOUNT * spring;
        sqs[id].scaleY = 1 - SQUISH_AMOUNT * spring;
        squishChanged = true;
      }
    }

    setPositions(bubbles.map((b) => ({ ...b })));
    if (squishChanged) {
      setSquishes({ ...sqs });
    }
    animFrameRef.current = requestAnimationFrame(animate);
  }, [projectBubbleInfo, triggerSquish]);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [animate]);

  const handleHover = (id) => {
    setHoveredId(id);
    pausedRef.current = id !== null;
  };

  const colorMap = {
    coral: "15 85% 55%",
    teal: "172 55% 42%",
    amber: "38 85% 50%",
    violet: "270 55% 55%",
    sky: "200 70% 48%",
    rose: "340 65% 50%",
    simsimgreen: '110.35 56.52% 50.39%',
    handyMapred: '0 60.26% 30.59%',
    justshootpurple: '238.8 80.65% 36.47%',
    justshootpink: '311.41 100% 31.96%',
    gray: '0 0% 19.61%',
    nearblack: '0 0% 3.92%',
    rdsgray: '0 0% 14.12%',
    bouncerbotpink: '313.82 71.43% 45.29%'
  };

  const getColors = (project) => {
    const c1 = colorMap[project.color] || colorMap.coral;
    const c2 = colorMap[project.colorEnd || project.color] || c1;
    return { c1, c2 };
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-background">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Bubbles */}
      {projectBubbleInfo.map((project, i) => {
        const pos = positions[i];
        if (!pos) return null;
        const size = SIZE_MAP[project.importance];
        const isHovered = hoveredId === project.id;
        const isAnyHovered = hoveredId !== null;
        const { c1, c2 } = getColors(project);
        const Icon = project.icon;
        const isLarge = project.importance === "major";
        const squish = squishes[project.id];

        const squishTransform = squish
          ? `rotate(${squish.rotation}deg) scale(${squish.scaleX}, ${squish.scaleY}) rotate(${-squish.rotation}deg)`
          : undefined;

        return (
          <motion.div
            key={project.id}
            className="absolute cursor-pointer"
            style={{
              left: pos.x,
              top: pos.y,
              width: size,
              height: size,
            }}
            animate={{
              scale: isHovered ? HOVER_SCALE : isAnyHovered ? 0.92 : 1,
              opacity: isAnyHovered && !isHovered ? 0.4 : undefined,
              zIndex: isHovered ? 50 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onMouseEnter={() => handleHover(project.id)}
            onMouseLeave={() => handleHover(null)}
          >
            {/* Squish wrapper */}
            <div
              className="w-full h-full"
              style={{
                transform: isHovered ? undefined : squishTransform,
                transition: "transform 0.05s linear",
              }}
            >
              {/* Outer glow - gradient */}
              <div
                className="absolute rounded-full blur-xl"
                style={{
                  inset: "-15%",
                  background: `linear-gradient(135deg, hsl(${c1} / 0.3), hsl(${c2} / 0.25))`,
                }}
              />

              {/* Bubble body - 3D gradient */}
              <div
                className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: `
                    radial-gradient(circle at 35% 25%, hsl(${c1} / 0.15) 0%, transparent 50%),
                    linear-gradient(145deg, hsl(${c1} / 0.55) 0%, hsl(${c2} / 0.45) 60%, hsl(${c2} / 0.3) 100%)
                  `,
                  border: `1.5px solid hsl(${c1} / 0.35)`,
                  backdropFilter: "blur(12px)",
                  boxShadow: `
                    inset 0 -${size * 0.15}px ${size * 0.3}px hsl(${c2} / 0.15),
                    inset 0 ${size * 0.05}px ${size * 0.15}px hsl(${c1} / 0.2),
                    0 ${size * 0.06}px ${size * 0.2}px hsl(${c1} / 0.2)
                  `,
                }}
              >
                {/* Specular highlight - 3D shine */}
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: "60%",
                    height: "45%",
                    top: "8%",
                    left: "15%",
                    background: `radial-gradient(ellipse at 50% 40%, hsl(0 0% 100% / 0.25), hsl(0 0% 100% / 0.05) 60%, transparent 100%)`,
                    filter: "blur(2px)",
                  }}
                />

                {/* Bottom rim light */}
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: "70%",
                    height: "20%",
                    bottom: "10%",
                    left: "15%",
                    background: `radial-gradient(ellipse, hsl(${c2} / 0.15), transparent 70%)`,
                    filter: "blur(4px)",
                  }}
                />

                {/* Default icon */}
                <motion.div
                  initial={false}
                  animate={
                    isHovered
                      ? isLarge
                        ? { opacity: 0, y: -10 }
                        : { opacity: 0, x: 20 }
                      : { opacity: undefined, x: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="relative z-10"
                  style={{ filter: "drop-shadow(0 2px 4px hsl(0 0% 0% / 0.3))" }}
                >

                  <img
                    alt="tier one project bubble icon"
                    width={size * 0.28}
                    src={project.icon}
                    style={{ color: `hsl(0 0% 100% / 0.9)` }}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Hover content overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-full flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: undefined }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `
                            radial-gradient(circle at 35% 25%, hsl(${c1} / 0.12) 0%, transparent 50%),
                            linear-gradient(145deg, hsl(${c1} / 0.6), hsl(${c2} / 0.5) 60%, hsl(var(--background) / 0.7))
                          `,
                        }}
                      />
                      {/* Keep specular on hover */}
                      <div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                          width: "60%",
                          height: "45%",
                          top: "8%",
                          left: "15%",
                          background: `radial-gradient(ellipse at 50% 40%, hsl(0 0% 100% / 0.2), transparent 60%)`,
                          filter: "blur(2px)",
                        }}
                      />

                      {isLarge ? (
                        <div className="relative z-10 flex flex-col items-center text-center px-4">
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: undefined, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                          >
                            <img
                              alt="tier one project bubble icon"
                              width={size * 0.28}
                              src={project.icon}
                              style={{ color: `hsl(0 0% 100% / 0.9)` }}
                              strokeWidth={1.5}
                              className="mx-auto mb-2"
                            />
                          </motion.div>
                          <motion.p
                            className="font-display font-semibold leading-tight"
                            style={{ fontSize: Math.max(12, size * 0.1), color: "hsl(0 0% 100% / 0.95)", textShadow: "0 1px 3px hsl(0 0% 0% / 0.3)" }}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: undefined, y: 0 }}
                            exit={{ opacity: 0, y: 18 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {project.name}
                          </motion.p>
                          <motion.p
                            style={{ fontSize: Math.max(9, size * 0.075), color: "hsl(0 0% 100% / 0.7)", textShadow: "0 1px 2px hsl(0 0% 0% / 0.2)" }}
                            className="mt-0.5 leading-snug"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: undefined, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                          >
                            {project.tagline}
                          </motion.p>
                        </div>
                      ) : (
                        <div className="relative z-10 flex flex-col items-center text-center px-3">
                          <motion.p
                            className="font-display font-semibold leading-tight"
                            style={{ fontSize: Math.max(10, size * 0.1), color: "hsl(0 0% 100% / 0.95)", textShadow: "0 1px 3px hsl(0 0% 0% / 0.3)" }}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: undefined, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.25, delay: 0.05 }}
                          >
                            {project.name}
                          </motion.p>
                          <motion.p
                            style={{ fontSize: Math.max(8, size * 0.07), color: "hsl(0 0% 100% / 0.7)", textShadow: "0 1px 2px hsl(0 0% 0% / 0.2)" }}
                            className="mt-0.5 leading-snug"
                            initial={{ opacity: 0, x: -18 }}
                            animate={{ opacity: undefined, x: 0 }}
                            exit={{ opacity: 0, x: -18 }}
                            transition={{ duration: 0.25, delay: 0.1 }}
                          >
                            {project.tagline}
                          </motion.p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BubbleCanvas;
