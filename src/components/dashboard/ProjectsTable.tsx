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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">Network Performance</h3>
          <p className="text-sm font-medium text-slate-500">Live analytics for primary distribution lanes</p>
        </div>
        <button className="p-2 text-slate-400 hover:text-primary transition-colors bg-slate-50 rounded-lg">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 text-[10px] font-bold uppercase text-slate-400 tracking-[0.15em] border-b border-slate-100 pb-4 mb-4">
        <span>Route Lane</span>
        <span>Volume Intensity</span>
        <span>Transit Speed</span>
        <span>EBITDA Margin</span>
      </div>

      {/* Table Rows */}
      <div className="space-y-1">
        {laneData.map((lane, index) => (
          <motion.div
            key={lane.lane}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.55 + index * 0.05 }}
            className="grid grid-cols-4 gap-4 items-center p-3 hover:bg-slate-50 transition-colors rounded-xl group"
          >
            <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">{lane.lane}</span>
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${lane.volumeColor.replace('text-', 'bg-')}`} />
              <span className={`text-sm font-bold ${lane.volumeColor}`}>{lane.volume}</span>
            </div>
            <span className="text-sm font-semibold text-slate-600">{lane.avgTransit}</span>
            <div className="flex items-center gap-2">
              <div className={`p-1 rounded-md ${lane.profitColor.replace('text-', 'bg-').replace('success', 'success/10').replace('destructive', 'destructive/10').replace('amber-500', 'amber-500/10')}`}>
                <lane.profitIcon className={`h-3.5 w-3.5 ${lane.profitColor}`} />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-bold ${lane.profitColor}`}>{lane.profitability}</span>
                {lane.note && <span className="text-[10px] font-bold text-slate-400 uppercase">{lane.note}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
