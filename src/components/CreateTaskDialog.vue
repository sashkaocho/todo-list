<script lang="ts" setup>
import BaseDialog from "./base/BaseDialog.vue";
import BaseInput from "./base/BaseInput.vue";
import BaseButton from "./base/BaseButton.vue";
</script>

<template>
  <BaseDialog :width="600" title="Create a new task">
    <div>
      <form class="flex flex-col gap-6">
        <BaseInput label="Name" type="text" />
        <BaseInput label="Description" type="text" />
        <BaseInput label="Start time" type="datetime-local" />
        <BaseInput label="End time" type="datetime-local" />
        <BaseButton
          :height="40"
          :width="200"
          class="mt-2 mb-5"
          title="Create task"
        />
      </form>
    </div>
  </BaseDialog>
</template>
