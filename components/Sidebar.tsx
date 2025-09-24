"use client";
import Link from "next/link";
import { HomeIcon, TableCellsIcon } from "@heroicons/react/24/outline";
const Nav = [
  { href: "/admin/dashboard", label: "Dashboard", icon: HomeIcon },
  { href: "/admin/items",     label: "Items",     icon: TableCellsIcon },
];
export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 h-screen sticky top-0 p-4 flex-col gap-2"
           style={{background:"#0d1319",borderRight:"1px solid #1d2733"}}>
      <div className="text-xl font-semibold mb-4">Dune Admin</div>
      <nav className="flex flex-col gap-1">
        {Nav.map(n=>(
          <Link key={n.href} href={n.href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#0f1720]">
            <n.icon className="w-5 h-5 text-[#e46b32]"/><span>{n.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto text-xs td-muted">v0.1</div>
    </aside>
  );
}
