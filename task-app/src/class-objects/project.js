export default class Project{
    constructor(title, taskList, description=null){      // Description only for later LLM integration
        this.title = title;
        this.taskList = taskList;
        this.description = description;
    }

    set setTaskList(newTaskList){
        this.taskList = newTaskList;
    }

    set setDescription(newDescription){
        this.description = newDescription;
    }

    set setTitle(newTitle){
        this.title = newTitle;
    }
}