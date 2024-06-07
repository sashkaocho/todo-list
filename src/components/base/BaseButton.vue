<script lang="ts" setup>
defineProps<{
  title: string;
  width: number;
  height: number;
}>();
</script>

<template>
  <button
    :style="`width: ${width}px; height: ${height}px`"
    class="rounded-xl text-primary-700 border border-primary-700 transition-all hover:bg-primary-700 hover:text-white"
  >
    {{ title }}
  </button>
</template>
<!--py-2 px-4-->
