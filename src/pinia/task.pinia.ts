import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: () => ({
    createTaskDialog: false,
  }),
});
