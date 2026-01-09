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
    statusColor: "text-accent",
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
    statusColor: "text-accent",
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
    statusColor: "text-destructive",
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
            { label: "Total Active", value: "142", icon: Ship, color: "#0075FF" },
            { label: "In Transit", value: "98", icon: Truck, color: "#00C6FB" },
            { label: "Delivered Today", value: "23", icon: CheckCircle, color: "#22C55E" },
            { label: "Delayed", value: "3", icon: AlertTriangle, color: "#EF4444" },
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
          <div className="grid grid-cols-7 gap-4 text-xs uppercase text-muted-foreground tracking-wider border-b border-border pb-3 mb-3">
            <span>Shipment ID</span>
            <span>Origin</span>
            <span>Destination</span>
            <span>Status</span>
            <span>Carrier</span>
            <span>ETA</span>
            <span>Actions</span>
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
                  className="grid grid-cols-7 gap-4 items-center py-3 border-b border-border/50 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <Ship className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{shipment.id}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-foreground truncate">{shipment.origin}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm text-foreground truncate">{shipment.destination}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusIcon className={`h-4 w-4 ${shipment.statusColor}`} />
                    <span className={`text-sm font-medium ${shipment.statusColor}`}>{shipment.status}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{shipment.carrier}</span>
                  <span className="text-sm text-foreground">{shipment.eta}</span>
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors w-fit">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
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
