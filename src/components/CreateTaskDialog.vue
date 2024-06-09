<script lang="ts" setup>
import BaseDialog from "./base/BaseDialog.vue";
import BaseButton from "./base/BaseButton.vue";
import BaseTextField from "./base/BaseTextField.vue";

import { useTaskStore } from "../pinia/task.pinia.ts";
import { EColor } from "../ts/enums/color.enum.ts";
import { ref } from "vue";

const taskStore = useTaskStore();

const nameModel = ref<string>("");
const descriptionModel = ref<string>("");
const startTimeModel = ref<string>("");
const endTimeModel = ref<string>("");

const formIsValid = ref<boolean>(true);

const validateForm = (): void => {
  if (
    nameModel.value.length === 0 ||
    descriptionModel.value.length === 0 ||
    startTimeModel.value.length === 0 ||
    endTimeModel.value.length === 0
  ) {
    formIsValid.value = false;
    return;
  }

  formIsValid.value = true;
};

const closeCreateTaskDialog = (): void => {
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
      <form class="flex flex-col gap-7" @submit.prevent="validateForm">
        <BaseTextField
          v-model="nameModel"
          :maxlength="24"
          field="input"
          label="Name"
          type="text"
        />
        <BaseTextField
          v-model="descriptionModel"
          :maxlength="135"
          field="textarea"
          label="Description"
          type="text"
        />
        <BaseTextField
          v-model="startTimeModel"
          field="input"
          label="Start time"
          type="datetime-local"
        />
        <BaseTextField
          v-model="endTimeModel"
          field="input"
          label="End time"
          type="datetime-local"
        />
        <div class="flex justify-between items-center mt-2 mb-5">
          <BaseButton
            :color="EColor.primary"
            :height="40"
            :width="200"
            class=""
            title="Create task"
          />
          <h5 v-if="!formIsValid" class="text-error">
            No field should be empty
          </h5>
        </div>
      </form>
    </div>
  </BaseDialog>
</template>
