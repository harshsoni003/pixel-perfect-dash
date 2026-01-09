import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import freightHero from "@/assets/freight-hero.png";

export const WelcomeCard = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="glass-card relative overflow-hidden h-full min-h-[200px]"
      style={{
        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
      }}
    >
      {/* Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 overflow-hidden">
        <motion.img
          src={freightHero}
          alt="Freight Analytics"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto object-cover opacity-70"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Analytics Overview</p>
          <h2 className="text-2xl font-bold text-foreground mb-4">FreightFlow AI</h2>
          <p className="text-sm text-muted-foreground max-w-[60%]">
            Real-time shipment tracking
            <br />
            & predictive analytics.
          </p>
        </div>
        
        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors w-fit"
        >
          <TrendingUp className="h-4 w-4 text-success" />
          View full analytics
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};
