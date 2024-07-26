import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Task, Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  findOne(id: number): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: { id: id },
    });
  }

  create(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  update(id: number, data: Prisma.TaskUpdateInput): Promise<Task> {
    return this.prisma.task.update({
      where: { id: id },
      data,
    });
  }

  remove(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: { id: id },
    });
  }
}