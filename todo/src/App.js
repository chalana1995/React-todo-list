import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addtask() {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    var duplicateArray = [...tasks];
    duplicateArray.splice(index, 1);
    setTasks(duplicateArray);
  }

  const taskList = tasks.map((object, index) => {
    return (
      <div className='row justify-content-center'>
        <h1 className='col-md-6 text-left'>{index + 1}. {object}</h1>
        <button onClick={() => { deleteTask(index) }} className='btn btn-danger col-md-1 m-1'>DELETE</button>
      </div>

    )
  })


  return (
    <div className="App">
      <h1>React ToDo List</h1>

      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <input type='text' placeholder='taskname' className='form-control'
            value={newTask} onChange={(e) => { setNewTask(e.target.value) }}
          />
        </div>
        <button onClick={addtask} className='btn btn-success col-md-1'>ADD TASK</button>
      </div>

      {taskList}
    </div>
  );
}

export default App;
