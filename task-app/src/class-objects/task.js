export default class Task{
    constructor(title, priority, dueDate, project){
        this.title = title;
        this.priority = priority;   // Normal or High (tasks due today or past due auto pushed to high priority; Can be changed in settings)
        this.dueDate = dueDate;     // Optional due date; if no due date then indefinite
        this.project = project;     // Can't change project once fixed
    }

    set setTitle(newTitle){
        this.title = newTitle;
    }

    set setPriority(newPriority){
        this.priority = newPriority;
    }

    set setDueDate(newDueDate){
        this.dueDate = newDueDate;
    }
}