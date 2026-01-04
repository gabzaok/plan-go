import "../styles/CheckBox.css";
import { formatDate } from "../utils";

export const ContentRight = ({
  activities,
  onDelete,
  onEdit,
  editingActivity,
  onCancelEdit,
}) => {
  return (
    <div className="flex w-full flex-col p-3">
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
          <h1 className="flex items-center justify-center text-[23px] font-extralight text-white">
            ROTEIROS
          </h1>
        </header>

        <div className="activities-scroll relative flex h-full flex-col gap-3 overflow-y-auto px-6 pt-1">
          {activities.length === 0 && (
            <p className="text-center text-sm font-extralight text-[#CAC2BB] italic">
              Nenhuma atividade adicionada ainda
            </p>
          )}
          {activities.map((item) => {
            const isEditing = editingActivity?.id === item.id;

            return (
              <div
                key={item.id}
                className={`relative flex w-full items-center rounded-xl p-3 shadow-[0_4px_10px_rgba(0,0,0,0.25)] ${
                  isEditing
                    ? "bg-[#1F2A35] ring-2 ring-[#FFA53B]"
                    : "bg-[#131A23]/80"
                } `}
              >
                <div className="absolute -left-4.5 z-10 size-3 rounded-full bg-[#FFA53B]/90" />

                <div className="flex w-full flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-light text-amber-50 italic">
                      {item.destination}
                    </span>

                    <div className="size-1 rounded-full bg-amber-500" />

                    <span className="text-sm font-extralight text-[#CAC2BB]">
                      {formatDate(item.date)}
                    </span>

                    <div className="size-1 rounded-full bg-amber-500" />

                    <span className="text-sm font-light text-[#CAC2BB]">
                      {item.hour}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={item.id}
                      className="custom-checkbox inline-grid size-[18px] cursor-pointer place-items-center rounded-lg border border-[#FFA53B] bg-[#303952]"
                    />
                    <label
                      htmlFor={item.id}
                      className="cursor-pointer text-[16px] font-light text-white select-none"
                    >
                      {item.activity}
                    </label>
                  </div>
                </div>

                <div className="ml-auto flex gap-3 p-3">
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => (isEditing ? onCancelEdit() : onEdit(item))}
                  >
                    <img
                      className="size-6"
                      src={isEditing ? "/close.svg" : "/edit.svg"}
                      alt={isEditing ? "cancelar edição" : "editar"}
                    />
                  </button>

                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => onDelete(item.id)}
                  >
                    <img className="size-6" src="/delete.svg" alt="deletar" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
