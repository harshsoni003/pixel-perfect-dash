import { motion } from "framer-motion";
import { MapPin, TrendingUp, TrendingDown, Clock, DollarSign, Truck, BarChart3 } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";

const laneData = [
  {
    lane: "LAX → DFW",
    origin: "Los Angeles, CA",
    destination: "Dallas, TX",
    volume: 245,
    avgTransit: 3.2,
    onTime: 98,
    revenue: 125000,
    profitMargin: 22,
    trend: "up",
  },
  {
    lane: "YVR → SEA",
    origin: "Vancouver, BC",
    destination: "Seattle, WA",
    volume: 156,
    avgTransit: 1.1,
    onTime: 85,
    revenue: 45000,
    profitMargin: 8,
    trend: "down",
    issue: "Border Delays",
  },
  {
    lane: "CHI → NYC",
    origin: "Chicago, IL",
    destination: "New York, NY",
    volume: 312,
    avgTransit: 2.8,
    onTime: 96,
    revenue: 180000,
    profitMargin: 19,
    trend: "up",
  },
  {
    lane: "MIA → ATL",
    origin: "Miami, FL",
    destination: "Atlanta, GA",
    volume: 198,
    avgTransit: 1.5,
    onTime: 94,
    revenue: 92000,
    profitMargin: 15,
    trend: "stable",
  },
  {
    lane: "SEA → PDX",
    origin: "Seattle, WA",
    destination: "Portland, OR",
    volume: 87,
    avgTransit: 0.8,
    onTime: 99,
    revenue: 28000,
    profitMargin: 24,
    trend: "up",
  },
];

const volumeChartData = [
  { lane: "LAX-DFW", volume: 245 },
  { lane: "CHI-NYC", volume: 312 },
  { lane: "MIA-ATL", volume: 198 },
  { lane: "YVR-SEA", volume: 156 },
  { lane: "SEA-PDX", volume: 87 },
];

const LaneAnalytics = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-72 p-6">
        <Header title="Lane Analytics" breadcrumb={["FreightFlow AI", "Lane Analytics"]} />

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-5 mb-6">
          {[
            { label: "Active Lanes", value: "28", icon: MapPin, color: "#0075FF" },
            { label: "Avg Transit Time", value: "2.1 Days", icon: Clock, color: "#00C6FB" },
            { label: "Total Revenue MTD", value: "$470K", icon: DollarSign, color: "#22C55E" },
            { label: "Avg Margin", value: "17.6%", icon: TrendingUp, color: "#6C63FF" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass-card p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="stat-icon" style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)` }}>
                  <stat.icon className="h-5 w-5 text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-5 mb-6">
          {/* Volume Chart */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="col-span-5 glass-card p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-4 w-4 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">Volume by Lane</h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volumeChartData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="lane"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(220, 20%, 65%)", fontSize: 12 }}
                    width={70}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 6%)",
                      border: "1px solid hsl(228, 30%, 22%)",
                      borderRadius: "12px",
                      color: "white",
                    }}
                  />
                  <Bar dataKey="volume" radius={[0, 4, 4, 0]}>
                    {volumeChartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#0075FF" : index === 1 ? "#00C6FB" : "#6C63FF"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Top Performing Lanes */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="col-span-7 glass-card p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 text-success" />
              <h3 className="text-lg font-semibold text-foreground">Top Performing Lanes</h3>
            </div>
            <div className="space-y-4">
              {laneData.slice(0, 3).map((lane, index) => (
                <motion.div
                  key={lane.lane}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{ background: "linear-gradient(135deg, hsl(228 47% 12% / 0.5), hsl(228 47% 18% / 0.3))" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0075FF, #00C6FB)" }}>
                      <Truck className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{lane.lane}</p>
                      <p className="text-xs text-muted-foreground">{lane.volume} shipments • {lane.avgTransit} days avg</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm font-bold text-foreground">${(lane.revenue / 1000).toFixed(0)}K</p>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-success">{lane.profitMargin}%</p>
                      <p className="text-xs text-muted-foreground">Margin</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Full Lane Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-5"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">All Lanes Performance</h3>
          
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 text-xs uppercase text-muted-foreground tracking-wider border-b border-border pb-3 mb-3">
            <span>Lane</span>
            <span>Volume</span>
            <span>Avg Transit</span>
            <span>On-Time %</span>
            <span>Revenue</span>
            <span>Margin</span>
            <span>Trend</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {laneData.map((lane, index) => (
              <motion.div
                key={lane.lane}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.55 + index * 0.05 }}
                className="grid grid-cols-7 gap-4 items-center py-3 border-b border-border/50 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{lane.lane}</p>
                  <p className="text-xs text-muted-foreground">{lane.origin} → {lane.destination}</p>
                </div>
                <span className="text-sm text-foreground">{lane.volume}</span>
                <span className="text-sm text-foreground">{lane.avgTransit} Days</span>
                <span className={`text-sm font-medium ${lane.onTime >= 95 ? "text-success" : lane.onTime >= 90 ? "text-amber-500" : "text-destructive"}`}>
                  {lane.onTime}%
                </span>
                <span className="text-sm text-foreground">${(lane.revenue / 1000).toFixed(0)}K</span>
                <span className={`text-sm font-medium ${lane.profitMargin >= 15 ? "text-success" : lane.profitMargin >= 10 ? "text-amber-500" : "text-destructive"}`}>
                  {lane.profitMargin}%
                </span>
                <div className="flex items-center gap-2">
                  {lane.trend === "up" && <TrendingUp className="h-4 w-4 text-success" />}
                  {lane.trend === "down" && <TrendingDown className="h-4 w-4 text-destructive" />}
                  {lane.trend === "stable" && <span className="text-muted-foreground">—</span>}
                  {lane.issue && <span className="text-xs text-destructive">{lane.issue}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LaneAnalytics;
