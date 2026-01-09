import { Search, Bell, Settings, User } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  breadcrumb?: string[];
  title: string;
  userRole?: string;
}

export const Header = ({ breadcrumb = ["Analytics", "Dashboard"], title, userRole = "COO / Head of Operations" }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between mb-6"
    >
      <div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
          {breadcrumb.map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              {item}
              {index < breadcrumb.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>
        <h1 className="text-sm font-bold text-foreground">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-xl">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search shipments..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-40"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span className="text-xs">{userRole}</span>
          </div>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
