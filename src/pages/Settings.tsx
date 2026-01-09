import { motion } from "framer-motion";
import { Settings as SettingsIcon, Bell, Shield, Globe, Monitor, Database, Lock } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

const Settings = () => {
    return (
        <div className="min-h-screen">
            <Sidebar />
            <main className="ml-72 p-6">
                <Header title="System Settings" breadcrumb={["FreightFlow AI", "Settings"]} />

                <div className="max-w-4xl mx-auto grid grid-cols-12 gap-6">
                    <div className="col-span-8 space-y-5">
                        {[
                            {
                                icon: Bell,
                                title: "Notifications",
                                desc: "Manage shipment alerts and system health reports",
                                status: "Configured"
                            },
                            {
                                icon: Shield,
                                title: "Privacy & Security",
                                desc: "Data encryption and access log management",
                                status: "Encrypted"
                            },
                            {
                                icon: Database,
                                title: "Logistics API",
                                desc: "Configure provider webhooks and data sync",
                                status: "Live"
                            },
                            {
                                icon: Globe,
                                title: "Regional Settings",
                                desc: "Timezone, currency and measurement units",
                                status: "UTC-6"
                            }
                        ].map((setting, index) => (
                            <motion.div
                                key={setting.title}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-5 group cursor-pointer hover:border-primary/20"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            <setting.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{setting.title}</h4>
                                            <p className="text-xs font-medium text-slate-500">{setting.desc}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{setting.status}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="col-span-4 space-y-6">
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="glass-card p-5 bg-slate-900 border-none shadow-2xl"
                        >
                            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4">
                                <Lock className="h-5 w-5" />
                            </div>
                            <h4 className="text-white text-sm font-black uppercase mb-2">Admin Panel</h4>
                            <p className="text-slate-400 text-xs mb-6 opacity-80 leading-relaxed">
                                You have elevated permissions. Some settings require secondary authentication.
                            </p>
                            <button className="w-full py-2.5 rounded-xl bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all">
                                System Overwrite
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="p-5"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Monitor className="h-4 w-4 text-slate-400" />
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Device</span>
                            </div>
                            <p className="text-xs font-bold text-slate-600 mb-1">Chrome on Windows 11</p>
                            <p className="text-[10px] font-medium text-slate-400">Hub-CHI-0129 • 192.168.1.45</p>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Settings;
