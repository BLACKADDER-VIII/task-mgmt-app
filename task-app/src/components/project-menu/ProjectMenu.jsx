import { useState, useRef, useEffect } from "react";
import Project from "../../class-objects/project";
import ProjectTile from "./ProjectTile";
import './ProjectMenu.css';

function NewProjectTile({ref, setProj, blurHandler}){
    useEffect(
        ()=>{ref.current.focus()}, []
    );
    return (
        <div className="new-project-tile">
            <input ref={ref} defaultValue='untitled' onChange={(e)=>setProj(e.target.value)} onFocus={(e)=>e.target.select()} onBlur={(e)=>blurHandler(e.target.value)}/>
        </div>
    );
}

export default function ProjectMenu({projectList, setProjectList, setCurrProject, completedTaskMap}){

    const [currNewProj, setCurrNewProj] = useState('untitled');
    const [addingProj, setAddingProj] = useState(false);

    const inputRef = useRef(null);

    const addProjectHandler = ()=>{
        setAddingProj(true);
    }

    const resetAddProj = ()=>{
        setAddingProj(false);
        setCurrNewProj("untitled");
    }

    const blurHandler = (projTitle)=>{
        if (projTitle==''){
            resetAddProj();
            return;
        }
        for (let i = 0; i<projectList.length; i++){
            if (projTitle == projectList[i].title){
                inputRef.current.focus();
                return;
            }
        }
        const newProject = new Project(projTitle, []);
        const updatedProjectList = [...projectList, newProject];
        completedTaskMap.set(projTitle, []);
        setProjectList( updatedProjectList);
        setCurrProject(newProject);
        resetAddProj();
    }


    return (
        <div className="project-menu">
            <div className="project-menu-header">
                <label className="project-menu-header-label">Projects</label>
                <button className="project-menu-header-filters">Filters logo</button>
            </div>

            <div className="project-menu-content">
                {projectList.map((e)=>{return <div key={e.title}> <ProjectTile project={e} setCurrProject={setCurrProject}/></div>  })}
                {addingProj? <NewProjectTile ref={inputRef} setProj={setCurrNewProj} blurHandler={blurHandler}/>:<button className="project-add-new-btn" onClick={addProjectHandler}>Add New Project btn</button>}
            </div>
        </div>
    );
}

