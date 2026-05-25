import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { SectionTitle } from '../UI/SectionTitle';
import { Card } from '../UI/Card';
import { aboutContent, personalInfo } from '../../data/portfolio';

export function About() {
    return (
        <section id="about" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle
                    title="About Me"
                    subtitle="A brief introduction to who I am and what I do."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Profile Photo & Main content */}
                    <div className="md:col-span-2">
                        <Card className="p-8" animateFrom="left">
                            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                                {/* Profile Photo */}
                                <motion.div
                                    className="flex-shrink-0"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)] bg-slate-800/50 mx-auto sm:mx-0">
                                        {personalInfo.photoUrl && personalInfo.photoUrl !== '/placeholder-photo.jpg' ? (
                                            <img
                                                src={personalInfo.photoUrl}
                                                alt={personalInfo.name}
                                                className="w-full h-full object-cover"
                                                style={{ objectPosition: '45% 20%' }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <User size={48} className="text-slate-600" />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Name & Role */}
                                <div className="flex flex-col justify-center text-center sm:text-left">
                                    <motion.h3
                                        className="text-2xl font-bold text-white mb-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                    >
                                        {personalInfo.name}
                                    </motion.h3>
                                    <motion.p
                                        className="text-amber-500 text-sm"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {personalInfo.role.split('|')[0].trim()}
                                    </motion.p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {aboutContent.paragraphs.map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        className="text-slate-300 leading-relaxed"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Highlights sidebar */}
                    <div>
                        <Card className="p-6" glow featured={true} animateFrom="right">
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
                            <ul className="space-y-3">
                                {aboutContent.highlights.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3 text-slate-300"
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <span className="text-amber-500 mt-1">•</span>
                                        {highlight}
                                    </motion.li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
