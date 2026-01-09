import { motion } from "framer-motion";

interface DeliveryForecastCardProps {
  onTime: number;
  early: number;
  delayed: number;
}

export const DeliveryForecastCard = ({ onTime, early, delayed }: DeliveryForecastCardProps) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (onTime / 100) * circumference;

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5 h-full flex flex-col"
    >
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-foreground">Delivery Forecast</h3>
        <p className="text-xs text-muted-foreground">Predicted arrival status</p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <svg className="w-28 h-28 progress-ring" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="hsla(0, 0%, 0%, 0.05)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#deliveryGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                strokeDasharray: circumference,
              }}
            />
            <defs>
              <linearGradient id="deliveryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0075FF" />
                <stop offset="100%" stopColor="#00C6FB" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
              style={{ background: "linear-gradient(127.09deg, #0075FF 19.41%, #00C6FB 76.65%)" }}
            >
              <span className="text-lg">📦</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="text-center">
          <span className="text-lg font-bold text-success">{early}%</span>
          <p className="text-xs text-muted-foreground">Early</p>
        </div>
        <div className="text-center">
          <span className="text-lg font-bold text-foreground">{onTime}%</span>
          <p className="text-xs text-muted-foreground">On Time</p>
        </div>
        <div className="text-center">
          <span className="text-lg font-bold text-destructive">{delayed}%</span>
          <p className="text-xs text-muted-foreground">Delayed</p>
        </div>
      </div>
    </motion.div>
  );
};
