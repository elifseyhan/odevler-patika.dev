import React, { Component } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: []
    };
  }

//TodoItem silmek için yazılan onClick fonksiyon
deleteItem = (id) => {
  let newTodos = this.state.todos.filter(
    todo => {
      return todo.id !== id;
    }
  )
  this.setState({todos: newTodos});
}

//TodoItem yapıldı/yapılmadı
checkItem = (id) => {
  const newTodos = this.state.todos.map(todo => {
    if (id === todo.id){
      let newTodo = {...todo};
      newTodo.checked = !newTodo.checked;
      return newTodo;
    }else{
      return todo;
    }
  });
  this.setState({todos: newTodos});
}

  // Eğer input alanı boş değilse todos'a ekleye
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(),
        content: currentValue,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList
            todos={this.state.todos}
            deleteItem={this.deleteItem}
            checkItem={this.checkItem}
            />
          </div>
        )}
      </div>
    );
  }
}





export default App;
