import { ITask } from "../task.interface.ts";

export interface ITaskState {
  tasks: ITask[];
  createTaskDialog: boolean;
  taskDetailsDialog: boolean;
}
