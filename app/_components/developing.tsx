import { HourglassIcon } from "lucide-react";

const Developing = () => {
    return ( 
        <div className="border border-gray-600 px-10 py-8 rounded-lg shadow-lg">
          <div className="opacity-70 flex flex-col items-center">
            <HourglassIcon size={40} className="animate-spin-edit" />
            <p className="text-center mt-4">
              Em desenvolvimento...
            </p>
          </div>
        </div>
     );
}
 
export default Developing;