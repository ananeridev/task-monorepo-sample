import { Prisma } from '@prisma/client';

export class UpdateUserDto implements Prisma.UserUpdateInput {
  name?: string;
  email?: string;
  tasks?: Prisma.TaskUpdateManyWithoutUserNestedInput;
}