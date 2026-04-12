import { useEffect, useState } from 'react';
import './PendingTasks.css';
import PriorityTile from './PriorityTile';

export default function PendingTasks({tasks}){
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
        <div className='task-bedrock'>
            <div className='task-header'>
                <label>My Tasks ({tasks.length})</label>
            </div>
            <div className='task-display'>
                <div className='pending-task-display-board'>
                    <PriorityTile taskList={highList} priorityTitle={"High Priority"}/>
                    <PriorityTile taskList={medList} priorityTitle={"Medium Priority"}/>
                    <PriorityTile taskList={lowList} priorityTitle={"Low Priority"}/>
                </div>
                <div className='completed-task-display-board'>
                    <label>Completed Today</label>
                </div>
            </div>
        </div>
    );
}