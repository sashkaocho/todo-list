<script lang="ts" setup>
import { EColor } from "../ts/enums/color.enum.ts";
import BaseInput from "./base/BaseInput.vue";
import BaseButton from "./base/BaseButton.vue";

defineEmits(["cancel"]);
</script>

<template>
  <section class="flex flex-col">
    <form class="flex flex-col gap-6">
      <BaseInput label="Name" type="text" />
      <BaseInput label="Description" type="text" />
      <BaseInput label="Start time" type="datetime-local" />
      <BaseInput label="End time" type="datetime-local" />
      <div class="flex justify-between items-center mt-2">
        <BaseButton
          :color="EColor.success"
          :height="40"
          :width="100"
          title="Save"
        />
        <BaseButton
          :color="EColor.error"
          :height="40"
          :width="100"
          title="Cancel"
          @click="$emit('cancel')"
        />
      </div>
    </form>
  </section>
</template>
