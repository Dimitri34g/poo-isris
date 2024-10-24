import { GroceryType } from "./GroceryType";
import { Grocery } from "./Grocery";

export class GroceryList {
    private gros: Task[];

    constructor() {
        this.tasks = [];
    }

    public add_task(name: string, person: string, type: TaskType): void {
        this.tasks.push(new Task(name, person, type));
    }

    public display(): string {
        let res: string = "";

        if (this.tasks.length === 0) {
            return "No tasks in the list.";
        }

        for (let i = 0; i < this.tasks.length; i++) {
            res += `${i + 1}. ` + this.tasks[i].display() + "\n\n";
        }

        return res.trim();
    }

    public clear_all(): void {
        this.tasks = [];
    }

    public remove_task(index: number): boolean {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }
}
