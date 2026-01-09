import { motion } from "framer-motion";
import { MoreHorizontal, TrendingUp, TrendingDown, Minus } from "lucide-react";

const laneData = [
  {
    lane: "LAX → DFW",
    volume: "High",
    volumeColor: "text-success",
    avgTransit: "3.2 Days",
    profitability: "High",
    profitIcon: TrendingUp,
    profitColor: "text-success",
  },
  {
    lane: "YVR → SEA",
    volume: "Medium",
    volumeColor: "text-amber-500",
    avgTransit: "1.1 Days",
    profitability: "Low",
    profitIcon: TrendingDown,
    profitColor: "text-destructive",
    note: "Border Delays",
  },
  {
    lane: "CHI → NYC",
    volume: "High",
    volumeColor: "text-success",
    avgTransit: "2.8 Days",
    profitability: "High",
    profitIcon: TrendingUp,
    profitColor: "text-success",
  },
  {
    lane: "MIA → ATL",
    volume: "Medium",
    volumeColor: "text-amber-500",
    avgTransit: "1.5 Days",
    profitability: "Medium",
    profitIcon: Minus,
    profitColor: "text-amber-500",
  },
  {
    lane: "SEA → PDX",
    volume: "Low",
    volumeColor: "text-muted-foreground",
    avgTransit: "0.8 Days",
    profitability: "High",
    profitIcon: TrendingUp,
    profitColor: "text-success",
  },
];

export const LanePerformanceTable = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Lane Performance</h3>
          <p className="text-sm text-muted-foreground">Top shipping routes analysis</p>
        </div>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 text-xs uppercase text-muted-foreground tracking-wider border-b border-border pb-3 mb-3">
        <span>Lane</span>
        <span>Volume</span>
        <span>Avg Transit</span>
        <span>Profitability</span>
      </div>

      {/* Table Rows */}
      <div className="space-y-4">
        {laneData.map((lane, index) => (
          <motion.div
            key={lane.lane}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.55 + index * 0.05 }}
            className="grid grid-cols-4 gap-4 items-center"
          >
            <span className="text-sm font-medium text-foreground">{lane.lane}</span>
            <span className={`text-sm font-medium ${lane.volumeColor}`}>{lane.volume}</span>
            <span className="text-sm text-foreground">{lane.avgTransit}</span>
            <div className="flex items-center gap-2">
              <lane.profitIcon className={`h-4 w-4 ${lane.profitColor}`} />
              <div className="flex flex-col">
                <span className={`text-sm font-medium ${lane.profitColor}`}>{lane.profitability}</span>
                {lane.note && <span className="text-xs text-muted-foreground">{lane.note}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
