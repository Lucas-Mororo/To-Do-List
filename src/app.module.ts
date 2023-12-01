import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { UserModule } from './user/user.module';
import { AuthServiceModule } from './auth-service/auth-service.module';

@Module({
  imports: [ToDoListModule, TaskModule, UserModule, AuthServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
