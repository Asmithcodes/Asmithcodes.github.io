import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { SectionTitle } from '../UI/SectionTitle';
import { Card } from '../UI/Card';
import { education } from '../../data/portfolio';

export function Education() {
    return (
        <section id="education" className="py-24 bg-slate-900/30">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    title="Education"
                    subtitle="Academic background and qualifications."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 max-w-2xl" glow>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-amber-500/10">
                                <GraduationCap size={28} className="text-amber-500" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-white mb-1">
                                    {education.degree}
                                </h3>
                                <p className="text-amber-500 mb-2">{education.institution}</p>
                                <div className="flex items-center gap-4 text-sm text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {education.location}
                                    </span>
                                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                                        {education.status}
                                    </span>
                                </div>

                                {/* CGPA Display */}
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400 text-sm">Final CGPA</span>
                                        <span className="text-2xl font-bold text-white">
                                            {education.cgpa}
                                            <span className="text-slate-500 text-sm font-normal">/10</span>
                                        </span>
                                    </div>
                                    {/* Visual bar */}
                                    <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(parseFloat(education.cgpa) / 10) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
