import { useState, useCallback, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
    direction?: 'horizontal' | 'vertical' | 'diagonal';
    pauseOnHover?: boolean;
    yoyo?: boolean;
}

export function GradientText({
    children,
    className = '',
    colors=['#f59e0b', '#fbbf24', '#ffffff', '#fbbf24', '#f59e0b'],
    animationSpeed = 6,
    showBorder = false,
    direction = 'horizontal',
    pauseOnHover = false,
    yoyo = false,
}: GradientTextProps) {
    const [isPaused, setIsPaused] = useState(false);
    const progress = useMotionValue(0);
    const elapsedRef = useRef(0);
    const lastTimeRef = useRef<number | null>(null);

    const animationDuration = animationSpeed * 1000;

    useAnimationFrame(time => {
        if (isPaused) {
            lastTimeRef.current = null;
            return;
        }

        if (lastTimeRef.current === null) {
            lastTimeRef.current = time;
            return;
        }

        const deltaTime = time - lastTimeRef.current;
        lastTimeRef.current = time;
        elapsedRef.current += deltaTime;

        if (yoyo) {
            const fullCycle = animationDuration * 2;
            const cycleTime = elapsedRef.current % fullCycle;
            if (cycleTime < animationDuration) {
                progress.set((cycleTime / animationDuration) * 100);
            } else {
                progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
            }
        } else {
            progress.set((elapsedRef.current / animationDuration) * 100);
        }
    });

    useEffect(() => {
        elapsedRef.current = 0;
        progress.set(0);
    }, [animationSpeed, progress, yoyo]);

    const backgroundPosition = useTransform(progress, p => {
        if (direction === 'horizontal') return `${p}% 50%`;
        if (direction === 'vertical') return `50% ${p}%`;
        return `${p}% 50%`;
    });

    const handleMouseEnter = useCallback(() => {
        if (pauseOnHover) setIsPaused(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
        if (pauseOnHover) setIsPaused(false);
    }, [pauseOnHover]);

    const gradientAngle =
        direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';

    const gradientColors = [...colors, colors[0]].join(', ');

    const gradientStyle = {
        backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
        backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
        backgroundRepeat: 'repeat' as const,
    };

    return (
        <motion.span
            className={`relative mx-auto inline-flex max-w-fit flex-row items-center justify-center overflow-hidden ${showBorder ? 'rounded-[1.25rem] py-1 px-2' : ''} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showBorder && (
                <motion.span
                    className="absolute inset-0 z-0 pointer-events-none rounded-[1.25rem]"
                    style={{ ...gradientStyle, backgroundPosition }}
                >
                    <span
                        className="absolute rounded-[1.25rem]"
                        style={{
                            background: 'inherit',
                            width: 'calc(100% - 2px)',
                            height: 'calc(100% - 2px)',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#060010',
                            zIndex: -1,
                        }}
                    />
                </motion.span>
            )}
            <motion.span
                className="relative z-10 text-transparent bg-clip-text"
                style={{ ...gradientStyle, backgroundPosition, WebkitBackgroundClip: 'text' }}
            >
                {children}
            </motion.span>
        </motion.span>
    );
}
