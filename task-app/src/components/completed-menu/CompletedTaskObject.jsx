import './CompletedTaskObject.css';

export default function CompletedTaskObject({task}){

    return (
        <div className="completed-task-object">
            <div className="completed-check-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>
            <div className="completed-task-body">
                <label className="completed-task-title">{task.title}</label>
                {task.dueDate && <label className="completed-task-due-date">{task.dueDate}</label>}
            </div>
            <label className={`completed-task-priority${task.priority ? ' completed-task-priority--high' : ''}`}>{task.priority ? "High" : "Normal"}</label>
        </div>
    );
}