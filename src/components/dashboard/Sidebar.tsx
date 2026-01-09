import { LayoutDashboard, Table, FileText, Ship, MapPin, Settings, User, LogIn, HelpCircle, Truck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import sidebarLogo from "@/assets/sidebar-logo.png";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Ship, label: "Shipments", path: "/shipments" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: MapPin, label: "Lane Analytics", path: "/lane-analytics" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
];

const accountPages = [
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: LogIn, label: "Sign Out", path: "/signout" },
];

export const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="glass-card fixed left-4 top-4 bottom-4 w-64 flex flex-col z-50 overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* Logo Container */}
        <div className="px-5 py-7">
          <div className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md border border-slate-100 overflow-hidden p-1.5 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
              <img
                src={sidebarLogo}
                alt="FreightFlow AI"
                className="h-full w-full object-contain mix-blend-multiply contrast-[1.1]"
              />
            </div>
            <span className="text-sm font-black tracking-tighter text-slate-900 transition-colors group-hover:text-primary">
              FREIGHTFLOW <span className="text-primary">AI</span>
            </span>
          </div>
        </div>

        {/* Main Navigation - Scrollable Area */}
        <nav className="flex-1 overflow-y-auto px-4 space-y-1 custom-scrollbar">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "sidebar-item-active" : "sidebar-item-inactive"
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-bold">{item.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 pb-3">
            <p className="px-4 text-[9px] font-black uppercase tracking-[0.25em] text-slate-400">
              Account Management
            </p>
          </div>

          <div className="space-y-1 pb-4">
            {accountPages.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "sidebar-item-active" : "sidebar-item-inactive"
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-bold">{item.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Compact Help Card - Integrated into Scroll area */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-1 mt-4 mb-8 rounded-xl p-3.5 bg-slate-50 border border-slate-100 relative overflow-hidden group/help"
          >
            <div className="relative z-10">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2 transition-colors group-hover/help:bg-primary group-hover/help:text-white">
                <HelpCircle className="h-4 w-4" />
              </div>
              <p className="text-[10px] font-black text-slate-900 mb-0.5 uppercase tracking-wider">Expert Support</p>
              <p className="text-[9px] font-bold text-slate-500 mb-3 leading-tight">Access executive consulting resources.</p>
              <button className="w-full rounded-lg py-1.5 text-[8px] font-black text-white bg-slate-900 hover:bg-primary transition-all uppercase tracking-widest shadow-sm">
                Get Help
              </button>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute -right-8 -bottom-8 h-16 w-16 bg-primary/5 rounded-full blur-2xl group-hover/help:bg-primary/10 transition-all" />
          </motion.div>
        </nav>
      </div>
    </motion.aside>
  );
};
