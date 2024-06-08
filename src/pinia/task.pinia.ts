import { defineStore } from "pinia";
import { ITaskState } from "../ts/interfaces/pinia/task.interface.ts";

export const useTaskStore = defineStore("task", {
  state: (): ITaskState => ({
    createTaskDialog: false,
    taskDetailsDialog: false,
  }),
});
