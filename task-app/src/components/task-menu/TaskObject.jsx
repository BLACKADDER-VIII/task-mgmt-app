

export default function TaskObject({task, taskDoneHandler}){

    return (
        <div className="task-object">
            <button onClick={()=>taskDoneHandler(task)}></button>
            <label>{task.title}</label> <label>{task.priority? "High": "Normal"}</label>
            <label>{task.dueDate}</label>
        </div>
    );
}