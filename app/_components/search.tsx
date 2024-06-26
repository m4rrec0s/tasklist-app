"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEventHandler, Suspense, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!search) return;
    router.push(`/exercises?search=${search}`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <form className="flex gap-2" onSubmit={handleSearchSubmit}>
        <Input
          placeholder="Buscar Exercícios..."
          className="border-none bg-menu rounded-lg focus:border-solid focus:border-rose-500"
          onChange={handleChange}
          value={search}
        />
        <Button size="icon" type="submit" className="rounded-lg">
          <SearchIcon size={20} />
        </Button>
      </form>
    </Suspense>
  );
};

export default Search;
