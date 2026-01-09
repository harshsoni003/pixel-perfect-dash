import { Search, Bell, Settings, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-1.5">
          {breadcrumb.map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              {item}
              {index < breadcrumb.length - 1 && <span className="opacity-40">/</span>}
            </span>
          ))}
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="glass-card flex items-center gap-3 px-4 py-2 rounded-xl bg-white/50 border-slate-200/60 focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="System Search..."
            className="bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none w-48 font-medium"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-900 leading-none mb-1">Alex Harrington</p>
              <p className="text-[10px] font-medium text-slate-500">{userRole}</p>
            </div>
            <Link to="/profile" className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 border-2 border-white shadow-sm overflow-hidden hover:ring-2 hover:ring-primary/20 transition-all">
              <User className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Link to="/settings" className="p-2 text-slate-400 hover:text-primary transition-colors">
              <Settings className="h-4 w-4" />
            </Link>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
