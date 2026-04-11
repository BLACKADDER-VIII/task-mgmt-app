import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './styles/App.css';
import TaskTile from './TaskTile'
import AddTaskPopup from './AddTaskPopup';

function App(){
  const [searchItem, setSearchItem] = useState('');
  const [closePop, setClosePop] = useState(1);
  const [tasks, setTasks] = useState([]);   // FIXME!!! Load tasks from DB in the beginning

  const addTaskHandler = ()=>{
    setClosePop(0);
  }

  // UI
  return (
    <div className='bedrock'>
      <div className='header-bar'>
        <label><h1>TaskFlow</h1></label>
        <input placeholder='Enter search item' onChange={(e)=>setSearchItem(e.target.value)}/>
      </div>
      <div className='action-bar'>
        <button>List View</button>
        <button>Kanban</button>
        <button>Calendar</button>
        <button>Filters</button>
      </div>
      <TaskTile tasks={tasks}/>
      <button className='fab-add-task' onClick={addTaskHandler}>+ Add Task</button>
      <AddTaskPopup taskArray={tasks} setTaskArray={setTasks} closePopup={closePop} setClosePopup={setClosePop}/>
    </div>
  );
}

export default App;