import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './styles/App.css';
import AddTaskPopup from './AddTaskPopup';
import PendingTasks from './components/task-menu/PendingTasks';
import ProjectMenu from './components/project-menu/ProjectMenu';
import Project from './class-objects/project';

function App(){
  const [searchItem, setSearchItem] = useState('');
  const [closePop, setClosePop] = useState(1);
  const [tasks, setTasks] = useState([]);   // FIXME!!! Load tasks from DB in the beginning
  const [projects, setProjects] = useState([new Project("All", [], "Global collection of all tasks"), new Project("Dummy", [])])
  const [currProject, setCurrProject] = useState('All');
  const addTaskHandler = ()=>{
    setClosePop(0);
  }

  // UI
  return (
    <div className = 'bedrock'>
      <div className = 'header-bar'>
        <label><h1>TaskFlow</h1></label>
        <input placeholder='Enter search item' onChange={(e)=>setSearchItem(e.target.value)}/>
      </div>

      <div className='task-row'>
        
        <ProjectMenu projects={projects} currProject={currProject} setCurrProject={setCurrProject}/>
        <PendingTasks tasks={tasks}/>
      </div>
      <button className='fab-add-task' onClick={addTaskHandler}>+ Add Task</button>
      <AddTaskPopup taskArray={tasks} setTaskArray={setTasks} closePopup={closePop} setClosePopup={setClosePop}/>
    </div>
  );
}

export default App;