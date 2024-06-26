"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  HeartIcon,
  LogInIcon,
  LogOutIcon,
  SettingsIcon,
  Stethoscope,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signIn, useSession, signOut } from "next-auth/react";
import { Card, CardContent } from "./ui/card";
import { imcCalc } from "../_helpers/imc-calc";

const Header = () => {
  const { data } = useSession();
  const undefinedIcon = "/undefined-icon.jpeg";

  const imc = imcCalc(String(data?.weight), String(data?.height));

  var imcClassification = "";
  
  if (imc < 18.5) {
    imcClassification = "text-orange-400";
  } else if (imc >= 18.5 && imc < 24.9) {
    imcClassification = "text-green-400";
  } else if (imc >= 25 && imc < 29.9) {
    imcClassification = "text-yellow-400";
  } else if (imc >= 30) {
    imcClassification = "text-red-400";
  }

  return (
    <div>
      <Image
        src="/logo.svg"
        alt="tasklist"
        width={65}
        height={25}
        className="flex lg:hidden dark:opacity-60"
      />
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="rounded-full w-12 h-12 bg-profile hover:bg-primary">
              <Avatar className="w-12 h-12">
                <AvatarImage src={data?.user?.image || undefinedIcon} />
                <AvatarFallback>{undefinedIcon}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-profile p-5 rounded-lg border-gray-500">
            {data?.user ? (
              <>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center w-[350px]">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-14 h-14 bg-primary">
                          <AvatarImage
                            src={data?.user?.image || undefinedIcon}
                          />
                          <AvatarFallback>
                            {data?.user?.name?.split(" ")[0][0]}
                            {data?.user?.name?.split(" ")[1][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <h2 className="font-semibold text-xl truncate">
                            {data?.user?.name}
                          </h2>
                          <span className="text-sm text-gray-400">
                            {data?.user?.email}
                          </span>
                        </div>
                      </div>
                      <Button
                        size="icon"
                        className="rounded-lg hover:bg-hover"
                        onClick={() => signOut()}
                      >
                        <LogOutIcon />
                      </Button>
                    </div>
                    <Card className="mt-5 opacity-50">
                      <CardContent className="flex justify-around h-5 items-center space-x-4 text-sm">
                        <div>{data.age} anos</div>
                        <Separator
                          orientation="vertical"
                          className="bg-gray-400 h-5"
                        />
                        {String(data.gender) === "Male" ? (
                          <div>Homem</div>
                        ) : (
                          <div>Mulher</div>
                        )}
                        <Separator
                          orientation="vertical"
                          className="bg-gray-400 h-5"
                        />

                        <div className={`${imcClassification}`}>IMC : {imc}</div>
                      </CardContent>
                    </Card>
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
              </>
            ) : (
              <div className="flex items-center justify-between w-[350px]">
                <span className="">Olá, faça login para continuar!</span>
                <Button
                  onClick={() => signIn()}
                  className="bg-primary text-white p-1 rounded-lg"
                >
                  <LogInIcon />
                </Button>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
