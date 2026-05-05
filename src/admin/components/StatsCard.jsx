import { Users, Shield, Banknote } from "lucide-react";

const icons = {
  users: Users,
  shield: Shield,
  banknote: Banknote,
};

export default function StatsCard({ title, value, icon }) {
  const Icon = icons[icon];

  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>

        {/* ✅ Prevent crash */}
        {Icon && <Icon className="w-5 h-5 text-indigo-500" />}
      </div>

      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}