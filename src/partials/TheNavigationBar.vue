<script lang="ts" setup>
import { ref } from "vue";
import { INavItem } from "../ts/navigation.interface.ts";

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
    class="bg-white h-full w-60 flex flex-col items-center gap-8 border-r pt-7"
  >
    <button class="rounded-2xl box-shadow-all-sides py-2 px-4 text-lg">
      Add Task
    </button>

    <nav class="w-full flex flex-col gap-5 px-3">
      <div
        v-for="navItem in navItems"
        :key="navItem.path"
        class="w-full flex items-center justify-center gap-3 px-6 cursor-pointer"
      >
        <i :class="navItem.icon" class="fa-solid"></i>
        <router-link :to="navItem.path">{{ navItem.name }}</router-link>
      </div>
    </nav>
  </section>
</template>
