import { Menu, SearchIcon } from "lucide-react";
import Header from "./header";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="px-2 mb-2 w-full space-x-2 flex">
      <Input
        type="search"
        placeholder="Exercícios..."
        className="rounded-lg focus:border-solid focus:border-2"
      />
      <Button className="rounded-lg p-2 hover:bg-hover" variant="ghost">
        <SearchIcon size={24} />
      </Button>
    </div>
  );
};

export default Search;
