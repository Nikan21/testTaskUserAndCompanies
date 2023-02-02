import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User]), JwtModule.register({
    secret: process.env.PRIVATE_Key || 'SECRET',
    signOptions: {
      expiresIn: '24h'
    }
  })]
})

export class UsersModule {}
