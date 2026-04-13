import './ProjectMenu.css';

export default function ProjectMenu({projects, currProject, setCurrProject}){

    const projExtendBtnHandler = (p)=>{
        setCurrProject(p.title);
    };

    return (
        <div className='task-lookup-tile'>
            Task lookup tile
            <div className='action-bar'>
                <button>Toggle List/Grid</button>
                <button>Kanban</button>
                <button>Calendar</button>
                <button>Filters</button>
            </div>
            <div className="proj-menu">
                {projects.map((p, i)=>{return <button onClick={()=>projExtendBtnHandler(p)} key={i} className={(p.title==currProject)? "project-tile-selected": "project-tile"}>{p.title}</button>})}
            </div>
        </div>
    );
}