export const useForms = (statesProps) => {
  const handleInputChange = (inputEvent, inputId) => {
    const value = inputEvent.target.value;

    if (inputId === "inputDestination") {
      statesProps.setFormDestination(value);
    }
    if (inputId === "inputActivity") {
      statesProps.setFormActivity(value);
    }
    if (inputId === "inputDate") {
      statesProps.setFormDate(value);
    }
    if (inputId === "inputHour") {
      statesProps.setFormHour(value);
    }
  };

  const saveActivities = (e) => {
    e.preventDefault();

    if (statesProps.formDestination.trim().length === 0) {
      alert("Por favor, insira um destino.");
      return;
    }
    if (statesProps.formActivity.trim().length === 0) {
      alert("Por favor, insira uma atividade.");
      return;
    }

    // salvar valores
    statesProps.setInputDestination(statesProps.formDestination);
    statesProps.setInputActivity(statesProps.formActivity);
    statesProps.setInputDate(statesProps.formDate);
    statesProps.setInputHour(statesProps.formHour);
    statesProps.setIsValidated(true);

    // limpar apenas os inputs (forms)
    statesProps.setFormDestination("");
    statesProps.setFormActivity("");
    statesProps.setFormDate("");
    statesProps.setFormHour("");
  };

  return { handleInputChange, saveActivities };
};
