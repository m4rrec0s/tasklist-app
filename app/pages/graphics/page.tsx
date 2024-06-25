import Developing from "@/app/_components/developing";
import { HourglassIcon } from "lucide-react";

const GraphicsPage = () => {
  return (
    // overflow-y-scroll px-2 py-2 mb-2 [&::-webkit-scrollbar]:hidden
    <div className="h-full">
      <h2 className="pl-3 mb-5 text-lg font-semibold">Gráficos</h2>
      <div className="h-full animate-fadeIn flex justify-center items-center">
        <Developing />
      </div>
    </div>
  );
};

export default GraphicsPage;
