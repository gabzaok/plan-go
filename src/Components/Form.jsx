import { Menu } from "./Form/menu";

export const Form = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex rounded-3xl bg-[#1C262F]/60 shadow-[0_4px_10px_rgba(0,0,0,0.25)] shadow-[#000000]">
        <Menu />

        <div className="w-full p-3">
          <header className="flex flex-col items-center justify-center p-3 text-white">
            <h1 className="text-4xl font-light">
              CRIANDO SEU <i className="font-medium">ROTEIRO</i>
            </h1>
            <p className="text-xs font-extralight italic">
              Organize sua viagem de forma simples e intuitiva
            </p>
          </header>
          <div className="h-fit w-full">
            <header>
              <h1 className="flex flex-col items-center justify-center text-[23px] font-extralight text-white">
                ROTEIROS
              </h1>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};
