import React from 'react';
import './App.css';
import Form from './Form.js'

const Todo = (props) => {
  return (
    <div style={{textDecoration: props.todo.completato ? 'line-through' : ''}} className='todo'>
{props.todo.name}
    <div>
      <button onClick={() => props.completaTodo(props.index)}>completa</button>
    </div>
    </div>
  )
}



class App extends React.Component {
  state = {
    todos: [
      {name: 'Imparare React', completato: true},
      {name: 'Imparare React', completato: false},
      {name: 'Imparare React', completato: true},
    ]
  }

  addTodo = (todo) => {
    const newTodos = [...this.state.todos, {name:todo}] 
    this.setState({
      todos: newTodos
    })
  }

  completaTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].completato = true;
    this.setState({
      todos: newTodos
    })
    
  }
  render() {
    return (
        <div className='app'>
          <div className='todo-list'>
          {this.state.todos.map((item, index) => <Todo key={index} todo={item} index={index} completaTodo={this.completaTodo} />)}
          <Form submit={this.addTodo}/>
          </div>
        </div>
    );
  }
}


export default App;