import './TaskMenu.css';
import Task from '../../class-objects/task.js';
import { useEffect, useState } from 'react';
import TaskObject from './TaskObject.jsx';


function EmptyNewTask({addTaskHandler}){

    const [currTask, setCurrTask] = useState('');
    const [priority, setPriority] = useState(false);    // 0 for normal, 1 for high
    const [dueDate, setDueDate] = useState(null);

    const reset = ()=>{
        setCurrTask('');
        setPriority(false);
        setDueDate(null);
    }

    return (
        <div>
            <button onClick={()=>{addTaskHandler(currTask, priority, dueDate); reset();}}>+</button>
            <input value={currTask} onChange={(e)=>{setCurrTask(e.target.value)}}/>
            <button>set duedate button</button>
            <button onClick={()=>setPriority(!priority)}>set isHigh priority button</button>
        </div>
    );
}


export default function TaskMenu({project}){
    const [tasks, setTasks] = useState([]);

    useEffect(
        ()=>{
            setTasks(project.taskList);
        }, [project]
    );

    const addTaskHandler = (task, priority, dueDate)=>{
        const newTasks = [...tasks, new Task(task, priority, dueDate)];
        setTasks(newTasks);
        project.taskList = newTasks;
    }

    return (
        <div className='task-menu'>
            <div className='task-menu-header'>
                <label>Pending</label>
                <button>Filter-optionsbtn</button>
            </div>
            <div className='task-menu-content'>
                {tasks.map((t)=>{return <div key={t.title}><TaskObject task={t}/></div>})}
                <EmptyNewTask addTaskHandler={addTaskHandler}/>
            </div>
        </div>
    );
}