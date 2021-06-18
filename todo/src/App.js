import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

const [newTask, setNewTask] = useState('');


 function addtask(){
   alert(newTask);
 }


  return (
    <div className="App">
      <h1>React ToDo List</h1>

      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <input type='text' placeholder='taskname' className='form-control' 
          value={newTask} onChange={(e) => {setNewTask(e.target.value)}}
          />
        </div>
        <button onClick={addtask} className='btn btn-success col-md-1'>ADD TASK</button>
      </div>
    </div>
  );
}

export default App;
