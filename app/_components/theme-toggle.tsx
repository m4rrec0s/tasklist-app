"use client"

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "../_components/ui/radio-group";

const ThemeToggle = () => {
    const {setTheme} = useTheme();
    const defaultTheme = "system";

    return ( 
        <div className="space-x-2">
            {/* <Button onClick={() => setTheme("light")}>Light</Button>
            <span>ou</span>
            <Button onClick={() => setTheme("dark")}>Dark</Button> */}

            <RadioGroup className="gap-2" >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" onClick={() => setTheme("light")} />
              <label htmlFor="light">Claro</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" onClick={() => setTheme("dark")}/>
              <label htmlFor="dark">Escuro</label>
            </div>
          </RadioGroup>
        </div>
     );
}

export default ThemeToggle;