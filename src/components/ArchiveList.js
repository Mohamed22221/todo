import React from "react";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
const ArchiveList = ({ listArchive, handelUnarchive }) => {
  return (
    <div className="main-card">
      <h1>list archived</h1>
      {listArchive.map((item) => {
        console.log(item.id , "idididid")
        return (
          <div className="todo-item" key={item.id}>
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
              <UnarchiveIcon onClick={() => handelUnarchive(item)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArchiveList;
