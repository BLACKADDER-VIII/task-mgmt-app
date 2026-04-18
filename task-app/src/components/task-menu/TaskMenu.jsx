import './TaskMenu.css';
import Task from '../../class-objects/task.js';
import { useEffect, useState } from 'react';


export default function TaskMenu({project}){
    const [tasks, setTasks] = useState(project.taskList);

    useEffect(
        ()=>{project.setTasks(tasks)},
        [tasks]
    );

    return (
        <div className='task-menu'>
            
        </div>
    );
}