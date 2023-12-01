import { Module } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { AuthServiceController } from './auth-service.controller';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt/dist';

@Module({
  controllers: [AuthServiceController],
  providers: [AuthServiceService, PrismaService, JwtService],
})
export class AuthServiceModule { }
