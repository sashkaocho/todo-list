<script lang="ts" setup>
import { EColor } from "../ts/enums/color.enum.ts";
import BaseButton from "./base/BaseButton.vue";
import BaseTextField from "./base/BaseTextField.vue";

defineEmits(["cancel"]);
</script>

<template>
  <section class="flex flex-col">
    <form class="flex flex-col gap-6">
      <BaseTextField field="input" label="Name" type="text" />
      <BaseTextField field="textarea" label="Description" type="text" />
      <BaseTextField field="input" label="Start time" type="datetime-local" />
      <BaseTextField field="input" label="End time" type="datetime-local" />
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
