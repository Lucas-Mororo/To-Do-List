import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAuthServiceDto } from './dto/create-auth-service.dto';

@Injectable()
export class AuthServiceService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) { }

  async signIn(createAuthServiceDto: CreateAuthServiceDto) {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { email: createAuthServiceDto.email } }).catch((error) => {
      throw new BadRequestException({ error, message: "Erro ao logar. Verifique se o usuário existe." });
    })

    if (user?.password !== createAuthServiceDto.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, name: user.name, email: user.email };
    return { access_token: await this.jwtService.signAsync(payload), };
  }
}
