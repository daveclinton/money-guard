// components/Sidebar.tsx
import { Home, PieChart, CreditCard, List } from "lucide-react";
import Image from "next/image";
import { NavItem } from "./NavItem";

export const Sidebar = () => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 bg-white p-4">
      <div className="mb-8">
        <Image
          height={100}
          width={100}
          src="https://i.pravatar.cc/150?img=64"
          alt="UsMober"
          priority={true}
          className="rounded-full mb-2 w-20 h-20"
        />
        <p className="text-sm text-gray-950">Welcome back!</p>
        <h3 className="text-lg font-semibold">Adam Jacobs</h3>
      </div>
      <nav className="flex-1 space-y-2">
        <NavItem icon={Home} label="Dashboard" href="/" />
        <NavItem icon={PieChart} label="Investments" href="/" />
        <NavItem icon={CreditCard} label="My Cards" href="/" />
        <NavItem icon={List} label="Transactions" href="/" />
      </nav>
    </div>
  );
};
