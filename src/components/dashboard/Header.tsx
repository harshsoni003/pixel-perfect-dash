import { Search, Bell, Settings, User } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  breadcrumb?: string[];
  title: string;
}

export const Header = ({ breadcrumb = ["Pages", "Dashboard"], title }: HeaderProps) => {
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
            placeholder="Type here..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-32"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
