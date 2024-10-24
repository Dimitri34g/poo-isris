import { TaskType } from "./TaskType";

export class Task {
    private name :string;
    private person :string;
    private type : TaskType;

    constructor (name :string ,person : string , type : TaskType){
        this.name=name
        this.person = person
        this.type=type
    }

public display():string{
    return `${this.name}:\naffected to:${this.person}\ntype:${TaskType[this.type]}`
}

}