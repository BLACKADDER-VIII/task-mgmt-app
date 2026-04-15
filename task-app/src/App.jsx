import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './styles/App.css';
import Project from './class-objects/project';

import ProjectMenu from './components/project-menu/ProjectMenu';

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
      <ProjectMenu projectList={projects} setProjectList={setProjects}/>
    </div>
  );
}

export default App;