export const Menu = () => {
  return (
    <div className="flex w-md flex-col gap-3 rounded-3xl bg-[#131A23] p-3 shadow-[0_4px_10px_rgba(0,0,0,0.25)] shadow-[#000000]">
      <header className="flex items-center justify-center gap-3 p-3">
        <img className="size-[50px]" src="/logo.svg" alt="" />
        <h1 className="text-2xl font-extralight text-white">PLAN & GO</h1>
      </header>
      <div className="flex flex-col gap-4 p-3 text-[#CAC2BB]">
        <div className="mb-6 flex items-center gap-3 rounded-4xl border-1 p-3">
          <img className="size-6" src="/add location.svg" alt="" />
          <input
            className="w-[95%] placeholder:text-sm placeholder:font-extralight focus:outline-none"
            type="text"
            placeholder="ADICIONAR DESTINO"
          />
        </div>
        <div className="flex items-center gap-3 rounded-4xl border-1 p-3">
          <img className="size-6" src="/add actv.svg" alt="" />
          <input
            className="w-[95%] placeholder:text-sm placeholder:font-extralight focus:outline-none"
            type="text"
            placeholder="ADICIONAR ATIVIDADE"
          />
        </div>

        <div className="flex items-center gap-3 rounded-4xl border-1 p-3">
          <img className="size-6" src="/add date.svg" alt="" />
          <input
            className="w-[95%] placeholder:text-sm placeholder:font-extralight focus:outline-none"
            type="text"
            placeholder="ADICIONAR DATA"
          />
        </div>
        <div className="flex items-center gap-3 rounded-4xl border-1 p-3">
          <img className="size-6" src="/add time.svg" alt="" />
          <input
            className="w-[95%] placeholder:text-sm placeholder:font-extralight focus:outline-none"
            type="text"
            placeholder="ADICIONAR HORA"
          />
        </div>
      </div>
      <button className="group relative mx-3 my-6 h-12 cursor-pointer border-0 bg-transparent outline-none">
        <span className="relative block h-12 w-12 rounded-full bg-[#FFA53B] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full group-hover:bg-green-600">
          <img className="absolute top-2.5 left-2.5" src="/check.svg" alt="" />
        </span>

        <span className="absolute inset-0 ml-[1.85rem] flex items-center justify-center font-medium text-[#CAC2BB] uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
          SALVAR ATIVIDADE
        </span>
      </button>
    </div>
  );
};
