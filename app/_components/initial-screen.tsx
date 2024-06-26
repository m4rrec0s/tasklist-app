"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ChromeIcon } from "lucide-react";
import Link from "next/link";

const InitialScreen = () => {
  const { data } = useSession();

  return (
    <>
      {!data?.user ? (
        <main className="absolute bottom-0 p-8 top-0 left-0 h-[100vh] w-[100vw] bg-background z-10 flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center">
            <Image
              className="w-[230px] h-[230px]"
              src="/TaskList-logo.png"
              alt="TaskList logo"
              width={230}
              height={230}
            />
            <h1 className="font-bold text-xl">Bem vindo ao TaskList</h1>
            <p className="font-normal text-sm text-muted">
              Seu melhor companheiro de academia!
            </p>
            <div className="flex flex-col font-semibold mt-8 h-52 w-full ">
              <Button
                className="w-full p-8 rounded-lg bg-transparent border border-muted-foreground gap-2 hover:bg-gray-500 hover:text-white"
                onClick={() => signIn()}
              >
                <ChromeIcon className="w-6 h-6 mr-2" />
                <span>Entrar com Google</span>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-5">
            <Link className="text-sm font-semibold underline" href="https://github.com/m4rrec0s">By @m4rrec0s</Link>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default InitialScreen;
