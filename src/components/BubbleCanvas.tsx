import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface BubbleState {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

interface SquishState {
    scaleX: number;
    scaleY: number;
    rotation: number; // angle of squish axis in degrees
    timestamp: number;
}

const SIZE_MAP = { major: 140, medium: 100, minor: 70 };
const HOVER_SCALE = 1.6;
const SQUISH_AMOUNT = 0.18;
const SQUISH_DURATION = 400; // ms

interface Props {
    projects: any[];
}

const BubbleCanvas: React.FC<Props> = ({ projects }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const bubblesRef = useRef<BubbleState[]>([]);
    const [positions, setPositions] = useState<BubbleState[]>([]);
    const [squishes, setSquishes] = useState<Record<string, SquishState>>({});
    const animFrameRef = useRef<number>(0);
    const pausedRef = useRef(false);
    const squishesRef = useRef<Record<string, SquishState>>({});

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const { width, height } = el.getBoundingClientRect();

        const initial = projects.map((p, i) => {
            const size = SIZE_MAP[p.importance];
            const angle = (i / projects.length) * Math.PI * 2;
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
    }, [projects]);

    const triggerSquish = useCallback((id: string, nx: number, ny: number) => {
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
            const sizeI = SIZE_MAP[projects[i].importance];
            const rI = sizeI / 2;
            const cxI = bubbles[i].x + rI;
            const cyI = bubbles[i].y + rI;

            for (let j = i + 1; j < bubbles.length; j++) {
                const sizeJ = SIZE_MAP[projects[j].importance];
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
                        triggerSquish(projects[i].id, -nx, -ny);
                        triggerSquish(projects[j].id, nx, ny);
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
            const size = SIZE_MAP[projects[i].importance];

            if (b.x <= 0) {
                b.vx = Math.abs(b.vx);
                b.x = 0;
                triggerSquish(projects[i].id, 1, 0);
            } else if (b.x + size >= width) {
                b.vx = -Math.abs(b.vx);
                b.x = width - size;
                triggerSquish(projects[i].id, -1, 0);
            }
            if (b.y <= 0) {
                b.vy = Math.abs(b.vy);
                b.y = 0;
                triggerSquish(projects[i].id, 0, 1);
            } else if (b.y + size >= height) {
                b.vy = -Math.abs(b.vy);
                b.y = height - size;
                triggerSquish(projects[i].id, 0, -1);
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
    }, [projects, triggerSquish]);

    useEffect(() => {
        animFrameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrameRef.current);
    }, [animate]);

    const handleHover = (id: string | null) => {
        setHoveredId(id);
        pausedRef.current = id !== null;
    };

    const colorMap: Record<string, string> = {
        coral: "var(--bubble-coral)",
        teal: "var(--bubble-teal)",
        amber: "var(--bubble-amber)",
        violet: "var(--bubble-violet)",
        sky: "var(--bubble-sky)",
        rose: "var(--bubble-rose)",
    };

    const getColors = (project: Project) => {
        const c1 = colorMap[project.color] || colorMap.coral;
        const c2 = colorMap[project.colorEnd || project.color] || c1;
        return { c1, c2 };
    };

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-background">
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Title */}
            <div className="absolute top-8 left-8 z-10">
                <h1 className="font-display text-3xl font-bold text-foreground tracking-tight">
                    My Projects
                </h1>
                <p className="text-muted-foreground text-sm mt-1 font-body">
                    Hover over a bubble to explore
                </p>
            </div>

            {/* Bubbles */}
            {projects.map((project, i) => {
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
                            opacity: isAnyHovered && !isHovered ? 0.4 : 1,
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
                                            : { opacity: 1, x: 0, y: 0 }
                                    }
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="relative z-10"
                                    style={{ filter: "drop-shadow(0 2px 4px hsl(0 0% 0% / 0.3))" }}
                                >
                                    <Icon
                                        size={size * 0.28}
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
                                            animate={{ opacity: 1 }}
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
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 15 }}
                                                        transition={{ duration: 0.3, delay: 0.05 }}
                                                    >
                                                        <Icon
                                                            size={size * 0.18}
                                                            style={{ color: `hsl(0 0% 100% / 0.9)`, filter: "drop-shadow(0 2px 4px hsl(0 0% 0% / 0.3))" }}
                                                            strokeWidth={1.5}
                                                            className="mx-auto mb-2"
                                                        />
                                                    </motion.div>
                                                    <motion.p
                                                        className="font-display font-semibold leading-tight"
                                                        style={{ fontSize: Math.max(12, size * 0.1), color: "hsl(0 0% 100% / 0.95)", textShadow: "0 1px 3px hsl(0 0% 0% / 0.3)" }}
                                                        initial={{ opacity: 0, y: 18 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 18 }}
                                                        transition={{ duration: 0.3, delay: 0.1 }}
                                                    >
                                                        {project.name}
                                                    </motion.p>
                                                    <motion.p
                                                        style={{ fontSize: Math.max(9, size * 0.075), color: "hsl(0 0% 100% / 0.7)", textShadow: "0 1px 2px hsl(0 0% 0% / 0.2)" }}
                                                        className="mt-0.5 leading-snug"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
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
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -15 }}
                                                        transition={{ duration: 0.25, delay: 0.05 }}
                                                    >
                                                        {project.name}
                                                    </motion.p>
                                                    <motion.p
                                                        style={{ fontSize: Math.max(8, size * 0.07), color: "hsl(0 0% 100% / 0.7)", textShadow: "0 1px 2px hsl(0 0% 0% / 0.2)" }}
                                                        className="mt-0.5 leading-snug"
                                                        initial={{ opacity: 0, x: -18 }}
                                                        animate={{ opacity: 1, x: 0 }}
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
