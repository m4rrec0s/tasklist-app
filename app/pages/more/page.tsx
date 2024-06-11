import { GithubIcon, Instagram } from "lucide-react";
import Link from "next/link";

const More = () => {
  return (
    <div>
      <div className="animate-fadeIn">
        <h2 className="text-lg font-semibold">Mais</h2>
        <div className="px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href={"https://github.com/m4rrec0s/tasklist-app"}
              target="_blank"
              className="flex items-center gap-2"
            >
              <GithubIcon size={20} />
              <span className="text-sm">Github do Projeto</span>
            </Link>

            <Link
              href={"https://www.instagram.com/marcos_henrique_eu/"}
              target="_blank"
              className="flex items-center gap-2"
            >
              <Instagram size={20} />
              <span className="text-sm">Instagram do criador</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;