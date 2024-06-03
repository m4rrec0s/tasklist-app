import Header from "@/app/_components/header";
import Menu from "@/app/_components/menu";

const CalerdarPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <div className="py-2 px-2">
        <Header />
      </div>

      <div className="animate-fadeIn">
        <h2 className="mb-5 text-lg font-semibold">Calendar</h2>
        <div className="px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-cols-2 gap-6"></div>
        </div>
      </div>
      <div className="z-10">
        <Menu />
      </div>
    </div>
  );
};

export default CalerdarPage;
