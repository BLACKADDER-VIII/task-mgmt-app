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
        <div className='new-task'>
            <button className='new-task-add-btn' onClick={()=>{addTaskHandler(currTask, priority, dueDate); reset();}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
            </button>
            <input className='new-task-input' placeholder='New reminder…' value={currTask} onChange={(e)=>{setCurrTask(e.target.value)}}/>
            <label className={`new-task-date-btn${dueDate ? ' new-task-date-btn--active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <input className='new-task-date-input' type='date' value={dueDate ?? ''} onChange={(e)=>setDueDate(e.target.value || null)}/>
            </label>
            <button className={`new-task-priority-btn${priority ? ' new-task-priority-btn--active' : ''}`} onClick={()=>setPriority(!priority)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
            </button>
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
                <button className="header-icon-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="6" y1="12" x2="18" y2="12"/>
                        <line x1="9" y1="18" x2="15" y2="18"/>
                    </svg>
                </button>
            </div>
            <div className='task-menu-content'>
                {tasks.map((t)=>{return <div key={t.title}><TaskObject task={t} taskDoneHandler={taskDoneHandler}/></div>})}
                <EmptyNewTask addTaskHandler={addTaskHandler}/>
            </div>
        </div>
    );
}