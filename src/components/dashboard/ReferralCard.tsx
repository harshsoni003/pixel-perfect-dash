import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";

interface ReferralCardProps {
  invited: number;
  bonus: number;
  safetyScore: number;
}

export const ReferralCard = ({ invited, bonus, safetyScore }: ReferralCardProps) => {
  const circumference = 2 * Math.PI * 35;
  const strokeDashoffset = circumference - (safetyScore / 10) * circumference;

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.35 }}
      className="glass-card p-5 h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">Referral Tracking</h3>
        <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-4">
        {/* Stats */}
        <div className="flex-1 space-y-4">
          <div className="glass-card p-3 rounded-xl">
            <p className="text-xs text-muted-foreground mb-0.5">Invited</p>
            <p className="text-lg font-bold text-foreground">{invited} people</p>
          </div>
          <div className="glass-card p-3 rounded-xl">
            <p className="text-xs text-muted-foreground mb-0.5">Bonus</p>
            <p className="text-lg font-bold text-foreground">{bonus.toLocaleString()}</p>
          </div>
        </div>

        {/* Safety Score */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <svg className="w-24 h-24 progress-ring" viewBox="0 0 80 80">
              {/* Background circle */}
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="hsl(228, 30%, 22%)"
                strokeWidth="6"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="40"
                cy="40"
                r="35"
                stroke="url(#referralGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{
                  strokeDasharray: circumference,
                }}
              />
              <defs>
                <linearGradient id="referralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0075FF" />
                  <stop offset="100%" stopColor="#00C6FB" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs text-muted-foreground">Safety</span>
              <span className="text-2xl font-bold text-foreground">{safetyScore}</span>
              <span className="text-xs text-muted-foreground">Total Score</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
