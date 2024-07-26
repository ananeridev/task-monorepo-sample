import { Prisma } from "@prisma/client";

export class CreateUserDto implements Prisma.UserCreateInput {
  name: string;
  email: string;
  tasks?: Prisma.TaskCreateNestedManyWithoutUserInput;
}