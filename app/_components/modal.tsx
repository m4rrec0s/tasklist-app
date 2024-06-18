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

import createData from "../_actions/form-submit";

const Modal = () => {
  return (
    <>
        <Dialog>
          <form action={createData.createAdditionalData}>
            <DialogContent className="bg-menu">
              <DialogHeader>
                <DialogTitle>Complete seu cadastro</DialogTitle>
                <DialogDescription>
                  Precisamos de mais algumas informações para continuar.
                </DialogDescription>
              </DialogHeader>
              <Input type="date" placeholder="Nascimento" name="age" required/>
              <Input type="number" placeholder="Altura" name="height" required/>
              <Input type="number" placeholder="Peso" name="weight" required/>
              <Select name="gender" required>
                <SelectTrigger>
                <SelectValue placeholder="Gênero" />
                  <SelectContent className="w-[180px] bg-menu">
                    <SelectItem value="Male">Masculino</SelectItem>
                    <SelectItem value="Female">Feminino</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Button type="submit" className="">OK</Button>
            </DialogContent>
          </form>
        </Dialog>
    </>
  );
};

export default Modal;
