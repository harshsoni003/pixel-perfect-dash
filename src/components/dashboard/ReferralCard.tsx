import { motion } from "framer-motion";
import { MoreHorizontal, FileCheck } from "lucide-react";

interface AIDocumentEngineCardProps {
  documentsProcessed: number;
  ocrAccuracy: string;
  avgConfidence: number;
}

export const AIDocumentEngineCard = ({ documentsProcessed, ocrAccuracy, avgConfidence }: AIDocumentEngineCardProps) => {
  const circumference = 2 * Math.PI * 35;
  const strokeDashoffset = circumference - (avgConfidence) * circumference;

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.35 }}
      className="glass-card p-5 h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-accent" />
          <h3 className="text-sm font-semibold text-foreground">AI Document Engine</h3>
        </div>
        <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-4">
        {/* Stats */}
        <div className="flex-1 space-y-4">
          <div className="glass-card p-3 rounded-xl">
            <p className="text-xs text-muted-foreground mb-0.5">Docs Processed</p>
            <p className="text-lg font-bold text-foreground">{documentsProcessed.toLocaleString()}</p>
          </div>
          <div className="glass-card p-3 rounded-xl">
            <p className="text-xs text-muted-foreground mb-0.5">OCR Accuracy</p>
            <p className="text-lg font-bold text-success">{ocrAccuracy}</p>
          </div>
        </div>

        {/* Confidence Score */}
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
                stroke="url(#confidenceGradient)"
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
                <linearGradient id="confidenceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0075FF" />
                  <stop offset="100%" stopColor="#00C6FB" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs text-muted-foreground">Confidence</span>
              <span className="text-xl font-bold text-foreground">{(avgConfidence * 100).toFixed(0)}%</span>
              <span className="text-xs text-muted-foreground">Avg Score</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
