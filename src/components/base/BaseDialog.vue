<script lang="ts" setup>
defineProps<{
  width: number;
  title: string;
  condition: any;
}>();

defineEmits(["close"]);
</script>

<template>
  <Teleport to="#modal">
    <Transition name="modal">
      <dialog
        v-if="condition"
        class="fixed top-0 left-0 flex justify-center items-center w-full h-full backdrop"
      >
        <div
          :style="`width: ${width}px`"
          class="relative max-h-[500px] bg-white box-shadow-all-sides rounded-xl px-10 py-5 flex flex-col gap-5"
        >
          <div class="flex items-center justify-between">
            <h2>{{ title }}</h2>
            <i
              class="fa-solid fa-xmark text-xl cursor-pointer"
              @click="$emit('close')"
            ></i>
          </div>

          <slot />
        </div>
      </dialog>
    </Transition>
  </Teleport>
</template>
