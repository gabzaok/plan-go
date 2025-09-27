import "../styles/CheckBox.css";
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

        <div className="relative flex gap-2 border-l-2 border-[#131A23]/60 px-3">
          {statesProps.isValidated && (
            <div className="flex w-full items-center rounded-xl bg-[#131A23]/80 p-3 shadow-[0_4px_10px_rgba(0,0,0,0.25)] shadow-[#000000]">
              <div className="absolute -left-1.5 size-3 rounded-full bg-[#FFA53B]/90" />
              <div className="flex w-full flex-col justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-light text-amber-50 italic">
                    {statesProps.inputDestination}
                  </span>
                  <div className="size-1 rounded-full bg-amber-500" />
                  <span className="text-sm font-extralight text-[#CAC2BB]">
                    {statesProps.inputDate}
                  </span>

                  <div className="size-1 rounded-full bg-amber-500" />
                  <span className="text-sm font-light text-[#CAC2BB]">
                    {statesProps.inputHour}
                  </span>
                </div>

                <div className="relative flex w-full items-center gap-3 rounded-xl">
                  <input
                    type="checkbox"
                    id="01"
                    className="custom-checkbox relative inline-grid size-[18px] cursor-pointer place-items-center rounded-lg border-1 border-[#FFA53B] bg-[#303952]"
                  />
                  <label
                    htmlFor="01"
                    className="text-[16px] font-light select-none"
                  >
                    {statesProps.inputActivity}
                  </label>
                </div>
              </div>
              <div className="ml-auto flex gap-3 p-3">
                <div className="">
                  <img className="size-6" src="/edit.svg" alt="edit" />
                </div>
                <div>
                  <img className="size-6" src="/delete.svg" alt="edit" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
