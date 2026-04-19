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

export default function ProjectMenu({projectList, setProjectList, setCurrProject, currProject, completedTaskMap}){

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
                <button className="header-icon-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="6" y1="12" x2="18" y2="12"/>
                        <line x1="9" y1="18" x2="15" y2="18"/>
                    </svg>
                </button>
            </div>

            <div className="project-menu-content">
                {projectList.map((e)=>{return <div key={e.title}> <ProjectTile project={e} setCurrProject={setCurrProject} isSelected={currProject.title === e.title}/></div>  })}
                {addingProj? <NewProjectTile ref={inputRef} setProj={setCurrNewProj} blurHandler={blurHandler}/>:<button className="project-add-new-btn" onClick={addProjectHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                </button>}
            </div>
        </div>
    );
}

