export class Todo {
    constructor(
        title,
        done = false,
        description = null
    ) {
        this.id = Math.random() * 100000;
        this.title = title;
        this.done = done;
        this.description = description;
    }
}