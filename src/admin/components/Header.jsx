import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b px-6 flex justify-between items-center">
      <input
        placeholder="Search..."
        className="border px-3 py-2 rounded-md w-64"
      />

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">
          {user?.email || "Loading..."}
        </span>

        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-bold">
          {user?.email?.[0]?.toUpperCase()}
        </div>
      </div>
    </header>
  );
}