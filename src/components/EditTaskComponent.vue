<script lang="ts" setup>
import { EColor } from "../ts/enums/color.enum.ts";
import BaseButton from "./base/BaseButton.vue";
import BaseTextField from "./base/BaseTextField.vue";
import { reactive, ref } from "vue";
import { ITask } from "../ts/interfaces/task.interface.ts";
import axios from "axios";
import { getTasks } from "../utils/task.ts";

const props = defineProps<{
  task: ITask;
}>();

const emit = defineEmits(["cancel", "close"]);

const formData = reactive({
  nameModel: props.task.name,
  descriptionModel: props.task.description,
  startDateModel: props.task.start_date,
  endDateModel: props.task.end_date,
});

const formIsValid = ref<boolean>(false);

const validateUpdateForm = (): void => {
  if (
    formData.nameModel !== props.task.name ||
    formData.descriptionModel !== props.task.description ||
    formData.startDateModel !== props.task.start_date ||
    formData.endDateModel !== props.task.end_date
  ) {
    formIsValid.value = true;
    return;
  }

  formIsValid.value = false;
};

const getChangedFields = (): {} => {
  const changedFields = {};
  if (formData.nameModel !== props.task.name) {
    changedFields.name = formData.nameModel;
  }
  if (formData.descriptionModel !== props.task.description) {
    changedFields.description = formData.descriptionModel;
  }
  if (formData.startDateModel !== props.task.start_date) {
    changedFields.start_date = formData.startDateModel;
  }
  if (formData.endDateModel !== props.task.end_date) {
    changedFields.end_date = formData.endDateModel;
  }
  return changedFields;
};

const updateTask = async (): Promise<void> => {
  validateUpdateForm();
  if (!formIsValid.value) return;
  try {
    const changedFields = getChangedFields();
    await axios.patch(
      `http://127.0.0.1:8000/api/tasks/${props.task.id}`,
      changedFields,
    );
    await getTasks();
  } catch (err) {
    console.error(err);
  } finally {
    emit("close");
  }
};
</script>

<template>
  <section class="flex flex-col">
    <form class="flex flex-col gap-6" @submit.prevent="updateTask">
      <BaseTextField
        v-model="formData.nameModel"
        field="input"
        label="Name"
        type="text"
      />
      <BaseTextField
        v-model="formData.descriptionModel"
        field="textarea"
        label="Description"
        type="text"
      />
      <BaseTextField
        v-model="formData.startDateModel"
        field="input"
        label="Start time"
        type="datetime-local"
      />
      <BaseTextField
        v-model="formData.endDateModel"
        field="input"
        label="End time"
        type="datetime-local"
      />
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
