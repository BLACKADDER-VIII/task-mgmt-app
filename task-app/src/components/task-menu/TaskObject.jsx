import './TaskObject.css';

export default function TaskObject({task, taskDoneHandler}){

    return (
        <div className="task-object">
            <button className="task-check-btn" onClick={()=>taskDoneHandler(task)}></button>
            <div className="task-body">
                <label className="task-title">{task.title}</label>
                {task.dueDate && <label className="task-due-date">{task.dueDate}</label>}
            </div>
            <label className={`task-priority${task.priority ? ' task-priority--high' : ''}`}>{task.priority ? "High" : "Normal"}</label>
        </div>
    );
}