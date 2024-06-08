<script lang="ts" setup>
defineProps<{
  width: number;
  items: string[];
}>();
</script>

<template>
  <select
    :style="`width: ${width}`"
    class="w-[150px] py-2.5 px-3 cursor-pointer rounded-lg"
  >
    <option v-for="item in items" :key="item" :value="item">
      {{ item }}
    </option>
  </select>
</template>
