const Banner = () => {
  const user = {
    name: "Hanna",
    age: 25,
  };
  //função para determiar qual é o dia da semana
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

  //função para determinar a hora do dia e a partir disso retornar a mensagem
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

  return (
    <div className="w-full flex flex-col-reverse h-[150px] bg-primary rounded-lg p-5">
      <div className="">
        <h2 className="text-white text-lg font-bold">
          {getMessage()}, {user.name}.
        </h2>
        <p className="text-white text-sm font-normal">
          Hoje é {getDay()}, tenha um ótimo dia.
        </p>
      </div>
    </div>
  );
};

export default Banner;
