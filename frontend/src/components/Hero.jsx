"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />

            <div className="container relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 text-sm font-medium text-blue-700 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                        Accepting New Clients for Q1 2025
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-5xl text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
                >
                    Transform Your Brand with <br />
                    <span className="gradient-text">Data-Driven Growth</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
                >
                    We are Celevix. A full-service digital agency specializing in SEO, Paid Media, Web Development, and Automation. We turn traffic into revenue.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="h-14 px-8 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 flex items-center gap-2 text-lg">
                        Scale Your Business <ArrowRight size={20} />
                    </button>

                    <button className="h-14 px-8 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 hover:border-slate-300 transition shadow-sm flex items-center gap-2 text-lg">
                        View Our Work
                    </button>
                </motion.div>

                {/* Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring" }}
                    className="mt-20 w-full max-w-5xl perspective-1000"
                >
                    <div className="relative aspect-[21/9] bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden group flex items-center justify-center">
                        {/* Simple Analytics Visual */}
                        <div className="text-center">
                            <BarChart3 className="w-24 h-24 text-blue-500 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Performance Analytics Dashboard</h3>
                            <p className="text-slate-500">Real-time insights for SEO, Ads, and Conversion Rates</p>
                        </div>

                        {/* Background decorative chart lines */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-blue-600 fill-current">
                                <path d="M0,20 L0,10 C10,15 20,5 30,12 C40,18 50,8 60,15 C70,20 80,10 90,14 L100,20 Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-3xl -z-10" />
                </motion.div>

            </div>
        </section>
    );
}
