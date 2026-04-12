import './PriorityTile.css';
import TaskObject from './TaskObject';


export default function PriorityTile({taskList, priorityTitle}){
    

    return (
        <div className='priority-tasks'>
            <label>{priorityTitle}</label>
            <div className='task-list-content'>
                <div className='priority-task-entry'>{taskList.map((x, i)=>{return<TaskObject taskObject={x} key={i}/>})}</div>
            </div>
        </div>
    );
}