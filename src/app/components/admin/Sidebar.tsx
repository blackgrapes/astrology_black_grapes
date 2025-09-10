'use client';
import { useState } from 'react';
import { Home, Settings, Users, Star } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home />, link: "/admin/dashboard" },
    { name: "Features", icon: <Star />, link: "/admin/features" },
    { name: "Users", icon: <Users />, link: "/admin/users" },
    { name: "Settings", icon: <Settings />, link: "/admin/settings" },
  ];

  return (
    <div className="w-64 bg-[#1b1036] text-white min-h-screen p-6 space-y-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-6">🔮 Astro Admin</h1>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.link} passHref>
              <div
                onClick={() => setActive(item.name.toLowerCase())}
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer hover:bg-[#2e1d5a] ${
                  active === item.name.toLowerCase() ? "bg-[#2e1d5a]" : ""
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
    