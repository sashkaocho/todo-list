import { defineStore } from "pinia";
import { ITaskState } from "../ts/interfaces/pinia/task.interface.ts";
import { ETaskActions, ETaskGetters } from "../ts/enums/pinia/task.enum.ts";
import { ITask } from "../ts/interfaces/task.interface.ts";

export const useTaskStore = defineStore("task", {
  state: (): ITaskState => ({
    tasks: [],
    createTaskDialog: false,
    taskDetailsDialog: false,
  }),
  actions: {
    [ETaskActions.SetTasks](products: ITask[]): void {
      this.tasks = products;
    },
  },
  getters: {
    [ETaskGetters.GetTasks]: (state: ITaskState): ITaskState["tasks"] => {
      return state.tasks;
    },
  },
});
