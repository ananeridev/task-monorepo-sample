import { Prisma } from "@prisma/client";

export class CreateTaskDto implements Prisma.TaskCreateInput {
    user: Prisma.UserCreateNestedOneWithoutTasksInput;
    title: string;
    description: string;
    status: string;
    userId: number;
  }
  