<script lang="ts" setup>
import { ref } from "vue";
import { INavItem } from "../ts/interfaces/navigation.interface.ts";
import { useTaskStore } from "../pinia/task.pinia.ts";
import CreateTaskDialog from "../components/CreateTaskDialog.vue";
import BaseButton from "../components/base/BaseButton.vue";
import { EColor } from "../ts/enums/color.enum.ts";

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
    class="bg-white h-full w-72 flex flex-col items-center gap-8 border-r pt-10"
  >
    <BaseButton
      :color="EColor.primary"
      :height="40"
      :width="120"
      title="Add Task"
      @click.left="taskStore.createTaskDialog = true"
    />

    <CreateTaskDialog />

    <nav class="w-full flex flex-col gap-5">
      <RouterLink
        v-for="navItem in navItems"
        :key="navItem.path"
        :to="navItem.path"
        active-class="border-primary-700 text-primary-700"
        class="w-full flex items-center justify-center gap-3 px-6 cursor-pointer border-r-2"
      >
        <i :class="navItem.icon" class="fa-solid transition-all"></i>
        <h4 class="transition-all">
          {{ navItem.name }}
        </h4>
      </RouterLink>
    </nav>
  </section>
</template>
