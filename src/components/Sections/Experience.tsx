import { MapPin, Briefcase } from 'lucide-react';
import { SectionTitle } from '../UI/SectionTitle';
import { Card } from '../UI/Card';
import { experiences } from '../../data/portfolio';

export function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    title="Experience"
                    subtitle="Internships and hands-on industry experience."
                />

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <Card
                            key={exp.id}
                            className="p-6"
                            animateFrom={index % 2 === 0 ? 'left' : 'right'}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                {/* Left side - Role info */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-amber-500/10">
                                            <Briefcase size={18} className="text-amber-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                                            <p className="text-amber-500 text-sm">{exp.company}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <span
                                                key={hIndex}
                                                className="text-xs px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right side - Duration and Location */}
                                <div className="flex flex-col gap-2 text-sm">
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <Briefcase size={14} />
                                        <span className="font-medium">{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-slate-500">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
