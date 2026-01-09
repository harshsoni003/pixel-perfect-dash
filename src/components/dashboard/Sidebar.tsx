import { LayoutDashboard, Table, FileText, Ship, MapPin, Settings, User, LogIn, HelpCircle, Truck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
      className="glass-card fixed left-4 top-4 bottom-4 w-64 flex flex-col p-4 z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-3 mb-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "linear-gradient(127.09deg, #0075FF 19.41%, #00C6FB 76.65%)" }}>
          <Truck className="h-4 w-4 text-foreground" />
        </div>
        <span className="text-sm font-semibold tracking-wide text-foreground">
          FREIGHTFLOW AI
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1">
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
              {item.label}
            </NavLink>
          </motion.div>
        ))}

        {/* Account Pages Section */}
        <div className="pt-6">
          <p className="px-4 text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
            Account
          </p>
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
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </nav>

      {/* Help Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-auto rounded-2xl p-4"
        style={{
          background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl mb-3" style={{ background: "linear-gradient(127.09deg, #0075FF 19.41%, #00C6FB 76.65%)" }}>
          <HelpCircle className="h-5 w-5 text-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground mb-1">Need help?</p>
        <p className="text-xs text-muted-foreground mb-3">Contact our support team</p>
        <button className="w-full rounded-xl py-2.5 text-xs font-semibold text-foreground uppercase tracking-wide" style={{ background: "linear-gradient(127.09deg, #0075FF 19.41%, #00C6FB 76.65%)" }}>
          <div className="flex items-center justify-center gap-2">
            <FileText className="h-4 w-4" />
            Documentation
          </div>
        </button>
      </motion.div>
    </motion.aside>
  );
};
