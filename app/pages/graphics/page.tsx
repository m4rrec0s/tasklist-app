const GraphicsPage = () => {
  return (
    <div>
      <h2 className="pl-3 mb-5 text-lg font-semibold">Gráficos</h2>
      <div className="animate-fadeIn flex-grow overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        <div className="px-2 py-2 mb-2">
          <div className="grid grid-cols-2 gap-6 px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsPage;
