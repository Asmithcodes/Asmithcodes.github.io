import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { allProjects } from '../../data/allProjects';
import type { ProjectItem } from '../../data/allProjects';
import { Card } from '../UI/Card';
import { Footer } from '../Layout/Footer';

function AllProjectCard({ project }: { project: ProjectItem }) {
    return (
        <Card
            className="p-8 h-full flex flex-col relative overflow-hidden"
            glow={true}
            featured={true}
            animateFrom="bottom"
        >
            {project.stars && (
                <div className="absolute top-0 right-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-lg z-20">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold tracking-wider">FEATURED PROJECT</span>
                </div>
            )}

            {/* Enhanced glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl z-0 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl z-0 pointer-events-none" />

            {/* Header */}
            <div className="mb-6 relative z-10 pt-4">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30">
                    Project
                </span>
                <h3 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                    {project.title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow relative z-10">
                {project.description}
            </p>

            {/* Focus areas */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.focusAreas.map((area, idx) => (
                    <span
                        key={idx}
                        className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-slate-300 border border-amber-500/20 hover:border-amber-500/40 transition-colors"
                    >
                        {area}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-amber-500/20 relative z-10">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base text-slate-300 hover:text-white transition-colors group"
                    >
                        <Github size={18} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">View Source</span>
                    </a>
                )}
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base text-amber-400 hover:text-amber-300 transition-colors group"
                    >
                        <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Live Demo</span>
                    </a>
                )}
            </div>
        </Card>
    );
}

export function CategoryProjectsPage({ 
    category, 
    title, 
    description 
}: { 
    category: 'software' | 'hardware';
    title: string;
    description: string;
}) {
    useEffect(() => {
        // Temporarily disable smooth scrolling to snap instantly to top
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        
        // Restore smooth scrolling behavior slightly after
        const timeout = setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 50);
        
        return () => clearTimeout(timeout);
    }, [category]); // Re-run if category changes

    const filteredProjects = allProjects.filter(p => p.category === category);

    return (
        <div className="min-h-screen flex flex-col relative z-10 pt-20">
            <Helmet>
                <title>{title} | Asmith Pampana</title>
                <meta name="description" content={description} />
            </Helmet>

            <div className="max-w-6xl mx-auto px-6 w-full flex-grow">
                {/* Embedded Header/Nav specifically for the Category Projects Page */}
                <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
                    <a
                        href="#/"
                        className="flex items-center gap-2 text-slate-300 hover:text-amber-500 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium text-lg">Back to Home</span>
                    </a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl">
                        {description}
                    </p>

                    <div className="flex flex-col gap-8 mb-16">
                        {filteredProjects.map((project) => (
                            <AllProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {/* Resume / Portfolio Link Call to Action */}
                    <div className="flex flex-col items-center justify-center border-t border-white/10 pt-16 mb-24">
                        <p className="text-slate-300 text-xl font-medium mb-4 text-center">
                            Want to see the bigger picture?
                        </p>
                        <p className="text-slate-400 text-base mb-8 text-center max-w-2xl">
                            Explore my full background, technical skills, and work experience on my main portfolio.
                        </p>
                        <a 
                            href="#/" 
                            className="group flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                        >
                            <span>View Full Portfolio</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}

export function SoftwareProjectsPage() {
    return (
        <CategoryProjectsPage 
            category="software" 
            title="Software Projects" 
            description="A collection of my software applications, full-stack platforms, and web-based tools." 
        />
    );
}

export function HardwareProjectsPage() {
    return (
        <CategoryProjectsPage 
            category="hardware" 
            title="Hardware & Embedded Projects" 
            description="An archive of my embedded systems, hardware prototypes, and low-level programming projects." 
        />
    );
}

