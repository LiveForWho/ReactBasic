import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "1", title: "Doing homework" },
      { id: "2", title: "Play Game" },
      { id: "3", title: "Sleep" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };

  handleDelete = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Delete success");
  };

  handleEdit = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodos];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

      listTodoCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodoCopy,
        editTodo: {},
      });
      toast.success("Update success");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEditTodo = (event) => {
    let copyEditTodo = { ...this.state.editTodo };
    copyEditTodo.title = event.target.value;
    this.setState({
      editTodo: copyEditTodo,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check empty obj: ", isEmptyObj);
    return (
      <>
        <p>TODO App with React.js (DoHuynhTai).</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1}-
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="btn-edit"
                      onClick={() => this.handleEdit(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => this.handleDelete(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
