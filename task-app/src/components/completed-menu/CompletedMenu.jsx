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
                <button>Filter-sort-options-btn</button>
            </div>
            <div className="completed-menu-content">
                {completedTasks.map((t)=><div key={t.title}><CompletedTaskObject task={t}/></div>)}
            </div>
        </div>
    );
}