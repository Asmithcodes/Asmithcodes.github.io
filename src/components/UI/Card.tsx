import { motion } from 'framer-motion';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
    featured?: boolean;
    animateFrom?: 'left' | 'right' | 'bottom';
}

export function Card({
    children,
    className = '',
    hover = true,
    glow = false,
    featured = false,
    animateFrom = 'bottom'
}: CardProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!hover) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    // Animation variants based on direction
    const getInitialState = () => {
        switch (animateFrom) {
            case 'left':
                return { opacity: 0, x: -50 };
            case 'right':
                return { opacity: 0, x: 50 };
            case 'bottom':
            default:
                return { opacity: 0, y: 20 };
        }
    };

    const getAnimateState = () => {
        switch (animateFrom) {
            case 'left':
            case 'right':
                return { opacity: 1, x: 0 };
            case 'bottom':
            default:
                return { opacity: 1, y: 0 };
        }
    };

    return (
        <motion.div
            className={`
                relative overflow-hidden rounded-xl
                bg-white/5 backdrop-blur-md transform-gpu
                ${featured ? 'border border-amber-500/40' : 'border border-white/10'}
                ${hover && !featured ? 'hover:border-white/20' : ''}
                ${hover && featured ? 'hover:border-amber-500/60' : ''}
                ${glow ? 'hover:shadow-lg hover:shadow-amber-500/10' : ''}
                transition-colors transition-shadow duration-300
                ${className}
            `}
            style={{ 
                WebkitBackfaceVisibility: 'hidden', 
                MozBackfaceVisibility: 'hidden', 
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={getInitialState()}
            whileInView={getAnimateState()}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {/* Subtle gradient follow effect - kept in DOM unconditionally to avoid layout shifts/repaints */}
            {hover && (
                <div
                    className={`absolute pointer-events-none inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-0'}`}
                    style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.15), transparent 50%)`,
                    }}
                />
            )}
            <div className={`relative z-10 transform-gpu ${className.includes('flex-col') ? 'h-full flex flex-col flex-grow' : ''}`}>{children}</div>
        </motion.div>
    );
}
