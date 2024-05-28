import { BellIcon, ChevronLeftIcon, SunDimIcon, SunIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import Link from "next/link";

const SettingsPage = () => {
  return (
    <div className="py-5 px-3">
      <div className="flex items-center gap-4">
        <Button className="rounded-full bg-menu text-foreground hover:bg-hover" size="icon">
          <Link href="/">
            <ChevronLeftIcon size={24} />
          </Link>
        </Button>
        <h1 className="font-semibold text-2xl">Configurações gerais</h1>
      </div>
      <div className="mt-6 flex flex-col gap-4 justify-between">
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
      <div className="mt-6 flex flex-col gap-4 justify-between">
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
    </div>
  );
};

export default SettingsPage;
