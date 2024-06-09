<script lang="ts" setup>
import BaseDialog from "./base/BaseDialog.vue";
import { useTaskStore } from "../pinia/task.pinia.ts";
import BaseButton from "./base/BaseButton.vue";
import { EColor } from "../ts/enums/color.enum.ts";
import { computed, ref } from "vue";
import EditTaskComponent from "./EditTaskComponent.vue";
import { ITask } from "../ts/interfaces/task.interface.ts";
import axios from "axios";
import { getTasks } from "../utils/task.ts";
import { formatDate } from "../utils/helpers/date.ts";

const props = defineProps<{
  task: ITask | null;
}>();

const taskStore = useTaskStore();

const isEditing = ref<boolean>(false);

const dialogTitle = computed<string>(() => {
  return isEditing.value ? "Editing Task" : "Task Details";
});

const deleteTask = async (): Promise<void> => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/tasks/${props.task?.id}`);
    await getTasks();
  } catch (err) {
    console.log(err);
  } finally {
    closeTaskDetails();
  }
};

const formattedTaskTime = computed<string>(() => {
  return (
    formatDate(props.task?.start_date as string) +
    " - " +
    formatDate(props.task?.end_date as string)
  );
});

const statusColor = computed(() => {
  switch (props.task?.status) {
    case "todo":
      return "#3e3ac8";
    case "done":
      return "#16a34a";
    case "failed":
      return "#dc2626";
  }
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
    <EditTaskComponent
      v-if="isEditing"
      :task="task"
      @cancel="isEditing = false"
      @close="closeTaskDetails"
    />

    <section v-else class="flex flex-col gap-4">
      <h3 class="text-primary-700">{{ task?.name }}</h3>
      <p>{{ task?.description }}</p>
      <h3>{{ formattedTaskTime }}</h3>
      <h4 :style="`color: ${statusColor}`">{{ task?.status }}</h4>
      <div class="flex items-center justify-between mt-2">
        <BaseButton
          v-if="task?.status === 'todo'"
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
          @click="deleteTask"
        />
      </div>
    </section>
  </BaseDialog>
</template>
