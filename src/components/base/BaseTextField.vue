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
    <div class="flex items-center justify-between">
      <label class="text-sm text-primary-700">{{ label }} </label>
      <p v-if="maxlength" class="text-warning text-xs ml-2">
        Max {{ maxlength }} characters*
      </p>
    </div>
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
      class="border h-20 rounded-md px-3 py-2 text-sm"
      @click="console.log(model)"
    />
  </div>
</template>
