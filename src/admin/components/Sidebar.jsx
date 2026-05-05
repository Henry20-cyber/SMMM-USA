import { LogOut, LayoutDashboard, Users, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
      <div className="p-6 text-white font-bold text-xl">
      Admin Dashboard
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <NavItem icon={<LayoutDashboard />} label="Dashboard" active />
        <NavItem icon={<Users />} label="Visitors" />
        <NavItem icon={<BarChart3 />} label="Analytics" />
        <NavItem icon={<Settings />} label="Settings" />
      </nav>

      <button className="p-4 flex items-center gap-2 hover:text-red-400">
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-slate-800 text-white" : "hover:bg-slate-800"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}