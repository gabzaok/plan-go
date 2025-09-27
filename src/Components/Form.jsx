import { useState } from "react";
import { ContentLeft } from "./Form/ContentLeft";
import { ContentRight } from "./ContentRight";

export const Form = ({ setIsShowForm }) => {
  const [formDestination, setFormDestination] = useState("");
  const [formActivity, setFormActivity] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formHour, setFormHour] = useState("");

  // aqui ficam os valores salvos (não limpam quando enviar)
  const [inputDestination, setInputDestination] = useState("");
  const [inputActivity, setInputActivity] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputHour, setInputHour] = useState("");
  const [isValidated, setIsValidated] = useState(false);

  const statesProps = {
    // inputs em edição
    formDestination,
    setFormDestination,
    formActivity,
    setFormActivity,
    formDate,
    setFormDate,
    formHour,
    setFormHour,

    // valores salvos
    inputDestination,
    setInputDestination,
    inputActivity,
    setInputActivity,
    inputDate,
    setInputDate,
    inputHour,
    setInputHour,

    isValidated,
    setIsValidated,
  };

  return (
    <div>
      <button
        onClick={() => setIsShowForm(false)}
        className="group fixed isolate mt-2 ml-2 flex cursor-pointer items-center justify-center overflow-hidden rounded-full before:absolute before:inset-0 before:translate-x-full before:bg-[#FFA53B] before:transition-transform before:duration-500 before:ease-in-out hover:before:translate-x-0"
      >
        <svg
          fill="#FFFFFF"
          className="h-8 w-8 rotate-270 justify-end rounded-full p-2 duration-300 ease-linear"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" />
        </svg>
      </button>

      <div className="flex h-screen items-center justify-center">
        <div className="flex rounded-3xl bg-[#1C262F]/60 shadow-[0_4px_10px_rgba(0,0,0,0.25)] shadow-[#000000]">
          <ContentLeft statesProps={statesProps} />

          <ContentRight statesProps={statesProps} />
        </div>
      </div>
    </div>
  );
};
