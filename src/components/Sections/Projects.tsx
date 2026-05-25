import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Star } from 'lucide-react';
import { SectionTitle } from '../UI/SectionTitle';
import { Card } from '../UI/Card';
import { projects } from '../../data/portfolio';
import type { Project } from '../../data/portfolio';

function ProjectCard({ project, index, isFeatured = false }: { project: Project; index: number; isFeatured?: boolean }) {
    // Even index (0, 2, 4...) = left column, animate from left
    // Odd index (1, 3, 5...) = right column, animate from right
    const animateFrom = index % 2 === 0 ? 'left' : 'right';

    if (isFeatured) {
        return (
            <Card
                className="p-8 h-full flex flex-col relative overflow-hidden"
                glow={true}
                featured={true}
                animateFrom="left"
            >
                {/* Featured badge with enhanced styling */}
                <div className="absolute top-0 right-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-lg">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold tracking-wider">FEATURED PROJECT</span>
                </div>

                {/* Enhanced glow effect for featured project */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />

                {/* Header */}
                <div className="mb-6 relative z-10 pt-8">
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30">
                        {project.type}
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
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base text-slate-300 hover:text-white transition-colors group"
                    >
                        <Github size={18} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">View Source</span>
                    </a>
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

    return (
        <Card className="p-6 h-full flex flex-col" glow={project.isPrimary} animateFrom={animateFrom}>
            {/* Header */}
            <div className="mb-4">
                <span className={`
          inline-block px-3 py-1 rounded-full text-xs font-medium mb-3
          ${project.isPrimary
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-slate-700/50 text-slate-400'
                    }
        `}>
                    {project.type}
                </span>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
            </p>

            {/* Group items for IoT projects */}
            {project.isGroup && project.groupItems && (
                <div className="mb-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Includes:</p>
                    <ul className="space-y-1">
                        {project.groupItems.map((item, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                                <ChevronRight size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Focus areas */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.focusAreas.map((area, idx) => (
                    <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10"
                    >
                        {area}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                    <Github size={16} />
                    <span>Source</span>
                </a>
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors"
                    >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                    </a>
                )}
            </div>
        </Card>
    );
}

export function Projects() {
    const featuredProjects = projects.filter(p => p.isFeatured);
    const secondaryProjects = projects.filter(p => !p.isPrimary && !p.isFeatured);

    return (
        <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    title="Projects"
                    subtitle="A selection of projects showcasing my work in web development and systems."
                />

                {/* Featured Project - Full Width */}
                {featuredProjects.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 space-y-8"
                    >
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} isFeatured={true} />
                        ))}
                    </motion.div>
                )}

                {/* Secondary Projects - Systems & Embedded */}
                <div>
                    <h3 className="text-lg font-medium text-slate-400 mb-6 flex items-center gap-2">
                        <span className="w-8 h-px bg-slate-500/50" />
                        Systems & Embedded (Foundational)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {secondaryProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center border-t border-white/10 pt-10 mt-6">
                        <p className="text-slate-400 text-base mb-6 text-center max-w-2xl">
                            Interested to see more? Explore my complete portfolio of projects separated by category.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <a
                                href="#/software-projects"
                                className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                            >
                                <span>Software Projects</span>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#/hardware-projects"
                                className="group flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all border border-slate-700 hover:border-slate-600 shadow-lg"
                            >
                                <span>Hardware & Embedded</span>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
