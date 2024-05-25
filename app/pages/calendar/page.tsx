import Header from "@/app/_components/header";

const CalerdarPage = () => {
    return ( 
        <div className="px-2 pt-2">
        <Header />
        <div>
          <h2 className="mb-5 text-lg font-semibold">Calendário</h2>
          <div className="grid grid-cols-2 gap-6"></div>
        </div>
      </div>
     );
}
 
export default CalerdarPage;