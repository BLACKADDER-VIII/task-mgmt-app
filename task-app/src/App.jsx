import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './styles/App.css';
import Project from './class-objects/project';

import ProjectMenu from './components/project-menu/ProjectMenu';
import TaskMenu from './components/task-menu/TaskMenu';
import CompletedMenu from './components/completed-menu/CompletedMenu';

function App(){
  const [projects, setProjects] = useState([new Project("All", [], "Global collection of all tasks"), new Project("Dummy", [])]);
  const [currProject, setCurrProject] = useState(projects.find((p)=>p.title=='All'));
  const [completedTaskMap, setCompletedTaskMap] = useState(new Map([['All', []]]));
  const [justCompleted, setJustCompleted] = useState(false);


  useEffect(
    ()=>{
      // If adding a project
      for (const p of projects){
        if (completedTaskMap.has(p.title))
          continue;
        completedTaskMap.set(p.title, []);
      }
      // If a project has been deleted
      for (const [k, v] of completedTaskMap){
        let isIn = false;
        for (const p of projects){
          if (p.title == k){
            isIn = true;
            break;
          }
        }
        if (!isIn){
          completedTaskMap.delete(k);
        }
      }
    }, [projects.length]
  )
  // UI
  return (
    <div className = 'bedrock'>
      <ProjectMenu projectList={projects} setProjectList={setProjects} setCurrProject={setCurrProject} currProject={currProject} completedTaskMap={completedTaskMap}/>
      <TaskMenu project={currProject} projectList={projects} completedTaskMap={completedTaskMap} setJustCompleted={setJustCompleted}/>
      <CompletedMenu currProj={currProject} completedTaskMap={completedTaskMap} setJustCompleted={setJustCompleted}/>
    </div>
  );
}

export default App;