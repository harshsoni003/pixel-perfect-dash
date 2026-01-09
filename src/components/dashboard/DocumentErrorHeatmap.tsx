import { motion } from "framer-motion";
import { FileText, AlertTriangle, CheckCircle } from "lucide-react";

const errorData = [
  { document: "Bill of Lading", status: "Low", color: "#22C55E", icon: CheckCircle },
  { document: "Commercial Invoice", status: "Medium", color: "#F59E0B", icon: AlertTriangle },
  { document: "Packing List", status: "Low", color: "#22C55E", icon: CheckCircle },
];

export const DocumentErrorHeatmap = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-4 w-4 text-accent" />
        <h3 className="text-sm font-semibold text-foreground">Document Error Heatmap</h3>
      </div>

      <div className="space-y-3">
        {errorData.map((item, index) => (
          <motion.div
            key={item.document}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.65 + index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-xl"
            style={{ background: `${item.color}10` }}
          >
            <span className="text-sm text-foreground">{item.document}</span>
            <div className="flex items-center gap-2">
              <item.icon className="h-4 w-4" style={{ color: item.color }} />
              <span className="text-sm font-medium" style={{ color: item.color }}>
                {item.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
