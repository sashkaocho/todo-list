<script lang="ts" setup>
defineProps<{
  label: string;
  type: string;
  maxlength?: number;
  field: string;
}>();

const model = defineModel<string>();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label class="text-sm text-primary-700">{{ label }}</label>
    <input
      v-if="field === 'input'"
      v-model="model"
      :maxlength="maxlength"
      :placeholder="`Type ${label.toLowerCase()}...`"
      :type="type"
      class="border h-9 rounded-md px-3 text-sm"
      @click="console.log(model)"
    />
    <textarea
      v-else
      v-model="model"
      :maxlength="maxlength"
      :placeholder="`Type ${label.toLowerCase()}...`"
      class="border h-15 rounded-md px-3 py-2 text-sm"
      @click="console.log(model)"
    />
  </div>
</template>
