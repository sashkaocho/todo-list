<script lang="ts" setup>
defineProps<{
  title: string;
  time: string;
}>();
</script>

<template>
  <div
    class="bg-white box-shadow-all-sides flex flex-col items-center rounded-lg"
  >
    <div class="flex items-center">
      <input type="checkbox" />
      <h1>{{ title }}</h1>
    </div>
    <h1>{{ time }}</h1>
  </div>
</template>
