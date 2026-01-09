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
            { label: "Total Revenue MTD", value: "$470K", change: "+12%", icon: DollarSign, color: "bg-emerald-600" },
            { label: "Shipments MTD", value: "650", change: "+8%", icon: Truck, color: "bg-primary" },
            { label: "Avg Delivery Time", value: "2.1 Days", change: "-0.3d", icon: Clock, color: "bg-indigo-600" },
            { label: "Reports Generated", value: "24", icon: FileText, color: "bg-slate-900" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass-card p-4 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                    {stat.change && <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">{stat.change}</span>}
                  </div>
                </div>
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-white ${stat.color} shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-110`}>
                  <stat.icon className="h-5 w-5" />
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
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={0.1} />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="costsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#64748b" stopOpacity={0.05} />
                      <stop offset="100%" stopColor="#64748b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 10, fontWeight: 700 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 10, fontWeight: 700 }}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.98)",
                      border: "1px solid #e2e8f0",
                      borderRadius: "16px",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      padding: "12px",
                      backdropFilter: "blur(4px)"
                    }}
                    itemStyle={{ color: "#0f172a", fontSize: "12px", fontWeight: "900" }}
                    labelStyle={{ color: "#64748b", fontSize: "10px", fontWeight: "700", marginBottom: "4px", textTransform: "uppercase" }}
                    formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`]}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} fill="url(#revenueGradient)" />
                  <Area type="monotone" dataKey="costs" stroke="#64748b" strokeWidth={2} fill="url(#costsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gross Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-400 shadow-sm" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Operating Costs</span>
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
                    tick={{ fill: "#64748b", fontSize: 9, fontWeight: 700 }}
                    width={100}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.98)",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    }}
                    itemStyle={{ color: "#0f172a", fontSize: "11px", fontWeight: "900" }}
                    labelStyle={{ color: "#64748b", fontSize: "9px", fontWeight: "700", textTransform: "uppercase" }}
                    formatter={(value: number) => [`${value}%`, "On-Time Rate"]}
                  />
                  <Bar dataKey="onTime" radius={[0, 8, 8, 0]} barSize={20}>
                    {carrierPerformance.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.onTime >= 97 ? "#10b981" : entry.onTime >= 94 ? "#2563eb" : "#f59e0b"}
                        fillOpacity={0.9}
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
          <div className="grid grid-cols-5 gap-4 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] border-b border-slate-50 pb-4 mb-3 px-4">
            <span className="col-span-2">Report Name</span>
            <span>Category</span>
            <span>Generated</span>
            <span className="text-right">Action</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {recentReports.map((report, index) => (
              <motion.div
                key={report.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.55 + index * 0.05 }}
                className="grid grid-cols-5 gap-4 items-center py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 px-4 rounded-xl transition-colors group/row"
              >
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 text-slate-400 group-hover/row:bg-primary group-hover/row:text-white transition-all">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 tracking-tight">{report.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{report.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-md bg-slate-100 text-[10px] font-black text-slate-600 uppercase tracking-tight">{report.type}</span>
                </div>
                <span className="text-sm font-bold text-slate-500">{report.date}</span>
                <div className="flex justify-end">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-md">
                    <Download className="h-3.5 w-3.5" />
                    Export
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Reports;
