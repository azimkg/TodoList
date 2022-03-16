import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  let [item, setItem] = useState(props.editTodo);

  function handleEditInput(e) {
    let newTask = { ...item };
    newTask.task = e.target.value;
    setItem(newTask);
  }
  function handleSave() {
    props.handleSaveTask(item);
  }
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal}>&times;</button>
        </div>
        <input
          onChange={handleEditInput}
          type="text"
          value={item.task}
          className="inp-edit"
        />
        <button onClick={handleSave}>save</button>
      </div>
    </div>
  );
};

export default EditModal;
