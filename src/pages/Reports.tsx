import { motion } from "framer-motion";
import { FileText, Download, Calendar, TrendingUp, DollarSign, Truck, Clock, Filter } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, BarChart, Cell } from "recharts";

const monthlyData = [
  { month: "May", revenue: 380000, shipments: 520, costs: 310000 },
  { month: "Jun", revenue: 420000, shipments: 580, costs: 340000 },
  { month: "Jul", revenue: 450000, shipments: 620, costs: 360000 },
  { month: "Aug", revenue: 480000, shipments: 680, costs: 380000 },
  { month: "Sep", revenue: 520000, shipments: 720, costs: 410000 },
  { month: "Oct", revenue: 470000, shipments: 650, costs: 375000 },
];

const carrierPerformance = [
  { carrier: "Swift Transport", shipments: 245, onTime: 98 },
  { carrier: "Pacific Freight", shipments: 189, onTime: 94 },
  { carrier: "Eastern Logistics", shipments: 156, onTime: 97 },
  { carrier: "Southern Carriers", shipments: 134, onTime: 92 },
  { carrier: "Northwest Express", shipments: 98, onTime: 99 },
];

const recentReports = [
  { name: "Monthly Performance Summary", date: "Oct 24, 2024", type: "Performance", size: "2.4 MB" },
  { name: "Q3 Financial Report", date: "Oct 15, 2024", type: "Financial", size: "5.1 MB" },
  { name: "Carrier Analysis Report", date: "Oct 10, 2024", type: "Analytics", size: "1.8 MB" },
  { name: "Lane Profitability Report", date: "Oct 5, 2024", type: "Financial", size: "3.2 MB" },
  { name: "Document Processing Audit", date: "Oct 1, 2024", type: "Compliance", size: "4.6 MB" },
];

const Reports = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-72 p-6">
        <Header title="Reports" breadcrumb={["FreightFlow AI", "Reports"]} />

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-5 mb-6">
          {[
            { label: "Total Revenue MTD", value: "$470K", change: "+12%", icon: DollarSign, color: "#22C55E" },
            { label: "Shipments MTD", value: "650", change: "+8%", icon: Truck, color: "#0075FF" },
            { label: "Avg Delivery Time", value: "2.1 Days", change: "-0.3d", icon: Clock, color: "#00C6FB" },
            { label: "Reports Generated", value: "24", icon: FileText, color: "#6C63FF" },
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
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    {stat.change && <span className="text-xs text-success">{stat.change}</span>}
                  </div>
                </div>
                <div className="stat-icon" style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)` }}>
                  <stat.icon className="h-5 w-5 text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-5 mb-6">
          {/* Revenue Chart */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="col-span-8 glass-card p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Revenue & Costs Trend</h3>
                <div className="flex items-center gap-2 mt-1">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">+23% vs last quarter</span>
                </div>
              </div>
              <button className="glass-card flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Calendar className="h-4 w-4" />
                Last 6 months
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="costsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0075FF" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#0075FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(220, 20%, 65%)", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(220, 20%, 65%)", fontSize: 12 }}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 6%)",
                      border: "1px solid hsl(228, 30%, 22%)",
                      borderRadius: "12px",
                      color: "white",
                    }}
                    formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`]}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#22C55E" strokeWidth={2} fill="url(#revenueGradient)" />
                  <Area type="monotone" dataKey="costs" stroke="#0075FF" strokeWidth={2} fill="url(#costsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Costs</span>
              </div>
            </div>
          </motion.div>

          {/* Carrier Performance */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="col-span-4 glass-card p-5"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Carrier Performance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={carrierPerformance} layout="vertical">
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis
                    type="category"
                    dataKey="carrier"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(220, 20%, 65%)", fontSize: 10 }}
                    width={100}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 6%)",
                      border: "1px solid hsl(228, 30%, 22%)",
                      borderRadius: "12px",
                      color: "white",
                    }}
                    formatter={(value: number) => [`${value}%`, "On-Time Rate"]}
                  />
                  <Bar dataKey="onTime" radius={[0, 4, 4, 0]}>
                    {carrierPerformance.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.onTime >= 97 ? "#22C55E" : entry.onTime >= 94 ? "#0075FF" : "#F59E0B"} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Recent Reports */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Recent Reports</h3>
            <button className="glass-card flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 text-xs uppercase text-muted-foreground tracking-wider border-b border-border pb-3 mb-3">
            <span className="col-span-2">Report Name</span>
            <span>Type</span>
            <span>Date</span>
            <span>Actions</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {recentReports.map((report, index) => (
              <motion.div
                key={report.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.55 + index * 0.05 }}
                className="grid grid-cols-5 gap-4 items-center py-3 border-b border-border/50 last:border-0"
              >
                <div className="col-span-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0075FF20, #00C6FB20)" }}>
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{report.name}</p>
                    <p className="text-xs text-muted-foreground">{report.size}</p>
                  </div>
                </div>
                <span className="text-sm text-foreground">{report.type}</span>
                <span className="text-sm text-muted-foreground">{report.date}</span>
                <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-accent hover:text-foreground transition-colors w-fit">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Reports;
