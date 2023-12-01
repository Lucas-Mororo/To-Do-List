import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { CreateToDoListDto } from './dto/create-to-do-list.dto';
import { UpdateToDoListDto } from './dto/update-to-do-list.dto';

@Controller('to-do-list')
export class ToDoListController {
  constructor(private readonly toDoListService: ToDoListService) { }

  @Post()
  async create(@Body() createToDoListDto: CreateToDoListDto) {
    return await this.toDoListService.create(createToDoListDto);
  }

  @Get()
  async findAll() {
    return await this.toDoListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.toDoListService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateToDoListDto: UpdateToDoListDto) {
    return await this.toDoListService.update(+id, updateToDoListDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.toDoListService.remove(+id);
  }
}
