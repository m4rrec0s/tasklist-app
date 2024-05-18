"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="tasklist"
        width={90}
        height={30}
        className="opacity-60"
      />
      <div className="flex items-center justify-between mt-2">
        <Button variant="ghost">
          <MenuIcon />
        </Button>
        <Button className="rounded-full w-14 h-14 bg-profile hover:bg-primary">
          <Avatar className="w-14 h-14">
            <AvatarImage src="/user.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  );
};

export default Header;
