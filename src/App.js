
import "./App.css";
import FormTodo from "./components/FormTodo";
import { useState } from "react";
import ShowTodo from "./components/ShowTodo";
import Weather from "./components/Weather";

function App() {
  const startData = {
    title: "",
    description: "",
    cheacked : false
  };

  const [values, setValues] = useState(startData);
  const [todo, setTodo] = useState([]);
  const [toggleForm, setToggleForm] = useState(true);
  const [detailsTodo, setDetailsItem] = useState({});

  const handleEdit = (item) => {
    setToggleForm(false);
    setDetailsItem(item);
    setValues({
      title: item.todoValue.title,
      description: item.todoValue.description,
    });
  };

  return (
    <div className="App">
      <Weather />
      <h1>Todo App</h1>
      <FormTodo
        setValues={setValues}
        setTodo={setTodo}
        values={values}
        todo={todo}
        detailsTodo={detailsTodo}
        toggleForm={toggleForm}
        setToggleForm={setToggleForm}
      />
      <ShowTodo
        todo={todo}
        values={values}
        setTodo={setTodo}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
