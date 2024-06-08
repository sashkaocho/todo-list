<script lang="ts" setup>
import TaskContainer from "../components/TaskContainer.vue";
import BaseSelect from "../components/base/BaseSelect.vue";
import { ref } from "vue";
import { useTaskStore } from "../pinia/task.pinia.ts";
import TaskDetailsDialog from "../components/TaskDetailsDialog.vue";

const taskStore = useTaskStore();

const tasks = [
  {
    id: 1,
    title: "Clean house and make all sd",
    time: "12:00",
    status: "to do",
    description:
      "Clean house and manage that all tasks is done so we are gonna make pilesos on and start cleaning also idiot to make sense asasdfasdfa sdf sdfsd",
  },
  { id: 1, title: "Workout", time: "13:00", status: "done" },
  {
    id: 1,
    title: "Eat",
    time: "11:00",
    status: "to do",
  },
  { id: 1, title: "Read Book", time: "15:00", status: "failed" },
];

const filterItems = ["All", "To do", "Done", "Failed"];

const selectedTask = ref(null);

const selectTask = (task) => {
  taskStore.taskDetailsDialog = true;
  selectedTask.value = task;
};
</script>

<template>
  <article class="flex flex-col gap-10">
    <section class="flex items-center justify-between">
      <h2>Hello, I'm your todo manager 👋</h2>
      <BaseSelect :items="filterItems" :width="150" />
    </section>

    <TaskDetailsDialog :task="selectedTask" />

    <section class="grid grid-cols-3 gap-y-4 gap-x-4">
      <TaskContainer
        v-for="task in tasks"
        :key="task.title + task.time"
        :description="task.description"
        :status="task.status"
        :time="task.time"
        :title="task.title"
        @click="selectTask(task)"
      />
    </section>
  </article>
</template>
