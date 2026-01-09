import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const WelcomeCard = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="glass-card relative overflow-hidden h-full min-h-[220px] transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 1) 100%)",
      }}
    >
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mb-16" />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">Systems Active</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">FreightFlow <span className="text-primary">Intelligence</span></h2>
          <p className="text-sm leading-relaxed text-slate-500 max-w-[85%] font-medium">
            Monitor real-time network health and automate complex logistics documentation with military-grade precision and AI-driven insights.
          </p>
        </div>

        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-xs font-bold text-primary group transition-all"
        >
          <span className="bg-primary/10 px-4 py-2.5 rounded-lg group-hover:bg-primary group-hover:text-white transition-all flex items-center gap-2">
            EXPLORE ANALYTICS
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};
