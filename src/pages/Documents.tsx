import { motion } from "framer-motion";
import { FileText, Search, Filter, Upload, Eye, Download, CheckCircle, Clock, AlertTriangle, MoreHorizontal } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Progress } from "@/components/ui/progress";

const documents = [
  {
    id: "DOC-8821",
    name: "Bill of Lading - SHP-4521",
    type: "BOL",
    status: "Processed",
    statusColor: "text-success",
    confidence: 98,
    uploadedAt: "Oct 24, 2024 10:30 AM",
    fields: 24,
  },
  {
    id: "DOC-8820",
    name: "Commercial Invoice - SHP-4520",
    type: "Invoice",
    status: "Review Needed",
    statusColor: "text-amber-500",
    confidence: 85,
    uploadedAt: "Oct 24, 2024 09:15 AM",
    fields: 18,
  },
  {
    id: "DOC-8819",
    name: "Packing List - SHP-4519",
    type: "Packing List",
    status: "Processed",
    statusColor: "text-success",
    confidence: 99,
    uploadedAt: "Oct 23, 2024 04:45 PM",
    fields: 32,
  },
  {
    id: "DOC-8818",
    name: "Customs Declaration - SHP-4520",
    type: "Customs",
    status: "Processing",
    statusColor: "text-accent",
    confidence: 0,
    uploadedAt: "Oct 24, 2024 08:00 AM",
    fields: 0,
  },
  {
    id: "DOC-8817",
    name: "Bill of Lading - SHP-4518",
    type: "BOL",
    status: "Processed",
    statusColor: "text-success",
    confidence: 97,
    uploadedAt: "Oct 23, 2024 02:30 PM",
    fields: 24,
  },
  {
    id: "DOC-8816",
    name: "Proof of Delivery - SHP-4515",
    type: "POD",
    status: "Processed",
    statusColor: "text-success",
    confidence: 96,
    uploadedAt: "Oct 23, 2024 11:20 AM",
    fields: 12,
  },
];

const statusIcons: Record<string, React.ElementType> = {
  "Processed": CheckCircle,
  "Review Needed": AlertTriangle,
  "Processing": Clock,
};

const Documents = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-72 p-6">
        <Header title="Documents" breadcrumb={["FreightFlow AI", "Documents"]} />

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-5 mb-6">
          {[
            { label: "Total Processed", value: "1,450", icon: FileText, color: "#0075FF" },
            { label: "OCR Accuracy", value: "99.8%", icon: CheckCircle, color: "#22C55E" },
            { label: "Pending Review", value: "12", icon: AlertTriangle, color: "#F59E0B" },
            { label: "Processing", value: "3", icon: Clock, color: "#00C6FB" },
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

        {/* Search, Filters, and Upload */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between gap-4 mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 min-w-[300px]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documents..."
                className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
              />
            </div>
            <button className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-foreground" style={{ background: "linear-gradient(127.09deg, #0075FF 19.41%, #00C6FB 76.65%)" }}>
            <Upload className="h-4 w-4" />
            Upload Document
          </button>
        </motion.div>

        {/* Documents Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-5"
        >
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 text-xs uppercase text-muted-foreground tracking-wider border-b border-border pb-3 mb-3">
            <span className="col-span-2">Document</span>
            <span>Type</span>
            <span>Status</span>
            <span>Confidence</span>
            <span>Uploaded</span>
            <span>Actions</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {documents.map((doc, index) => {
              const StatusIcon = statusIcons[doc.status] || FileText;
              return (
                <motion.div
                  key={doc.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.45 + index * 0.05 }}
                  className="grid grid-cols-7 gap-4 items-center py-3 border-b border-border/50 last:border-0"
                >
                  <div className="col-span-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0075FF20, #00C6FB20)" }}>
                      <FileText className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.id} • {doc.fields} fields</p>
                    </div>
                  </div>
                  <span className="text-sm text-foreground">{doc.type}</span>
                  <div className="flex items-center gap-2">
                    <StatusIcon className={`h-4 w-4 ${doc.statusColor}`} />
                    <span className={`text-sm font-medium ${doc.statusColor}`}>{doc.status}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {doc.confidence > 0 ? (
                      <>
                        <Progress value={doc.confidence} className="h-1.5 flex-1 bg-navy-700" />
                        <span className="text-sm text-foreground">{doc.confidence}%</span>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground">—</span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{doc.uploadedAt}</span>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
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

export default Documents;
