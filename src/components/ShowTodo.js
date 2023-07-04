import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from '@mui/icons-material/Archive';

const ShowTodo = ({ todo , checked , handleDelete, handleEdit , handleCheck , handelListArchive}) => {
  console.log(checked)
  // Return classes based on whether item is checked
  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "todo-item";

  return (
    <div className="main-card">
      {todo.map((item) => {
        console.log(isChecked(item.id))
        return (
          <div className={`${isChecked(item.id)} `} key={item.id}>
            <div>
              <input
                value={item.id}
                type="checkbox"
                onChange={handleCheck}
              />
            </div>
            <div>
              <h4>Title</h4>
              <span>{item.todoValue.title}</span>
            </div>
            <div>
              <h4>Description</h4>
              <span>{item.todoValue.description}</span>
            </div>
            <div>
              <h4>Created At</h4>
              <span>{item.create_at}</span>
            </div>
            <div>
              <DeleteOutlineIcon onClick={() => handleDelete(item)} />
              <EditIcon onClick={() => handleEdit(item)} />
              <ArchiveIcon onClick={() => handelListArchive(item)} />

            </div>
          </div>
        );
      })}
            <p>{`Items checked are: ${checked.length}`}</p>

    </div>
  );
};

export default ShowTodo;
