"use client"

import { useTheme } from "next-themes";
import { RadioGroup, RadioGroupItem } from "../_components/ui/radio-group";

const ThemeToggle = () => {
    const {setTheme} = useTheme();

    return ( 
        <div className="space-x-2">
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