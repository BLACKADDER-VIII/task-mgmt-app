export default class Task{
    constructor(title, priority, dueDate, project){
        this._title = title;
        this._priority = priority;   // Normal or High (tasks due today or past due auto pushed to high priority; Can be changed in settings)
        this._dueDate = dueDate;     // Optional due date; if no due date then indefinite
        this._project = project;     // Can't change project once fixed
    }

    set title(newTitle){
        this._title = newTitle;
    }

    set priority(newPriority){
        this._priority = newPriority;
    }

    set dueDate(newDueDate){
        this._dueDate = newDueDate;
    }

    set project(newProject){
        this._project = newProject;
    }

    get title(){
        return this._title;
    }

    get priority(){
        return this._priority;
    }

    get dueDate(){
        return this._dueDate;
    }

    get project(){
        return this._project;
    }
}