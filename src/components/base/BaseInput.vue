<script lang="ts" setup>
defineProps<{
  label: string;
  type: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label class="text-sm text-primary-700">{{ label }}</label>
    <input
      :placeholder="`Type ${label.toLowerCase()}...`"
      :type="type"
      class="border rounded-md h-9 px-3 text-sm"
    />
  </div>
</template>
