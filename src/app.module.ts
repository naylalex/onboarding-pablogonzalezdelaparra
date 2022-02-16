import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersService } from './users/users.service';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [TasksModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
