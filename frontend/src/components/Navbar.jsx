"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { AlignJustify, MoveRight } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container flex items-center justify-between">

                {/* Brand */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative w-40 h-10">
                        <Image
                            src="/celevix.png"
                            alt="Celevix Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </div>

                {/* Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {['Services', 'Case Studies', 'About', 'Blog'].map((item) => (
                        <button key={item} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">
                            {item}
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:block text-sm font-semibold text-slate-700 hover:text-slate-900 px-3">
                        Client Login
                    </button>
                    <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm duration-200 flex items-center gap-1 group">
                        Get Free Audit <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="lg:hidden p-2 text-slate-900">
                        <AlignJustify />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
