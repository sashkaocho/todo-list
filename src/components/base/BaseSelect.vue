<script lang="ts" setup>
defineProps<{
  width: number;
  items: string[];
}>();

const model = defineModel<string>();
</script>

<template>
  <select
    v-model="model"
    :style="`width: ${width}`"
    class="w-[150px] py-2.5 px-3 cursor-pointer rounded-lg"
  >
    <option
      v-for="item in items"
      :key="item"
      :selected="item === model"
      :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>
