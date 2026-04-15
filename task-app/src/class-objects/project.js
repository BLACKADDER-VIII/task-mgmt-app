export default class Project{
    constructor(title, taskList, description=null){      // Description only for later LLM integration
        this.title = title;
        this.taskList = taskList;
        this.description = description;
    }
}