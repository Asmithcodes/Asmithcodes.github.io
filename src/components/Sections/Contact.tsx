import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { SectionTitle } from '../UI/SectionTitle';
import { Button } from '../UI/Button';
import { personalInfo } from '../../data/portfolio';

export function Contact() {
    const contactLinks = [
        {
            icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Asmith Pampana',
            href: personalInfo.linkedin,
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'Asmithcodes',
            href: personalInfo.github,
        },
    ];

    return (
        <section id="contact" className="py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Open to software, web, and systems-oriented roles, internships, and collaborative projects."
                    align="center"
                />

                {/* Contact links */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {contactLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className="
                group flex items-center gap-3 px-5 py-3
                bg-white/5 backdrop-blur-sm rounded-xl
                border border-white/10 hover:border-amber-500/30
                transition-all duration-300
                hover:bg-white/10
              "
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <link.icon
                                size={20}
                                className="text-amber-500 group-hover:scale-110 transition-transform"
                            />
                            <div className="text-left">
                                <p className="text-xs text-slate-500">{link.label}</p>
                                <p className="text-white text-sm">{link.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Button
                        variant="primary"
                        icon={Send}
                        href={`mailto:${personalInfo.email}?subject=Let's Connect&body=Hi Asmith,%0D%0A%0D%0A`}
                    >
                        Send a Message
                    </Button>
                </motion.div>

                {/* Closing message */}
                <motion.p
                    className="text-slate-500 text-sm mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    Looking forward to connecting with you.
                </motion.p>
            </div>
        </section>
    );
}
