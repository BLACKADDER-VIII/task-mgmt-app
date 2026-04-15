import './ProjectTile.css';


export default function ProjectTile({project}){

    return (
        <div className='project-tile'>
            {project.title}
            <button>...settingsbtn</button>
        </div>
    );
}