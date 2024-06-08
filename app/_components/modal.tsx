"use client";

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Form } from "./ui/form";

const Modal = () => {
  const { data } = useSession();
  const handleSubmitClick = () => {};

  return (
    <>
      {data?.user ? (
        <Dialog open>
          <DialogContent className="bg-menu">
            <DialogHeader>
              <DialogTitle>Complete seu cadastro</DialogTitle>
              <DialogDescription>
                Precisamos de mais algumas informações para continuar.
              </DialogDescription>
            </DialogHeader>
            <Input type="date" placeholder="Nascimento" />
            <Input type="number" placeholder="Altura" />
            <Input type="number" placeholder="Peso" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Gênero" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Masculino</SelectItem>
                <SelectItem value="Female">Feminino</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSubmitClick}>OK</Button>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
};

export default Modal;
