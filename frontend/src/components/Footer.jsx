import React from "react";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-6">Celevix</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Your partner in digital excellence. We help brands finding their voice and scaling their reach through data-driven strategies.
                        </p>
                        <div className="space-y-2 text-sm text-slate-400">
                            <p>hello@celevix.com</p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-white">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition">SEO & Content</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Paid Advertising</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Social Media</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Web Development</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-white">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Case Studies</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-white">Follow Us</h4>
                        <div className="flex space-x-4">
                            <div className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer">
                                <Linkedin size={20} />
                            </div>
                            <div className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer">
                                <Twitter size={20} />
                            </div>
                            <div className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer">
                                <Instagram size={20} />
                            </div>
                            <div className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer">
                                <Facebook size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2025 Celevix Agency. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
