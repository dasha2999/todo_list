import React, { useState } from 'react';
import Header from './components/header/Header';
import AddTodo from './components/addTodo/AddTodo';
import TodoList from './components/todoList/TodoList';
import { Container } from 'react-bootstrap';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'First todo',
      status: true
    },

    {
      id: 2,
      title: 'Second todo',
      status: true
    },

    {
      id: 3,
      title: 'Third todo',
      status: false
    },
  ])

  console.log(todo)
  return (
    <Container>
      <Header/>
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
