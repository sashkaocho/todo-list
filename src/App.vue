<script lang="ts" setup>
import TheNavigationBar from "./partials/TheNavigationBar.vue";
</script>

<template>
  <div class="flex h-[100vh]">
    <TheNavigationBar />
    <main class="w-full pt-16 px-20 bg-gray-50 flex flex-col gap-7">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
