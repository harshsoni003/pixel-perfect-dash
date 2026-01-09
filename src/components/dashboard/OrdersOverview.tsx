import { motion } from "framer-motion";
import { TrendingUp, ShoppingBag, Bell, CreditCard, Palette, Droplet } from "lucide-react";

const orders = [
  {
    icon: ShoppingBag,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "#0075FF",
  },
  {
    icon: Bell,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "#0075FF",
  },
  {
    icon: CreditCard,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "#0075FF",
  },
  {
    icon: Palette,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "#0075FF",
  },
  {
    icon: Droplet,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "#0075FF",
  },
];

export const OrdersOverview = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.55 }}
      className="glass-card p-5 h-full"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Orders overview</h3>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-success" />
          <span className="text-sm text-success font-medium">+30%</span>
          <span className="text-sm text-muted-foreground">this month</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />

        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.title}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-4 relative"
            >
              {/* Icon */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                style={{ backgroundColor: order.color }}
              >
                <order.icon className="h-3 w-3 text-foreground" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{order.title}</p>
                <p className="text-xs text-muted-foreground">{order.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
