import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

const ShowTodo = ({ todo, setTodo, handleEdit }) => {
  // Delete from list
  const handleDelete = (id) => {
    const filtered = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(filtered);
  };

  // Add/Remove checked item from list
  const [checked, setChecked] = useState([]);
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "todo-item";

  return (
    <div className="main-card">
      {todo.map((item) => {
        return (
          <div className={`${isChecked(item.todoValue.title)}  `}>
            <div>
              <input
                value={item.todoValue.title}
                type="checkbox"
                onChange={handleCheck}
              />
            </div>
            <div>
              <h4>Title</h4>
              <span>{item.todoValue.title}</span>
            </div>
            <div>
              <h4>description</h4>
              <span>{item.todoValue.description}</span>
            </div>
            <div>
              <h4>created At</h4>
              <span>{item.create_at}</span>
            </div>
            <div>
              <DeleteOutlineIcon onClick={() => handleDelete(item.id)} />
              <EditIcon onClick={() => handleEdit(item)} />
            </div>
          </div>
        );
      })}
      <p>{`Items checked are: ${checked.length}`}</p>
    </div>
  );
};

export default ShowTodo;
