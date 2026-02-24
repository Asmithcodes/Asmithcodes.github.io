import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderOpen } from 'lucide-react';
import { Button } from '../UI/Button';
import { GradientText } from '../UI/GradientText';
import { personalInfo } from '../../data/portfolio';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export function Hero() {
    const { displayedText, isComplete } = useTypingEffect(personalInfo.name, 80);

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Main heading with staggered animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.p
                        className="text-amber-500 font-medium mb-4 tracking-wide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 flex items-center justify-center gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <GradientText animationSpeed={4.5} colors={['#fe9d00', '#ffffff', '#1c2739']}>
                            {displayedText}
                        </GradientText>
                        {!isComplete && (
                            <span className="inline-block w-1 h-12 md:h-20 bg-amber-500 animate-pulse"></span>
                        )}
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {personalInfo.role}
                    </motion.p>

                    <motion.p
                        className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {personalInfo.tagline}
                    </motion.p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Button
                        variant="primary"
                        icon={FolderOpen}
                        onClick={scrollToProjects}
                    >
                        View Projects
                    </Button>
                    <Button
                        variant="secondary"
                        icon={Download}
                        href={personalInfo.resumeUrl}
                        external
                    >
                        Download Resume
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-slate-500"
                    >
                        <ArrowDown size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
