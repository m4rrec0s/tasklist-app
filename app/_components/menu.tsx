"use client";

import {
  BarChartBigIcon,
  Calendar,
  Dumbbell,
  Home,
  MenuIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { cn } from "../_lib/utils";

interface MenuProps {
  className?: string;
}

const Menu = ({ className }: MenuProps) => {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: Home, label: "Início" },
    { href: "/pages/all-exercises", icon: Dumbbell, label: "Treinos" },
    { href: "/pages/graphics", icon: BarChartBigIcon, label: "Gráficos" },
    { href: "/pages/search", icon: SearchIcon, label: "Buscar" },
    { href: "/pages/calendar", icon: Calendar, label: "Calendário" },
    { href: "/pages/more", icon: MenuIcon, label: "Mais" }
  ];

  return (
    <div className={cn("flex px-8 pt-6 pb-10 w-[100vw] bg-menu justify-between rounded-lg", className)}>
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link href={link.href} key={link.href} className={cn("flex flex-col items-center gap-2", {
            "opacity-100": isActive,
            "opacity-50": !isActive
          })}>
            <Icon size={20} />
            <span className="text-xs">{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;