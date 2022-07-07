//Tutorial to do list following Dev Ed's React video on Youtube
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList';

function App() {
  //State for form input. value of the initial state is '' for null. Anywhere {inputText} is written will display the updated data
  const [inputText, setInputText] = useState('')
  //State for Todos created. state value is set as an empty array because it awaits data to push
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <h1>React To Do List </h1>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <ToDoList />
    </div>
  );
}

export default App;
//Form setInputText prop has a value of the updated inputText