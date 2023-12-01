import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { CreateAuthServiceDto } from './dto/create-auth-service.dto';

@Controller('auth-service')
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) { }

  @Post()
  async signIn(@Body() createAuthServiceDto: CreateAuthServiceDto) {
    return await this.authServiceService.signIn(createAuthServiceDto);
  }
}
