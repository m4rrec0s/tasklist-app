'use client'

import { useSession, SessionProviderProps } from "next-auth/react";
import { createAdditionalData } from "../_actions/form-submit";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const FormDataA = () => {
  const { data: session } = useSession()

  const handleSubmit = (data: FormData) => {
    data.append('id', session?.id as string)
    createAdditionalData(data)
  }

  return (
    <Dialog open>
      <DialogContent className="bg-menu">
        <DialogHeader>
          <DialogTitle>Complete seu cadastro</DialogTitle>
          <DialogDescription>
            Precisamos de mais algumas informações para continuar.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <Input type="date" placeholder="Nascimento" name="age" required />
          <Input type="text" placeholder="Altura" name="height" required />
          <Input type="text" placeholder="Peso" name="weight" required />
          <Select name="gender" required>
            <SelectTrigger>
              <SelectValue placeholder="Gênero" />
              <SelectContent className="w-[180px] bg-menu">
                <SelectItem value="Male">Masculino</SelectItem>
                <SelectItem value="Female">Feminino</SelectItem>
              </SelectContent>
            </SelectTrigger>
          </Select>
          <Button type="submit" className="">
            OK
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormDataA;
