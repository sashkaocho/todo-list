import { ETaskStatus } from "../enums/task.enum.ts";

export interface ITask {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  status: ETaskStatus;
}
