<script lang="ts" setup>
import TaskContainer from "../components/TaskContainer.vue";

const tasks = [
  {
    id: 1,
    title: "Clean house",
    time: "12:00",
    status: "to do",
    description:
      "Clean house and manage that all tasks is done so we are gonna make pilesos on and start cleaning",
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
</script>

<template>
  <article class="flex flex-col gap-10">
    <section>
      <h1 class="text-xl">Hello, I'm your todo manager 👋</h1>
      <h1>today</h1>
    </section>

    <section class="grid grid-cols-3 gap-y-4 gap-x-4">
      <TaskContainer
        v-for="task in tasks"
        :key="task.title + task.time"
        :description="task.description"
        :status="task.status"
        :time="task.time"
        :title="task.title"
      />
    </section>
  </article>
</template>
