import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({ data: createUserDto });
    return user;
  }

  async findAll() {
    const user = await this.prisma.user.findMany();
    return user;
  }

  async findOne(id: number) {
    await this.prisma.user.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao buscar usuário. Verifique se o usuário existe." });
    })
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.prisma.user.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao alterar usuário. Verifique se o usuário existe." });
    })
    const user = await this.prisma.user.update({ where: { id }, data: updateUserDto })
    return user;
  }

  async remove(id: number) {
    await this.prisma.user.findUniqueOrThrow({ where: { id: id } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao deletar usuário. Verifique se o usuário existe." });
    })
    const user = await this.prisma.user.delete({ where: { id } });
    return user;
  }
}
