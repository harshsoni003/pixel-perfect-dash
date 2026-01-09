import { motion } from "framer-motion";
import { User, Mail, Phone, Shield, MapPin, Camera } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

const Profile = () => {
    return (
        <div className="min-h-screen">
            <Sidebar />
            <main className="ml-72 p-6">
                <Header title="User Profile" breadcrumb={["FreightFlow AI", "Profile"]} />

                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Cover & Avatar Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="glass-card overflow-hidden"
                    >
                        <div className="h-32 bg-gradient-to-r from-primary to-indigo-600 opacity-90" />
                        <div className="px-8 pb-8 -mt-12 relative flex items-end gap-6">
                            <div className="relative group">
                                <div className="h-24 w-24 rounded-2xl bg-white p-1 shadow-xl border border-slate-100 overflow-hidden">
                                    <div className="h-full w-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                                        <User className="h-12 w-12" />
                                    </div>
                                </div>
                                <button className="absolute -bottom-2 -right-2 p-2 rounded-lg bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-primary transition-colors">
                                    <Camera className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex-1 pb-1">
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Alex Harrington</h2>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">COO / Head of Operations</p>
                            </div>
                            <button className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg">
                                Edit Profile
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-12 gap-6">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="col-span-7 glass-card p-6"
                        >
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Account Details</h3>
                            <div className="space-y-6">
                                {[
                                    { icon: Mail, label: "Email Address", value: "alex.harrington@freightflow.ai" },
                                    { icon: Phone, label: "Phone Number", value: "+1 (555) 234-8901" },
                                    { icon: MapPin, label: "Office Location", value: "Chicago Operations Hub (North)" },
                                    { icon: Shield, label: "Access Level", value: "Full Administrative (Superuser)" },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                                            <p className="text-sm font-bold text-slate-900">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Security Overview */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="col-span-5 glass-card p-6"
                        >
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Security</h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">2FA Status</p>
                                    <p className="text-xs font-bold text-emerald-700">Multi-factor authentication active</p>
                                </div>
                                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                                    <p className="text-[10px] font-black text-amber-600 uppercase mb-1">Last Password Change</p>
                                    <p className="text-xs font-bold text-amber-700">Changed 42 days ago</p>
                                </div>
                                <button className="w-full mt-2 py-3 rounded-xl border-2 border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">
                                    Update Password
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
