import { TaskType } from "./TaskType";
import { Task } from "./Task";
import { TodoList } from "./Todolist";

let task : Task = new Task("dodo","jayson",TaskType.SPORT)

console.log(task.display())

let todo : TodoList = new TodoList();

todo.add_task("dodo","jayson",TaskType.SPORT);
todo.add_task("dodo","jayson",TaskType.SPORT);
todo.add_task("dodo","jayson",TaskType.SPORT);
todo.add_task("dodo","jayson",TaskType.SPORT);

console.log(todo.display())
