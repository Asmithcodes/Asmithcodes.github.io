import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Pulse {
    id: number;
    x: number;
    y: number;
    direction: 'horizontal' | 'vertical';
    progress: number;
    length: number;
}

/**
 * Flowing Circuit Grid Background
 * A thematic animated background evoking precision engineering through
 * pulsing grid lines and data flow animations.
 */
export function CircuitGridBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const pulsesRef = useRef<Pulse[]>([]);
    const frameRef = useRef<number>(0);
    const pulseIdRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        const gridSize = 60;
        const nodeRadius = 2;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Create new pulse occasionally
        const createPulse = () => {
            if (pulsesRef.current.length > 8) return; // Limit active pulses

            const isHorizontal = Math.random() > 0.5;
            const pulse: Pulse = {
                id: pulseIdRef.current++,
                x: isHorizontal ? 0 : Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
                y: isHorizontal ? Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize : 0,
                direction: isHorizontal ? 'horizontal' : 'vertical',
                progress: 0,
                length: 100 + Math.random() * 150,
            };
            pulsesRef.current.push(pulse);
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0a0f1a');
            gradient.addColorStop(0.5, '#0f172a');
            gradient.addColorStop(1, '#1e293b');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw grid lines
            ctx.strokeStyle = 'rgba(71, 85, 105, 0.15)';
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = 0; x <= canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y <= canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Draw intersection nodes
            for (let x = 0; x <= canvas.width; x += gridSize) {
                for (let y = 0; y <= canvas.height; y += gridSize) {
                    // Calculate distance from mouse for subtle glow
                    const dx = x - mousePosition.x;
                    const dy = y - mousePosition.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 200;
                    const intensity = Math.max(0, 1 - distance / maxDistance);

                    ctx.beginPath();
                    ctx.arc(x, y, nodeRadius + intensity * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(251, 191, 36, ${0.2 + intensity * 0.4})`;
                    ctx.fill();
                }
            }

            if (!prefersReducedMotion) {
                // Update and draw pulses
                pulsesRef.current = pulsesRef.current.filter((pulse) => {
                    const speed = 3;
                    pulse.progress += speed;

                    const pulseGradient = ctx.createLinearGradient(
                        pulse.direction === 'horizontal' ? pulse.progress - pulse.length : pulse.x,
                        pulse.direction === 'vertical' ? pulse.progress - pulse.length : pulse.y,
                        pulse.direction === 'horizontal' ? pulse.progress : pulse.x,
                        pulse.direction === 'vertical' ? pulse.progress : pulse.y
                    );
                    pulseGradient.addColorStop(0, 'rgba(251, 191, 36, 0)');
                    pulseGradient.addColorStop(0.5, 'rgba(251, 191, 36, 0.6)');
                    pulseGradient.addColorStop(1, 'rgba(251, 191, 36, 0)');

                    ctx.strokeStyle = pulseGradient;
                    ctx.lineWidth = 2;
                    ctx.beginPath();

                    if (pulse.direction === 'horizontal') {
                        const startX = Math.max(0, pulse.progress - pulse.length);
                        const endX = pulse.progress;
                        ctx.moveTo(startX, pulse.y);
                        ctx.lineTo(endX, pulse.y);
                    } else {
                        const startY = Math.max(0, pulse.progress - pulse.length);
                        const endY = pulse.progress;
                        ctx.moveTo(pulse.x, startY);
                        ctx.lineTo(pulse.x, endY);
                    }

                    ctx.stroke();

                    // Keep pulse if still on screen
                    const maxDimension = Math.max(canvas.width, canvas.height);
                    return pulse.progress - pulse.length < maxDimension;
                });

                // Create new pulse occasionally
                frameRef.current++;
                if (frameRef.current % 60 === 0) {
                    createPulse();
                }
            }

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [prefersReducedMotion, mousePosition]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
            style={{ pointerEvents: 'none' }}
        />
    );
}
