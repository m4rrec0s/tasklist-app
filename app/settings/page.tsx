"use client";

import { BellIcon, ChevronLeftIcon, SunIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle } from "../_components/ui/dialog";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../_components/ui/radio-group";

const SettingsPage = () => {
  const [isNotificationDialogOpen, setIsNotificationDialogOpen] =
    useState(false);
  const [isThemeDialogOpen, setIsThemeDialogOpen] = useState(false);

  const handleDialogNotificationOpen = () => {
    setIsNotificationDialogOpen(true);
  };

  const handleDialogNotificationClose = () => {
    setIsNotificationDialogOpen(false);
  };

  const handleDialogThemeOpen = () => {
    setIsThemeDialogOpen(true);
  };

  const handleDialogThemeClose = () => {
    setIsThemeDialogOpen(false);
  };

  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  return (
    <div className="py-5 px-3">
      <div className="flex items-center gap-4 mb-2">
        <Button
          className="rounded-full bg-menu text-foreground hover:bg-hover"
          size="icon"
        >
          <Link href="/">
            <ChevronLeftIcon size={24} />
          </Link>
        </Button>
        <h1 className="font-semibold text-2xl">Configurações gerais</h1>
      </div>

      <Button
        onClick={handleDialogNotificationOpen}
        variant="ghost"
        className="mt-6 mb-0 text-left border-none outline-none p-0"
      >
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex gap-2">
            <div className="p-5 bg-menu rounded-lg">
              <BellIcon size={20} />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <h2 className="font-semibold">Notificações</h2>
              <span className="text-muted-foreground m-0 p-0 text-sm">
                Ative ou Desative as notificações do aplicativo.
              </span>
            </div>
          </div>
        </div>
      </Button>

      <Dialog
        open={isNotificationDialogOpen}
        onOpenChange={handleDialogNotificationClose}
      >
        <DialogContent className="bg-menu">
          <DialogTitle>Notificações</DialogTitle>
          <RadioGroup defaultValue="option-one" className="gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <label htmlFor="option-one">Ativar</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <label htmlFor="option-two">Desativar</label>
            </div>
          </RadioGroup>
        </DialogContent>
      </Dialog>

      <Button
        onClick={handleDialogThemeOpen}
        variant="ghost"
        className="mt-3 mb-0 text-left border-none outline-none p-0"
      >
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex gap-2">
            <div className="p-5 bg-menu rounded-lg">
              <SunIcon size={20} />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <h2 className="font-semibold">Mudar tema</h2>
              <span className="text-muted-foreground m-0 p-0 text-sm">
                Tema claro ou escuro.
              </span>
            </div>
          </div>
        </div>
      </Button>

      <Dialog open={isThemeDialogOpen} onOpenChange={handleDialogThemeClose}>
        <DialogContent className="bg-menu">
          <DialogTitle>Notificações</DialogTitle>
          <RadioGroup
            defaultValue="dark"
            className="gap-2"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTheme(event.target.value)
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="option-dark" />
              <label htmlFor="option-dark">Escuro</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="option-light" />
              <label htmlFor="option-light">Claro</label>
            </div>
          </RadioGroup>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SettingsPage;
