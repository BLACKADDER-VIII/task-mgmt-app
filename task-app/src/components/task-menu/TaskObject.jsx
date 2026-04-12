import './TaskObject.css'

export default function TaskObject({taskObject}){
    return (
        <div className="task-object">
            <button className="done-btn"></button>
            <div className="task-info-tab">
                <label>{taskObject.title}</label>
                <label>{taskObject.dueDate}</label>
            </div>
        </div>
    );
}