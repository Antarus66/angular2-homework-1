export class Todo {
    constructor(title, done = false) {
        let now = new Date();
        this.id = 'id' + now.getTime();
        this.title = title;
        this.done = done;
    }
}