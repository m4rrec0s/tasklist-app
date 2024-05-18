import Banner from "./_components/banner";
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
    </>
  );
}
