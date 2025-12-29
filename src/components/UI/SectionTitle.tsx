import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, align = 'left' }: SectionTitleProps) {
    return (
        <motion.div
            className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {title}
            </h2>
            <div className={`relative ${align === 'center' ? 'h-5' : ''}`}>
                <motion.span
                    className={`block h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full origin-center ${align === 'center' ? 'absolute left-1/2 -translate-x-1/2' : 'mt-4'}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </div>
            {subtitle && (
                <p className={`text-slate-400 text-lg mt-4 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
