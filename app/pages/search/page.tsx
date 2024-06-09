import Header from "@/app/_components/header";
import Menu from "@/app/_components/menu";
import Search from "@/app/_components/search";

const SearchPage = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div>
        <div className="px-2 py-2">
          <Header />
        </div>
        <div className="px-5 py-6">
          <Search />
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default SearchPage;