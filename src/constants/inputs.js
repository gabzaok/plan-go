export const INPUTS = [
  {
    defaultValue: "São Luís - MA",
    icon: "/add location.svg",
    placeholder: "Ex: São Luís - MA",
    type: "text",
    label: "Adicionar Destino",
    id: "inputDestination",
  },
  {
    icon: "/add actv.svg",
    defaultValue: "Visitar o Centro Histórico",
    placeholder: "Ex: Visitar o Centro Histórico",
    type: "text",
    label: "Adicionar Atividade",
    id: "inputActivity",
  },
  {
    defaultValue: new Date().toISOString().split("T")[0],
    icon: "/add date.svg",

    type: "date",
    label: "Adicionar Data",
    id: "inputDate",
  },
  {
    icon: "/add time.svg",
    defaultValue: "12:00",
    type: "time",
    label: "Adicionar Hora",
    id: "inputHour",
  },
];
