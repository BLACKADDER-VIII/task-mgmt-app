import './ProjectTile.css';


export default function ProjectTile({project, setCurrProject}){

    return (
        <div className='project-tile' onClick={()=>{setCurrProject(project)}}>
            {project.title}
            <button>...settingsbtn</button>
        </div>
    );
}