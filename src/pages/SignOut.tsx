import { motion } from "framer-motion";
import { LogOut, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SignOut = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-md w-full glass-card p-10 text-center shadow-2xl"
            >
                <div className="h-16 w-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-slate-200">
                    <LogOut className="h-8 w-8" />
                </div>

                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2 uppercase tracking-tighter">Session Terminated</h2>
                <p className="text-sm font-medium text-slate-500 mb-8 leading-relaxed">
                    You have been securely signed out of your FreightFlow AI session. All local cached data has been cleared.
                </p>

                <div className="space-y-3">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg"
                    >
                        Sign Back In
                    </Link>

                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Home Dashboard
                    </Link>
                </div>

                <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    FreightFlow AI • Tier 1 Security
                </p>
            </motion.div>
        </div>
    );
};

export default SignOut;
