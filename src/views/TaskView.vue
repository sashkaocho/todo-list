<script lang="ts" setup>
import TaskContainer from "../components/TaskContainer.vue";

const tasks = [
  { id: 1, title: "Clean house", time: "12:00" },
  { id: 1, title: "Workout", time: "13:00" },
  {
    id: 1,
    title: "Eat",
    time: "11:00",
  },
  { id: 1, title: "Read Book", time: "15:00" },
];
</script>

<template>
  <h1 class="text-xl">Hello, Aleksandre 👋</h1>
  <section class="grid grid-cols-3 gap-y-4 gap-x-4 h-[350px]">
    <TaskContainer
      v-for="task in tasks"
      :key="task.title + task.time"
      :time="task.time"
      :title="task.title"
    />
  </section>
</template>
