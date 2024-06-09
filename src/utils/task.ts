import axios from "axios";
import { ETaskActions } from "../ts/enums/pinia/task.enum.ts";
import { useTaskStore } from "../pinia/task.pinia.ts";

export async function getTasks(): Promise<void> {
  try {
    const response = axios.get("http://127.0.0.1:8000/api/tasks");

    useTaskStore()[ETaskActions.SetTasks]((await response).data);
  } catch (err) {
    console.log(err);
  }
}
