import Search from "@/app/_components/search";

const SearchPage = () => {
  return (
    <div>
      <div>
        <div className="px-5">
          <Search />
        </div>
        <div className="flex flex-col justify-center items-center h-[600px]">
            <h2 className="mb-5 text-sm font-normal text-muted-foreground ">Pesquise por exercícios</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;