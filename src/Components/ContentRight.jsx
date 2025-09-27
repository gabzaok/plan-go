export const ContentRight = ({ statesProps }) => {
  return (
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

        <div>
          <h1>TESTE</h1>
          {statesProps.isValidated
            ? statesProps.inputDestination
            : "Ainda não há destinos"}
        </div>
      </div>
    </div>
  );
};
