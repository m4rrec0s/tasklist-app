import {
  BarChartBigIcon,
  Calendar,
  Dumbbell,
  GithubIcon,
  Home,
  Instagram,
  MenuIcon,
  MessageCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "../_lib/utils";

interface MenuProps {
  className?: string;
}

const Menu = ({ className }: MenuProps) => {
  return (
    <div className={cn("flex px-8 pt-6 pb-10 w-[100vw] bg-menu justify-between rounded-lg", className)}>
      <Link href={"/"} className="flex flex-col items-center gap-2">
        <Home size={20} />
        <span className="text-xs">Início</span>
      </Link>
      <Link href={"/pages/all-exercises"} className="flex flex-col items-center gap-2">
        <Dumbbell size={20} />
        <span className="text-xs">Treinos</span>
      </Link>
      <Link href={"/pages/graphics"} className="flex flex-col items-center gap-2">
        <BarChartBigIcon size={20} />
        <span className="text-xs">Gráficos</span>
      </Link>
      <Link href={"/pages/mensages"} className="flex flex-col items-center gap-2">
        <MessageCircleIcon size={20} />
        <span className="text-xs">Mensagens</span>
      </Link>
      <Link href={"/pages/calendar"} className="flex flex-col items-center gap-2">
        <Calendar size={20} />
        <span className="text-xs">Calendário</span>
      </Link>
      <Link href={"/"} className="flex flex-col items-center gap-2">
        <MenuIcon size={20} />
        <span className="text-xs">Mais</span>
      </Link>

      {/* <Link
        href={"https://github.com/m4rrec0s/tasklist-app"}
        target="_blank"
        className="flex items-center rounded-lg border border-white gap-2 max-w-fit p-2"
      >
        <GithubIcon size={20} />
        <span className="text-sm">Github</span>
      </Link>

      <Link
        href={"https://www.instagram.com/marcos_henrique_eu/"}
        target="_blank"
        className="flex items-center rounded-lg border border-white gap-2 max-w-fit p-2"
      >
        <Instagram size={20} />
        <span className="text-sm">Instagram</span>
      </Link> */}
    </div>
  );
};

export default Menu;
