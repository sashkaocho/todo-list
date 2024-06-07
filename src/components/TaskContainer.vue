<script lang="ts" setup>
defineProps<{
  title: string;
  time: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="bg-white box-shadow-all-sides flex flex-col justify-between rounded-lg py-3 px-5 h-44 cursor-pointer"
  >
    <div class="w-full flex items-center justify-between">
      <h1 class="text-2xl">{{ title }}</h1>
      <input type="checkbox" />
    </div>
    <p class="text-sm">{{ description }}</p>
    <div class="flex justify-between">
      <h2 class="text-lg">{{ time }}</h2>
      <h2 class="text-primary-700">to do</h2>
    </div>
  </div>
</template>
