
import "./App.css";
import FormTodo from "./components/FormTodo";
import { useMemo, useState } from "react";
import ShowTodo from "./components/ShowTodo";
import Weather from "./components/Weather";

function App() {
  const startData = {
    title: "",
    description: "",
  };
  // edit one todo
  const [values, setValues] = useState(startData);
  const [todo, setTodo] = useState([]);
  const [toggleForm, setToggleForm] = useState(true);
  const [detailsTodo, setDetailsItem] = useState({});
  // edit one todo
  const handleEdit = (item) => {
    setToggleForm(false);
    setDetailsItem(item);
    setValues({
      title: item.todoValue.title,
      description: item.todoValue.description,
    });
  };
  const WeatherMemo = useMemo(() =>  <Weather /> , [] )
  return (
    <div className="App">
      {WeatherMemo}
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
        setTodo={setTodo}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
