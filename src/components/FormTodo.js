import React from "react";

const FormTodo = ({
  setValues,
  values,
  setTodo,
  todo,
  detailsTodo,
  toggleForm,
  setToggleForm,
}) => {
  // creating a ID for every todo
  const date = new Date();
  const time = date.getTime();
  let mydate = date.toLocaleString();

  // creating a todo object
  let todoObject = {
    id: time,
    todoValue: values,
    create_at: mydate,
  };
  const handelChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, todoObject]);
    setValues({
      title: "",
      description: "",
    });
  };

  // Edit a todo object
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const updatedTodos = [...todo].map((todo) => {
      if (todo.id === detailsTodo.id) {
        todo.todoValue = values;
      }
      return todo;
    });
    setTodo(updatedTodos);
    setToggleForm(true);
    setValues({
      title: "",
      description: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={toggleForm ? handleSubmit : handleSubmitEdit}>
        <div className="main-form">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handelChange}
            placeholder={
              toggleForm === false ? detailsTodo.todoValue.title : "Add Title"
            }
            required
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={handelChange}
            value={values.description}
            placeholder={
              toggleForm === false
                ? detailsTodo.todoValue.description
                : "Add Discription"
            }
            required
          />
          <div className="button">
            <button type="submit">{toggleForm ? "send" : "update"}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
