<script lang="ts" setup>
import { ref } from "vue";
import { INavItem } from "../ts/navigation.interface.ts";
import { useTaskStore } from "../pinia/task.pinia.ts";
import CreateTaskDialog from "../components/CreateTaskDialog.vue";
import BaseButton from "../components/base/BaseButton.vue";

const taskStore = useTaskStore();

const navItems = ref<INavItem[]>([
  {
    name: "Home",
    path: "/home",
    icon: "fa-house",
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: "fa-list-check",
  },
]);
</script>

<template>
  <section
    class="bg-white h-full w-72 flex flex-col items-center gap-8 border-r pt-7"
  >
    <BaseButton
      :height="40"
      :width="120"
      title="Add Task"
      @click.left="taskStore.createTaskDialog = true"
    />

    <CreateTaskDialog v-if="taskStore" />

    <nav class="w-full flex flex-col gap-5 px-3">
      <router-link
        v-for="navItem in navItems"
        :key="navItem.path"
        :to="navItem.path"
        class="w-full flex items-center justify-center gap-3 px-6 cursor-pointer"
      >
        <i :class="navItem.icon" class="fa-solid"></i>
        <h1>{{ navItem.name }}</h1>
      </router-link>
    </nav>
  </section>
</template>
