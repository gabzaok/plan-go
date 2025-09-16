import { useState } from "react";
import { Home } from "./Pages/home";
import { Form } from "./Components/Form";

export const App = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div
      style={{ backgroundImage: "url('/background.jpg')" }}
      className="h-screen bg-cover bg-center"
    >
      {isShowForm ? (
        <Form setIsShowForm={setIsShowForm} />
      ) : (
        <Home setIsShowForm={setIsShowForm} />
      )}
    </div>
  );
};
