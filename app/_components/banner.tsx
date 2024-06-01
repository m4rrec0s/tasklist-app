"use client";

import { useSession } from "next-auth/react";

const Banner = () => {
  const { data } = useSession();

  const getDay = () => {
    const date = new Date();
    const day = date.getDay();
    const days = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    return days[day];
  };

  const getMessage = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return "Bom dia";
    } else if (hours < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  const firstName = data?.user?.name?.split(" ")[0];

  return (
    <div className="w-full flex flex-col-reverse h-[150px] bg-primary rounded-lg p-5">
      <div className="">
        {data?.user ? (
          <h2 className="text-white text-lg font-bold">
            {getMessage()}, {firstName}.
          </h2>
        ) : (
          <h2 className="text-white text-lg font-bold">Bem-vindo</h2>
        )}
        <p className="text-white text-sm font-normal">
          Hoje é {getDay()}, tenha um ótimo dia.
        </p>
      </div>
    </div>
  );
};

export default Banner;