<script lang="ts" setup>
import BaseDialog from "./base/BaseDialog.vue";
import BaseButton from "./base/BaseButton.vue";
import BaseTextField from "./base/BaseTextField.vue";

import { useTaskStore } from "../pinia/task.pinia.ts";
import { EColor } from "../ts/enums/color.enum.ts";
import { reactive, ref } from "vue";
import axios from "axios";
import { getTasks } from "../utils/task.ts";

const taskStore = useTaskStore();

const formData = reactive({
  nameModel: "",
  descriptionModel: "",
  startDateModel: "",
  endDateModel: "",
});

const formIsValid = ref<boolean>(false);

const validateForm = (): void => {
  if (
    formData.nameModel.length === 0 ||
    formData.descriptionModel.length === 0 ||
    formData.startDateModel.length === 0 ||
    formData.endDateModel.length === 0
  ) {
    formIsValid.value = false;
    return;
  }

  formIsValid.value = true;
};

const createTask = async (): Promise<void> => {
  validateForm();
  if (!formIsValid.value) return;
  try {
    const newTask = {
      name: formData.nameModel,
      description: formData.descriptionModel,
      start_date: formData.startDateModel,
      end_date: formData.endDateModel,
    };

    await axios.post("http://127.0.0.1:8000/api/tasks", newTask);
    await getTasks();
  } catch (err) {
    console.log(err);
  } finally {
    emptyFields();
    closeCreateTaskDialog();
  }
};

const emptyFields = (): void => {
  formData.nameModel = "";
  formData.descriptionModel = "";
  formData.startDateModel = "";
  formData.endDateModel = "";
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
      <form class="flex flex-col gap-7" @submit.prevent="createTask">
        <BaseTextField
          v-model="formData.nameModel"
          :maxlength="24"
          field="input"
          label="Name"
          type="text"
        />
        <BaseTextField
          v-model="formData.descriptionModel"
          :maxlength="135"
          field="textarea"
          label="Description"
          type="text"
        />
        <BaseTextField
          v-model="formData.startDateModel"
          field="input"
          label="Start date"
          type="datetime-local"
        />
        <BaseTextField
          v-model="formData.endDateModel"
          field="input"
          label="End date"
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
          <h5 class="text-error">No field should be empty</h5>
        </div>
      </form>
    </div>
  </BaseDialog>
</template>
