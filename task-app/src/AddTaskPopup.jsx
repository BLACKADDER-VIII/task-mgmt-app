import { useEffect, useRef, useState } from "react";
import './AddTaskPopup.css';
import Project from "./class-objects/project";
import Task from './class-objects/task';


export default function AddTaskPopup({ taskArray, setTaskArray, closePopup, setClosePopup }){
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('high');
    const [dueDate, setDueDate] = useState('');

    if (closePopup==1)
        return null;

    const reset = ()=>{
        setTitle('');
        setPriority('');
        setDueDate('');
    }

    const addTaskHandler = ()=>{
        // Add conditions to check valid task
        if (!title || !priority || !dueDate){
            alert("Please fill all fields");
            return;
        }
        const curr_task = {
            title: title,
            priority: priority,
            dueDate: dueDate
        }
        setTaskArray([...taskArray, curr_task]);
        reset();
        setClosePopup(1);
    }

    const closeHandler = ()=>{
        reset();
        setClosePopup(1);
    }

    return (
        <div className='add-task-popup'>
            <div className="close-btn-div">
                <button onClick={closeHandler} className="close-btn">X</button>
            </div>
            <div className="fill-info-grid">
                <label>Task</label> <input placeholder="Enter task" onChange={(e)=>setTitle(e.target.value)}/>
                <label>Priority</label> <select className="priority-selector" onChange={(e)=>{setPriority(e.target.value)}}>
                        <option value='high'>High</option>
                        <option value='normal'>Normal</option>
                        <option value='low'>Low</option>
                    </select> 
                <label>Due Date</label> <input type='date' onChange={(e)=>setDueDate(e.target.value)}/>
            </div>
            <div className="add-btn-div">
                <button onClick={addTaskHandler} className="add-btn">Add</button>
            </div>  
        </div>
    );
}