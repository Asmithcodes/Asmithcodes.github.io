import { motion } from 'framer-motion';
import { SectionTitle } from '../UI/SectionTitle';
import { SkillBadge } from '../UI/SkillBadge';
import { skills } from '../../data/portfolio';

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-900/30">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    title="Skills"
                    subtitle="Technologies and concepts I work with regularly."
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Primary Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg font-medium text-amber-500 mb-6">Primary Focus</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.primary.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <SkillBadge skill={skill} variant="primary" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Secondary Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg font-medium text-slate-400 mb-6">Foundation & Hardware</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.secondary.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <SkillBadge skill={skill} variant="secondary" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
