import { motion } from 'framer-motion';

interface SkillBadgeProps {
    skill: string;
    variant?: 'primary' | 'secondary';
}

export function SkillBadge({ skill, variant = 'primary' }: SkillBadgeProps) {
    const variants = {
        primary: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        secondary: 'bg-slate-700/50 text-slate-300 border-slate-600/50'
    };

    return (
        <motion.span
            className={`
        inline-block px-4 py-2 rounded-lg
        text-sm font-medium
        border backdrop-blur-sm
        ${variants[variant]}
      `}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
        >
            {skill}
        </motion.span>
    );
}
