"use client";

import ExerciseList from "@/app/_components/exercise-list";
import Header from "@/app/_components/header";
import Menu from "@/app/_components/menu";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      
      console.log(`Search results: ${JSON.stringify(data)}`); 
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <div className="py-2 px-2">
        <Header />
      </div>

      <div className="animate-fadeIn flex-grow overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        <h2 className="pl-3 mb-5 text-lg font-semibold">Buscar</h2>
        <div className="px-2 mb-2 w-full space-x-2 flex">
          <Input
            type="search"
            placeholder="Exercícios..."
            className="rounded-lg focus:border-solid focus:border-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button className="rounded-lg p-2 hover:bg-hover" onClick={handleSearch}>
            <SearchIcon size={24} />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          {results.length > 0 ? (
            <ExerciseList exercises={results} />
          ) : (
            <p className="w-full text-center text-muted-foreground pb-[150px]">Nenhum exercício encontrado</p>
          )}
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default SearchPage;