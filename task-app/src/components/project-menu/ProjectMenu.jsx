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

export default function ProjectMenu({projectList, setProjectList}){

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
        setProjectList([...projectList, new Project(projTitle, [])]);
        resetAddProj();
    }


    return (
        <div className="project-menu">
            <div className="project-menu-header">
                <label className="project-menu-header-label">Projects</label>
                <button className="project-menu-header-filters">Filters logo</button>
            </div>

            <div className="project-menu-content">
                {projectList.map((e, i)=>{return <div key={i}> <ProjectTile project={e}/></div>  })}
                {addingProj? <NewProjectTile ref={inputRef} setProj={setCurrNewProj} blurHandler={blurHandler}/>:<button className="project-add-new-btn" onClick={addProjectHandler}>Add New Project btn</button>}
            </div>
        </div>
    );
}

