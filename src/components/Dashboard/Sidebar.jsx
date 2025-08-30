import { FiBarChart2, FiPackage, FiPlusCircle, FiShoppingCart, FiStar, FiTag, FiUsers } from "react-icons/fi";
import { Link } from "react-router";

const Sidebar = () => {
  const menuItems = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/products", icon: FiPackage, label: "Products" },
    { to: "/products/add", icon: FiPlusCircle, label: "Add Product" },
    { to: "/categories", icon: FiTag, label: "Categories" },
    { to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
    { to: "/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "/reviews", icon: FiStar, label: "Reviews" },
    { to: "/users", icon: FiUsers, label: "Users" },
  ];

  return (
    <aside className="bg-base-200 w-64 min-h-screen p-4 hidden lg:flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 px-2">
        <FiShoppingCart className="h-6 w-6" />
        <h1 className="text-xl font-bold">PhiMart</h1>
      </div>

      {/* Menu */}
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <Link to={item.to} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-base-300">
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto pt-6 text-xs text-base-content/70">© 2025 PhiMart Admin</div>
    </aside>
  );
};

export default Sidebar;
