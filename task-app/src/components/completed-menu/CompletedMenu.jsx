import { useEffect, useState } from "react";
import "./CompletedMenu.css";
import CompletedTaskObject from "./CompletedTaskObject";


export default function CompletedMenu({currProj, completedTaskMap, setJustCompleted}){

    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(
        ()=>{
            if (currProj.title != 'All'){
                setCompletedTasks(completedTaskMap.get(currProj.title));
            }
            else{
                const task_array = [];
                for (const [k, cl] of completedTaskMap){
                    for (const t of cl){
                        task_array.push(t);
                    }
                }
                setCompletedTasks(task_array);
            }
            setJustCompleted(false);
        }, [currProj, completedTaskMap.get(currProj.title).length]
    );

    return (
        <div className="completed-menu">
            <div className="completed-menu-header">
                <label>Completed</label>
                <button className="header-icon-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="6" y1="12" x2="18" y2="12"/>
                        <line x1="9" y1="18" x2="15" y2="18"/>
                    </svg>
                </button>
            </div>
            <div className="completed-menu-content">
                {completedTasks.map((t)=><div key={t.title}><CompletedTaskObject task={t}/></div>)}
            </div>
        </div>
    );
}