<script lang="ts" setup>
import BaseDialog from "./base/BaseDialog.vue";
import { useTaskStore } from "../pinia/task.pinia.ts";
import BaseButton from "./base/BaseButton.vue";
import { EColor } from "../ts/enums/color.enum.ts";
import { computed, ref } from "vue";
import EditTaskComponent from "./EditTaskComponent.vue";

defineProps<{
  task: object;
}>();

const taskStore = useTaskStore();

const isEditing = ref<boolean>(false);

const dialogTitle = computed<string>(() => {
  return isEditing.value ? "Editing Task" : "Task Details";
});

const closeTaskDetails = (): void => {
  taskStore.taskDetailsDialog = false;
  isEditing.value = false;
};

const startEditing = (): void => {
  isEditing.value = true;
};
</script>

<template>
  <BaseDialog
    :condition="taskStore.taskDetailsDialog"
    :title="dialogTitle"
    :width="450"
    @close="closeTaskDetails"
  >
    <EditTaskComponent v-if="isEditing" @cancel="isEditing = false" />
    <section v-else class="flex flex-col gap-4">
      <h3 class="text-primary-700">{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <h3>{{ task.time }}</h3>
      <h4>{{ task.status }}</h4>
      <div class="flex items-center justify-between mt-2">
        <BaseButton
          :color="EColor.warning"
          :height="40"
          :width="100"
          title="Edit"
          @click="startEditing"
        />
        <BaseButton
          :color="EColor.error"
          :height="40"
          :width="100"
          title="Delete"
        />
      </div>
    </section>
  </BaseDialog>
</template>