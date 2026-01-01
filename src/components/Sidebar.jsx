import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const SIDEBAR_ITEMS = [
    {
      name: "Overview",
      icon: BarChart2,
      color: "#6366f1",
      href: "/",
    },
    {
      name: "Products",
      icon: ShoppingBag,
      color: "#985aea",
      href: "/products",
    },
    {
      name: "Users",
      icon: Users,
      color: "#eb269e",
      href: "/users",
    },
    {
      name: "Sales",
      icon: DollarSign,
      color: "#fce105",
      href: "/sales",
    },
    {
      name: "Orders",
      icon: ShoppingCart,
      color: "#0efebd",
      href: "/orders",
    },
    {
      name: "Analytics",
      icon: TrendingUp,
      color: "#2df205",
      href: "/analytics",
    },
    {
      name: "Settings",
      icon: Settings,
      color: "#d0d0d0",
      href: "/settings",
    },
  ];
  const [isSidebarOpen, setIsSidebaeOpen] = useState();

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 easy-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebaeOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div
                className="flex items-center p-4 text-sm font-medium rounded-lg 
                    hover:bg-gray-700 transition-colours mb-2"
              >
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: 20 }}
                />

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.4 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
