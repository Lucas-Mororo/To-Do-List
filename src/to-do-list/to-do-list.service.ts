import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateToDoListDto } from './dto/create-to-do-list.dto';
import { UpdateToDoListDto } from './dto/update-to-do-list.dto';

@Injectable()
export class ToDoListService {
  constructor(private prisma: PrismaService) { }

  async create(createToDoListDto: CreateToDoListDto) {
    await this.prisma.user.findUniqueOrThrow({ where: { id: createToDoListDto.userId } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao criar tarefa. Verifique o ID do usuário." });
    })

    const ToDo = await this.prisma.toDoList.create({ data: createToDoListDto });
    return ToDo;
  }

  async findAll() {
    const ToDo = await this.prisma.toDoList.findMany();
    return ToDo;
  }

  async findOne(id: number) {
    await this.prisma.toDoList.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao buscar tarefa. Verifique se a lista existe." });
    })
    const ToDo = await this.prisma.toDoList.findUnique({ where: { id } });
    return ToDo;
  }

  async update(id: number, updateToDoListDto: UpdateToDoListDto) {
    await this.prisma.toDoList.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao alterar lista. Verifique se a lista existe." });
    })
    await this.prisma.user.findUniqueOrThrow({ where: { id: updateToDoListDto.userId } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao criar tarefa. Verifique se o usuário existe." });
    })

    const ToDo = await this.prisma.toDoList.update({ where: { id }, data: updateToDoListDto })
    return ToDo;
  }

  async remove(id: number) {
    await this.prisma.toDoList.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao deletar lista. Verifique se a lista existe." });
    })
    const ToDo = await this.prisma.toDoList.delete({ where: { id } });
    return ToDo;
  }
}
