

export default function TaskObject({task}){

    return (
        <div className="task-object">
            <button></button>
            <label>{task.title}</label> <label>{task.priority? "High": "Normal"}</label>
            <label>{task.dueDate}</label>
        </div>
    );
}