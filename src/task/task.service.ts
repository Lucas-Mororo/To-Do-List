import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) { }

  async create(createTaskDto: CreateTaskDto) {
    await this.prisma.toDoList.findUniqueOrThrow({ where: { id: createTaskDto.ToDoListId } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao criar tarefa. Verifique o ID da lista de tarefas." });
    })
    const task = await this.prisma.task.create({ data: { ...createTaskDto } });
    return task;
  }

  async findAll() {
    const task = await this.prisma.task.findMany();
    return task;
  }

  async findOne(id: number) {
    await this.prisma.task.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao buscar tarefa. Verifique se a tarefa existe." });
    })
    const task = await this.prisma.task.findUnique({ where: { id } })
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.prisma.toDoList.findUniqueOrThrow({ where: { id: updateTaskDto.ToDoListId } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao alterar tarefa. Verifique se a lista de tarefas existe." });
    })
    await this.prisma.task.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao alterar tarefa. Verifique se a tarefas existe." });
    })
    const task = await this.prisma.task.update({ where: { id }, data: updateTaskDto })
    return task;
  }

  async remove(id: number) {
    await this.prisma.task.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao deletar tarefa. Verifique se a tarefas existe." });
    })
    const task = await this.prisma.task.delete({ where: { id } })
    return task;
  }
}
