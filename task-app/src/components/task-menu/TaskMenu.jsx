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


export default function TaskMenu({project, projectList, completedTaskMap, setJustCompleted}){
    const [tasks, setTasks] = useState([]);

    useEffect(
        ()=>{
            if (project.title == 'All'){
                const new_tasks = [];
                for (const p of projectList){
                    for (const t of p.taskList){
                        new_tasks.push(t);
                    }
                }
                setTasks(new_tasks);
            }
            else
                setTasks(project.taskList);
        }, [project]
    );

    const addTaskHandler = (task, priority, dueDate)=>{
        const newTasks = [...tasks, new Task(task, priority, dueDate, project.title)];
        setTasks(newTasks);
        project.taskList = newTasks;
    }

    const taskDoneHandler = (task)=>{
        if (project.title == 'All'){
            for (const p of projectList){
                if (p.title == task.project){
                    p.taskList = p.taskList.filter((tk)=>tk.title != task.title);
                    completedTaskMap.get(p.title).push(task);
                    break;
                }
            }
        }
        else{
            project.taskList = project.taskList.filter((tk)=>tk.title != task.title);
            completedTaskMap.get(project.title).push(task);
        }
        setTasks(tasks.filter((t)=>t.title != task.title));
        setJustCompleted(true);
    }

    return (
        <div className='task-menu'>
            <div className='task-menu-header'>
                <label>Pending</label>
                <button>Filter-optionsbtn</button>
            </div>
            <div className='task-menu-content'>
                {tasks.map((t)=>{return <div key={t.title}><TaskObject task={t} taskDoneHandler={taskDoneHandler}/></div>})}
                <EmptyNewTask addTaskHandler={addTaskHandler}/>
            </div>
        </div>
    );
}