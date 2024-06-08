<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps<{
  title: string;
  width: number;
  height: number;
  color: string;
}>();

const isHovered = ref<boolean>(false);

const buttonStyle = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
  color: isHovered.value ? "white" : props.color,
  border: `1px solid ${props.color}`,
  backgroundColor: isHovered.value ? props.color : "transparent",
}));
</script>

<template>
  <button
    :style="buttonStyle"
    class="rounded-xl border transition-all hover:text-white"
    @mouseleave="isHovered = false"
    @mouseover="isHovered = true"
  >
    {{ title }}
  </button>
</template>
