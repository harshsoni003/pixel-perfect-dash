import { motion } from "framer-motion";
import { Ship, Search, Filter, MoreHorizontal, MapPin, Clock, CheckCircle, AlertTriangle, Truck } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

const shipments = [
  {
    id: "SHP-4521",
    origin: "Los Angeles, CA",
    destination: "Dallas, TX",
    status: "In Transit",
    statusColor: "text-blue-600",
    eta: "Oct 25, 2024",
    carrier: "Swift Transport",
    weight: "42,000 lbs",
    progress: 65,
  },
  {
    id: "SHP-4520",
    origin: "Vancouver, BC",
    destination: "Seattle, WA",
    status: "Customs Hold",
    statusColor: "text-amber-500",
    eta: "Oct 24, 2024",
    carrier: "Pacific Freight",
    weight: "28,500 lbs",
    progress: 45,
  },
  {
    id: "SHP-4519",
    origin: "Chicago, IL",
    destination: "New York, NY",
    status: "Delivered",
    statusColor: "text-success",
    eta: "Oct 23, 2024",
    carrier: "Eastern Logistics",
    weight: "35,200 lbs",
    progress: 100,
  },
  {
    id: "SHP-4518",
    origin: "Miami, FL",
    destination: "Atlanta, GA",
    status: "In Transit",
    statusColor: "text-blue-600",
    eta: "Oct 24, 2024",
    carrier: "Southern Carriers",
    weight: "18,750 lbs",
    progress: 78,
  },
  {
    id: "SHP-4517",
    origin: "Seattle, WA",
    destination: "Portland, OR",
    status: "Pending Pickup",
    statusColor: "text-muted-foreground",
    eta: "Oct 26, 2024",
    carrier: "Northwest Express",
    weight: "22,100 lbs",
    progress: 0,
  },
  {
    id: "SHP-4516",
    origin: "Houston, TX",
    destination: "Phoenix, AZ",
    status: "Delayed",
    statusColor: "text-rose-600",
    eta: "Oct 25, 2024",
    carrier: "Desert Haulers",
    weight: "31,400 lbs",
    progress: 35,
  },
];

const statusIcons: Record<string, React.ElementType> = {
  "In Transit": Truck,
  "Customs Hold": AlertTriangle,
  "Delivered": CheckCircle,
  "Pending Pickup": Clock,
  "Delayed": AlertTriangle,
};

const Shipments = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-72 p-6">
        <Header title="Shipments" breadcrumb={["FreightFlow AI", "Shipments"]} />

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-5 mb-6">
          {[
            { label: "Total Active", value: "142", icon: Ship, color: "bg-blue-600" },
            { label: "In Transit", value: "98", icon: Truck, color: "bg-primary" },
            { label: "Delivered Today", value: "23", icon: CheckCircle, color: "bg-emerald-600" },
            { label: "Delayed", value: "3", icon: AlertTriangle, color: "bg-rose-600" },
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
                  <p className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                </div>
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-white ${stat.color} shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-110`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 max-w-md">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by ID, origin, destination..."
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
            />
          </div>
          <button className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="h-4 w-4" />
            Filters
          </button>
        </motion.div>

        {/* Shipments Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-5"
        >
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] border-b border-slate-50 pb-4 mb-3 px-4">
            <span className="col-span-1">ID</span>
            <span>Origin</span>
            <span>Destination</span>
            <span>Status</span>
            <span>Carrier</span>
            <span>ETA</span>
            <span className="text-right">Actions</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {shipments.map((shipment, index) => {
              const StatusIcon = statusIcons[shipment.status] || Ship;
              return (
                <motion.div
                  key={shipment.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.45 + index * 0.05 }}
                  className="grid grid-cols-7 gap-4 items-center py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 px-4 rounded-xl transition-colors group/row"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover/row:bg-primary group-hover/row:text-white transition-all">
                      <Ship className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-black text-slate-900 tracking-tight">{shipment.id}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="h-3 w-3 opacity-50" />
                    <span className="text-[13px] font-bold truncate">{shipment.origin}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <MapPin className="h-3 w-3 opacity-50" />
                    <span className="text-[13px] font-bold truncate">{shipment.destination}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 ${shipment.statusColor}`}>
                      <StatusIcon className="h-3 w-3" />
                      <span className="text-[11px] font-black uppercase tracking-tight">{shipment.status}</span>
                    </div>
                  </div>
                  <span className="text-[13px] font-bold text-slate-500">{shipment.carrier}</span>
                  <span className="text-[13px] font-black text-slate-900">{shipment.eta}</span>
                  <div className="flex justify-end">
                    <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-white rounded-lg transition-all shadow-sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Shipments;
