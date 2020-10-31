import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './database/database.service';

@Module({
  imports: [ConfigModule.forRoot({load:[configuration]}),TypeOrmModule.forRootAsync({
    useClass:DatabaseConnectionService
  }), UsersModule],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
