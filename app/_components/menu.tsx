"use client";

import {
  BarChartBigIcon,
  Calendar,
  Dumbbell,
  GithubIcon,
  Home,
  LinkedinIcon,
  MenuIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../_lib/utils";
import Image from "next/image";

interface MenuProps {
  className?: string;
}

const Menu = ({ className }: MenuProps) => {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: Home, label: "Início" },
    { href: "/pages/workouts", icon: Dumbbell, label: "Treinos" },
    { href: "/pages/graphics", icon: BarChartBigIcon, label: "Gráficos" },
    { href: "/pages/search", icon: SearchIcon, label: "Buscar" },
    { href: "/pages/calendar", icon: Calendar, label: "Calendário" },
    { href: "/pages/more", icon: MenuIcon, label: "Mais" },
  ];

  return (
    <>
      <div
        className={cn(
          "hidden lg:flex flex-col px-8 pt-6 pb-10 max-w-[250px] w-[300px] h-full bg-menu items-center justify-between rounded-lg",
          className
        )}
      >
        <Image
        src="/logo.svg"
        alt="tasklist"
        width={65}
        height={25}
        className="hidden lg:flex opacity-60 "
      />
        <div className="flex flex-col gap-6">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={link.href}
                className={cn("flex items-center gap-2", {
                  "opacity-100": isActive,
                  "opacity-50": !isActive,
                })}
              >
                <Icon size={20} />
                <span className="text-xs">{link.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-6 opacity-50">
          <Link href={"https://github.com/m4rrec0s"} target="_blank" className="border-slate-50 border border-solid rounded-full p-2">
            <GithubIcon size={16} />
          </Link>

          <Link href={"https://www.linkedin.com/in/marcos-henrique-araujo/"} target="_blank" className="border-slate-50 border border-solid rounded-full p-2">
            <LinkedinIcon size={16} />
          </Link>
        </div>
      </div>

      {/* Celular */}

      <div
        className={cn(
          "flex lg:hidden px-8 pt-6 pb-10 w-[100vw] bg-menu justify-between rounded-lg",
          className
        )}
      >
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.href}
              className={cn("flex flex-col items-center gap-2", {
                "opacity-100": isActive,
                "opacity-50": !isActive,
              })}
            >
              <Icon size={20} />
              <span className="text-xs">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
