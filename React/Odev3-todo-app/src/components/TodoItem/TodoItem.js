import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, deleteItem, checkItem, checked } = props;
  let item = "";
  checked && (item = "checked")
  return (
    <div className="d-flex justify-content-between align-items-center" onClick={() => checkItem(id)}>
      <span className={item}>{content}</span>
      <button onClick={(e) => {
        e.stopPropagation();
        deleteItem(id)}}
        className="btn btn-danger">
        Sil
      </button>
    </div>
  )
  ;
}

export default Todo;
