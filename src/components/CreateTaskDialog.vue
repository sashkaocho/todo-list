<script lang="ts" setup>
import BaseDialog from "./base/BaseDialog.vue";
import BaseInput from "./base/BaseInput.vue";
import BaseButton from "./base/BaseButton.vue";
import { useTaskStore } from "../pinia/task.pinia.ts";
import { EColor } from "../ts/enums/color.enum.ts";

const taskStore = useTaskStore();

const closeCreateTaskDialog = () => {
  taskStore.createTaskDialog = false;
};
</script>

<template>
  <BaseDialog
    :condition="taskStore.createTaskDialog"
    :width="600"
    title="Create a new task"
    @close="closeCreateTaskDialog"
  >
    <div>
      <form class="flex flex-col gap-6">
        <BaseInput label="Name" type="text" />
        <BaseInput label="Description" type="text" />
        <BaseInput label="Start time" type="datetime-local" />
        <BaseInput label="End time" type="datetime-local" />
        <BaseButton
          :color="EColor.primary"
          :height="40"
          :width="200"
          class="mt-2 mb-5"
          title="Create task"
        />
      </form>
    </div>
  </BaseDialog>
</template>
