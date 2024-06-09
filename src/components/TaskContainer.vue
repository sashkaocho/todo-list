<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { formatDate } from "../utils/helpers/date.ts";
import axios from "axios";
import { getTasks } from "../utils/task.ts";

const props = defineProps<{
  id: number;
  title: string;
  status: string;
  startDate: string;
  endDate: string;
  description?: string;
}>();

const taskIsDoneModel = ref<boolean>(false);

const formattedTaskTime = computed(() => {
  return formatDate(props.startDate) + " - " + formatDate(props.endDate);
});

const statusColor = computed(() => {
  switch (props.status) {
    case "todo":
      return "#3e3ac8";
    case "done":
      return "#16a34a";
    case "failed":
      return "#dc2626";
  }
});

const finishTask = async (): Promise<void> => {
  try {
    await axios.patch(`http://127.0.0.1:8000/api/tasks/status/${props.id}`, {
      status: "done",
    });
    await getTasks();
  } catch (err) {
    console.log(err);
  }
};

watch(taskIsDoneModel, (value) => {
  if (!value) return;
  finishTask();
});
</script>

<template>
  <div
    class="bg-white box-shadow-all-sides-hovered flex flex-col justify-between rounded-lg py-3 px-5 h-44 cursor-pointer"
  >
    <div class="w-full flex items-center justify-between">
      <h1>{{ title }}</h1>
      <input
        v-if="status === 'todo'"
        v-model="taskIsDoneModel"
        type="checkbox"
        @click.stop
      />
    </div>
    <p>{{ description }}</p>
    <div class="flex justify-between">
      <h4>
        {{ formattedTaskTime }}
      </h4>
      <h4 :style="`color: ${statusColor}`" class="text-primary-700">
        {{ status }}
      </h4>
    </div>
  </div>
</template>
