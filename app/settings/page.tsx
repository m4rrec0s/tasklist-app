import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import Link from "next/link";

const SettingsPage = () => {
  return (
    <div className="py-5 px-3">
      <div className="flex items-center gap-4">
        <Button className="rounded-full" size="icon">
          <Link href="/">
            <ChevronLeftIcon size={24} />
          </Link>
        </Button>
        <h1 className="font-semibold">Configurações gerais</h1>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="font-semibold">Notificações</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="font-semibold">Mudar tema</h2>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
