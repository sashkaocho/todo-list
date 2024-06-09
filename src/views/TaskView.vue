<script lang="ts" setup>
import TaskContainer from "../components/TaskContainer.vue";
import BaseSelect from "../components/base/BaseSelect.vue";
import { computed, onMounted, ref } from "vue";
import { useTaskStore } from "../pinia/task.pinia.ts";
import TaskDetailsDialog from "../components/TaskDetailsDialog.vue";
import { ETaskGetters } from "../ts/enums/pinia/task.enum.ts";
import { ITask } from "../ts/interfaces/task.interface.ts";
import { ETaskStatus } from "../ts/enums/task.enum.ts";
import { getTasks } from "../utils/task.ts";

const taskStore = useTaskStore();

const filterItems = [
  "All",
  ETaskStatus.TODO,
  ETaskStatus.DONE,
  ETaskStatus.FAILED,
];

const selectedFilter = ref<string>("All");

const selectedTask = ref<ITask | null>(null);

const tasks = computed<ITask[]>(() => taskStore[ETaskGetters.GetTasks]);

const filteredTasks = computed<ITask[]>(() => {
  if (selectedFilter.value === "All") {
    return tasks.value;
  }
  return tasks.value.filter(
    (task: ITask) => task.status === selectedFilter.value.toLowerCase(),
  );
});

onMounted(async (): Promise<void> => {
  await getTasks();
});

const selectTask = (task: ITask): void => {
  taskStore.taskDetailsDialog = true;
  selectedTask.value = task;
};
</script>

<template>
  <article class="flex flex-col gap-10">
    <section class="flex items-center justify-between">
      <h2>Hello, I'm your todo manager 👋</h2>
      <BaseSelect v-model="selectedFilter" :items="filterItems" :width="150" />
    </section>

    <TaskDetailsDialog :task="selectedTask" />

    <section class="grid grid-cols-3 gap-y-4 gap-x-4">
      <TaskContainer
        v-for="task in filteredTasks"
        :id="task.id"
        :key="task?.name + task?.status"
        :description="task?.description"
        :endDate="task?.end_date"
        :startDate="task?.start_date"
        :status="task?.status"
        :title="task?.name"
        @click="selectTask(task)"
      />
    </section>
  </article>
</template>
