import { useEffect, useState } from 'react';
import './styles/TaskTile.css';

export default function TaskTile({tasks}){
    const [highList, setHighList] = useState([]);
    const [medList, setMedList] = useState([]);
    const [lowList, setLowList] = useState([]);
    useEffect(
        ()=>{
            // Setting priority tasks
            setHighList(tasks.filter((x)=>x.priority=='high'));
            setMedList(tasks.filter((x)=>x.priority=='medium'));
            setLowList(tasks.filter((x)=>x.priority=='low'));
        },[tasks]
    );
    return (
        <div className='task-canvas'>
            <div className='task-info'>
                <label>My Tasks ({tasks.length})</label>
                <button>Projects</button>
            </div>
            <div className='task-display'>
                <div className='pending-tasks-preview'>
                    <div className='high-priority-tasks'>
                        <label>High Priority</label>
                        <ul>{highList.map((x, i)=>{return <div className='task-obj' key={i}><li >{x.title}</li> <label className='due-date'>{x.dueDate}</label></div>})}</ul>
                    </div>
                    <div className='medium-priority-tasks'>
                        <label>Medium Priority</label>
                        <ul>{medList.map((x, i)=>{return <div className='task-obj' key={i}><li >{x.title}</li> <label className='due-date'>{x.dueDate}</label></div>})}</ul>
                    </div>
                    <div className='low-priority-tasks'>
                        <label>Low Priority</label>
                        <ul>{lowList.map((x, i)=>{return <div className='task-obj' key={i}><li >{x.title}</li> <label className='due-date'>{x.dueDate}</label></div>})}</ul>
                    </div>
                </div>
                <div className='completed-today'>
                    <label>Completed Today</label>
                </div>
            </div>
        </div>
    );
}