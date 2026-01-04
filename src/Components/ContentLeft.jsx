import { useEffect, useState } from "react";
import { INPUTS } from "../constants/inputs";

const INITIAL_FORM = {
  destination: "",
  activity: "",
  date: "",
  hour: "",
};

export const ContentLeft = ({ onSave, onUpdate, editingActivity }) => {
  const [form, setForm] = useState(INITIAL_FORM);

  useEffect(() => {
    if (editingActivity) {
      setForm({
        destination: editingActivity.destination,
        activity: editingActivity.activity,
        date: editingActivity.date,
        hour: editingActivity.hour,
      });
    } else {
      setForm(INITIAL_FORM);
    }
  }, [editingActivity]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.destination.trim() || !form.activity.trim()) {
      alert("Preencha os campos obrigatórios");
      return;
    }

    if (editingActivity) {
      onUpdate({ ...editingActivity, ...form });
    } else {
      onSave({
        id: crypto.randomUUID(),
        ...form,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex w-md flex-col gap-3 rounded-3xl bg-[#131A23] p-3 shadow-[0_4px_10px_rgba(0,0,0,0.25)] shadow-[#000000]">
      <header className="flex items-center justify-center gap-3 p-3">
        <img className="size-[50px]" src="/logo.svg" alt="logo" />
        <h1 className="text-2xl font-extralight text-white">PLAN & GO</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 p-3 text-[#CAC2BB]">
          {INPUTS.map(({ icon, placeholder, type, label, name }, index) => (
            <div key={name + index}>
              <label className="font-extralights ml-4 text-sm">{label}</label>
              <div className="flex items-center gap-3 rounded-4xl border-1 p-3">
                <img className="size-6" src={icon} alt={placeholder} />

                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-[95%] placeholder:text-sm placeholder:font-extralight placeholder:italic focus:outline-none"
                  required
                  maxLength={type === "text" ? 50 : undefined}
                  min={
                    type === "date"
                      ? new Date().toISOString().split("T")[0]
                      : ""
                  }
                />
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="group relative my-6 h-12 w-full cursor-pointer border-0 bg-transparent px-3 outline-none"
        >
          <span className="relative block h-12 w-12 rounded-full bg-[#FFA53B] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full group-hover:bg-green-600">
            <img
              className="absolute top-2.5 left-2.5"
              src="/check.svg"
              alt="check"
            />
          </span>

          <span className="absolute inset-0 ml-[1.85rem] flex items-center justify-center font-medium text-[#CAC2BB] uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
            {editingActivity ? "CONFIRMAR EDIÇÃO" : "SALVAR ATIVIDADE"}
          </span>
        </button>
      </form>
    </div>
  );
};
