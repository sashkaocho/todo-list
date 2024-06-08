<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  title: string;
  time: string;
  status: string;
  description?: string;
}>();

const statusColor = computed(() => {
  switch (props.status) {
    case "to do":
      return "#3e3ac8";
    case "done":
      return "#16a34a";
    case "failed":
      return "#dc2626";
  }
});
</script>

<template>
  <div
    class="bg-white box-shadow-all-sides-hovered flex flex-col justify-between rounded-lg py-3 px-5 h-44 cursor-pointer"
  >
    <div class="w-full flex items-center justify-between">
      <h1>{{ title }}</h1>
      <input type="checkbox" />
    </div>
    <p>{{ description }}</p>
    <div class="flex justify-between">
      <h3>{{ time }}</h3>
      <h4 :style="`color: ${statusColor}`" class="text-primary-700">
        {{ status }}
      </h4>
    </div>
  </div>
</template>
