"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  BarChartBigIcon,
  Calendar,
  Dumbbell,
  GithubIcon,
  HeartIcon,
  Home,
  Instagram,
  LogOutIcon,
  MenuIcon,
  MessageCircleIcon,
  SettingsIcon,
  Stethoscope,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [imgUser, setImgUser] = useState("/user.jpeg");

  useEffect(() => {
    setImgUser("/user.jpeg");
  }, []);
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="tasklist"
        width={65}
        height={25}
        className="opacity-60"
      />
      <div className="flex items-center justify-between mt-2">
        <Sheet>
          <SheetTrigger>
            <Button
              size="icon"
              variant="outline"
              className="border-none bg-transparent"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent
            className="flex flex-col justify-between bg-menu"
            side={"left"}
          >
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-8">
              <Link href={"/"} className="flex items-center gap-2">
                <Home size={20} />
                <span className="text-sm">Início</span>
              </Link>
              <Separator className="bg-gray-400" />
              <Link
                href={"/pages/all-exercises"}
                className="flex items-center gap-2"
              >
                <Dumbbell size={20} />
                <span className="text-sm">Treinos</span>
              </Link>
              <Separator className="bg-gray-400" />
              <Link
                href={"/pages/graphics"}
                className="flex items-center gap-2"
              >
                <BarChartBigIcon size={20} />
                <span className="text-sm">Gráficos</span>
              </Link>
              <Separator className="bg-gray-400" />
              <Link
                href={"/pages/mensages"}
                className="flex items-center gap-2"
              >
                <MessageCircleIcon size={20} />
                <span className="text-sm">Mensagens</span>
              </Link>
              <Separator className="bg-gray-400 " />
              <Link
                href={"/pages/calendar"}
                className="flex items-center gap-2"
              >
                <Calendar size={20} />
                <span className="text-sm">Calendário</span>
              </Link>
            </div>

            <div className="flex items-center justify-around">
              <Link
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
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="rounded-full w-14 h-14 bg-profile hover:bg-primary">
              <Avatar className="w-14 h-14">
                <AvatarImage src={imgUser} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-menu p-5">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex justify-between items-center w-[350px]">
                <div className="flex items-center gap-2">
                  <Image
                    src={imgUser}
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-xl truncate">Hanna Martinez</h2>
                    <span className="text-sm text-gray-400">
                      exemplo@exemplo.com
                    </span>
                  </div>
                </div>
                <Button size="icon" className="rounded-lg hover:bg-menu-hover">
                  <LogOutIcon />
                </Button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Separator className="bg-gray-400" />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/"} className="flex gap-2">
                <HeartIcon size={20} />
                <span className="font-semibold">Treinos favoritos</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/"} className="flex gap-2">
                <Stethoscope size={20} />
                <span className="font-semibold">Avaliação Física</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/settings"} className="flex gap-2">
                <SettingsIcon size={20} />
                <span className="font-semibold">Configurações</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
