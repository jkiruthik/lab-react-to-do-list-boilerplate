import React from "react";
import TodoItem from "./Component/Todoitem";
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input : "",
      todoList : [],
    }
  }

  inputChange =(e)=>{
    // console.log("e",e)
    this.setState({
      input : e.target.value,
    })
  }


  formSubmit = (e)=>{
    e.preventDefault();
    if(this.state.input.length > 0 ){
      this.setState({
        input : "",
        todoList : [...this.state.todoList,  this.state.input]
      })
    }
    console.log("tasks", this.state.todoList)
  }

  updateItem = (newitem, index) =>{
    let data = this.state.todoList;
    data.splice(index, 1, newitem)
    this.setState({
      todoList : data,
    })
  }

  deleteItem =(index) =>{
    let data = this.state.todoList;
    data.splice(index, 1);
    this.setState({
      todoList : data,
    })
  }


  render(){
    return (
      <>
        <div>
          <form onSubmit={this.formSubmit}>
            <input type="text" placeholder="enter the task"
             value={this.state.input}
             onChange={this.inputChange} />
            <button>Add Item</button>
          </form>
          <h3>My tasks : {this.state.input}</h3>
          <div>
            <h2>My todo list</h2>
            {
              this.state.todoList.length == 0 ? (
                <>
                <h3>there is no task to be done</h3>
                </>
              ) : (
                this.state.todoList.map((ele, i)=>{
                  return (
                    <>
                    <div>
                      <TodoItem 
                        e = {ele}
                        index = {i}
                        updateItem = {this.updateItem}
                        deleteItem = {this.deleteItem}
                      />
                    </div>
                    </>
                  )
                })

              )
            }
          </div>

        </div>
      </>
    )
  }
}
export default App;