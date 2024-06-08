<script lang="ts" setup>
import { useTaskStore } from "../../pinia/task.pinia.ts";

defineProps<{
  width: number;
  title: string;
}>();

const taskStore = useTaskStore();
</script>

<template>
  <Teleport to="#modal">
    <Transition name="modal">
      <dialog
        v-if="taskStore.createTaskDialog"
        class="fixed top-0 left-0 flex justify-center items-center w-full h-full backdrop"
      >
        <div
          :style="`width: ${width}px`"
          class="relative max-h-[500px] bg-white box-shadow-all-sides rounded-xl px-10 py-5 flex flex-col gap-5"
        >
          <div class="flex items-center justify-between">
            <h1 class="text-lg">{{ title }}</h1>
            <i
              class="fa-solid fa-xmark text-xl cursor-pointer"
              @click="taskStore.createTaskDialog = false"
            ></i>
          </div>

          <slot />
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>
