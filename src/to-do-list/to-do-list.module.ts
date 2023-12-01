import { Module } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { ToDoListController } from './to-do-list.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ToDoListController],
  providers: [ToDoListService, PrismaService],
})
export class ToDoListModule { }
