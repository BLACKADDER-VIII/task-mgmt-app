import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './styles/App.css';
import Project from './class-objects/project';

import ProjectMenu from './components/project-menu/ProjectMenu';
import TaskMenu from './components/task-menu/TaskMenu';

function App(){
  const [projects, setProjects] = useState([new Project("All", [], "Global collection of all tasks"), new Project("Dummy", [])])
  const [currProject, setCurrProject] = useState(projects.find((p)=>p.title=='All'));


  // UI
  return (
    <div className = 'bedrock'>
      <ProjectMenu projectList={projects} setProjectList={setProjects} setCurrProject={setCurrProject}/>
      <TaskMenu project={currProject}/>
    </div>
  );
}

export default App;