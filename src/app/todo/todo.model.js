export class Todo {
    constructor({
        title,
        done = false,
        description = null,
        id = null
    }) {
        this.id = id || Math.random() * 100000;
        this.title = title;
        this.done = done;
        this.description = description;
    }
}