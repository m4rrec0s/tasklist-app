import Banner from "./_components/banner";
import ExerciseList from "./_components/exercise-list";
import Header from "./_components/header";

export default function Home() {
  return (
    <>
      <div className="pt-2 px-2">
        <Header />
      </div>

      <div className="mt-10 px-2">
        <Banner />
      </div>

      <h2 className="mt-6 px-2 font-semibold text-lg">Exercícios Recentes</h2>
      <div className="mt-6 px-2">
        <ExerciseList />
      </div>
    </>
  );
}
