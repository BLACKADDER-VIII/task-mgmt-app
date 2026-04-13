export default class Project{
    constructor(title, projectList, description=null){      // Description only for later LLM integration
        this.title = title;
        this.projectList = projectList;
        this.description = description;
    }
}