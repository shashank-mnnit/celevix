"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Share2, Megaphone, Monitor, Target, Repeat } from "lucide-react";

const services = [
    {
        icon: <Search />,
        color: "blue",
        title: "SEO & Local Dominance",
        description: "Rank #1 on Google. We optimize your technical SEO, content, and local citations to drive organic traffic."
    },
    {
        icon: <Share2 />,
        color: "pink",
        title: "Social Media Management",
        description: "Build an engaged community. We handle content creation, scheduling, and community management across all platforms."
    },
    {
        icon: <Megaphone />,
        color: "orange",
        title: "Paid Ads Strategy",
        description: "High-ROI campaigns on Meta & Google. We design creatives and manage bids to lower your CPA."
    },
    {
        icon: <Monitor />,
        color: "indigo",
        title: "Web Dev & Branding",
        description: "Stunning, high-performance websites that convert. Full brand positioning to make you stand out."
    },
    {
        icon: <Target />,
        color: "red",
        title: "Analytics & Insights",
        description: "Data-driven decision making. Deep dive reports on user behavior and campaign performance."
    },
    {
        icon: <Repeat />,
        color: "green",
        title: "CRM & Automation",
        description: "Automate your sales funnel. Implementation of HubSpot/Salesforce and email marketing flows."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function Features() {
    return (
        <section className="py-24 bg-slate-50/50 border-t border-slate-100">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Comprehensive <span className="text-blue-600">Digital Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        From traffic to retention, we cover every aspect of your digital journey.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm transition-all duration-300 group cursor-default"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                ${service.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : ''}
                ${service.color === 'pink' ? 'bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white' : ''}
                ${service.color === 'orange' ? 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' : ''}
                ${service.color === 'indigo' ? 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' : ''}
                ${service.color === 'red' ? 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white' : ''}
                ${service.color === 'green' ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' : ''}
              `}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
