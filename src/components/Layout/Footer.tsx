import { Mail } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">
                        © {currentYear} Asmith Pampana. All rights reserved.
                    </p>

                    <p className="text-slate-400 text-sm flex items-center gap-2">
                        Developed by Asmith —
                        <a
                            href="mailto:asmyth@duck.com"
                            className="text-amber-500 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                        >
                            <Mail size={14} />
                            asmyth@duck.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
