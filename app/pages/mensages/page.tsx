import Header from "@/app/_components/header";
import Menu from "@/app/_components/menu";

const MensagesPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
    <div className="py-2 px-2 sticky top-0">
      <Header />
    </div>

    <h2 className="pl-3 mb-5 text-lg font-semibold">Mensagens</h2>
    <div className="animate-fadeIn flex-grow overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <div className="px-2 py-2 mb-2">
        <div className="grid grid-cols-2 gap-6 px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden"></div>
      </div>
    </div>
    <div className="z-10 sticky bottom-0">
      <Menu />
    </div>
  </div>
  );
};

export default MensagesPage;
