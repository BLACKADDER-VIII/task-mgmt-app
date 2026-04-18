export default class Project{
    constructor(title, taskList, description=null){      // Description only for later LLM integration
        this._title = title;
        this._taskList = taskList;
        this._description = description;
    }

    set taskList(newTaskList){
        this._taskList = newTaskList;
    }

    set description(newDescription){
        this._description = newDescription;
    }

    set title(newTitle){
        this._title = newTitle;
    }

    get taskList(){
        return this._taskList;
    }

    get title(){
        return this._title;
    }
}