import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './tasks/task.module';
import { UserModule } from './tasks/users/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    TaskModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}