import "./App.css";
import FormTodo from "./components/FormTodo";
import { useMemo, useState } from "react";
import ShowTodo from "./components/ShowTodo";
import Weather from "./components/Weather";
import ArchiveList from "./components/ArchiveList";

function App() {
  const startData = {
    title: "",
    description: "",
  };
  
  const [values, setValues] = useState(startData);
  const [todo, setTodo] = useState([]);
  const [listArchive, setListArchive] = useState([]);
  const [toggleForm, setToggleForm] = useState(true);
  const [detailsTodo, setDetailsItem] = useState({});
  const [checked, setChecked] = useState([]);

  // edit one todo

  const handleEdit = (item) => {
    setToggleForm(false);
    setDetailsItem(item);
    setValues({
      title: item.todoValue.title,
      description: item.todoValue.description,
    });
  };

  // Delete from list

  const handleDelete = (id) => {
    const filtered = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(filtered);
    setChecked(filtered);
  };

  //handel cheacked 

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // handel list Archive

  const handelListArchive = (item) => {
    setListArchive((current) => [...current, item]);
    handleDelete(item.id);
  };
  // handel list urchive

  const handelUnarchive = (list) => {
    const filtered = listArchive.filter((item) => {
      return item.id !== list.id;
    });
    setListArchive(filtered);
    setTodo((current) => [...current, list]);
  };
  const WeatherMemo = useMemo(() => <Weather />, []);
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
        checked={checked}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handelListArchive={handelListArchive}
      />
      {listArchive.length >= 1 && (
        <ArchiveList
          listArchive={listArchive}
          handelUnarchive={handelUnarchive}
        />
      )}
    </div>
  );
}

export default App;
