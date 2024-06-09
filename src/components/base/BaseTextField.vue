<script lang="ts" setup>
defineProps<{
  label: string;
  type: string;
  maxlength?: number;
  field: string;
}>();

const model = defineModel();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label class="text-sm text-primary-700">{{ label }}</label>
    <component
      :is="field === 'textarea' ? 'textarea' : 'input'"
      v-model="model"
      :class="[field === 'textarea' ? 'h-17 py-2' : 'h-9']"
      :maxlength="maxlength"
      :placeholder="`Type ${label.toLowerCase()}...`"
      :type="type"
      class="border rounded-md px-3 text-sm"
      @click="console.log(model)"
    ></component>
  </div>
</template>
