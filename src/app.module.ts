import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module'; 
import { ToDoModuleModule } from './to-do-module/to-do-module.module'; 
import {TodoEntity} from "./to-do-module/entities/todo.entity";

@Module({
  imports: [
    PremierModule, ToDoModuleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'newdb',
      entities: [TodoEntity],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

