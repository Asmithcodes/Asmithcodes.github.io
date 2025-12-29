import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ElementType } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    icon?: ElementType;
    iconPosition?: 'left' | 'right';
    href?: string;
    external?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    icon: Icon,
    iconPosition = 'left',
    href,
    external,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2 px-6 py-3 
    font-medium rounded-lg transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-amber-500/50
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-amber-500 to-amber-600 
      text-slate-900 
      hover:from-amber-400 hover:to-amber-500
      shadow-lg shadow-amber-500/25
      hover:shadow-amber-500/40
    `,
        secondary: `
      bg-white/5 border border-white/20 
      text-white 
      hover:bg-white/10 hover:border-white/30
      backdrop-blur-sm
    `
    };

    const content = (
        <>
            {Icon && iconPosition === 'left' && <Icon size={18} />}
            {children}
            {Icon && iconPosition === 'right' && <Icon size={18} />}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {content}
        </motion.button>
    );
}
