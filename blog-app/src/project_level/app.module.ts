import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from '../blog/blog.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { User } from '../users/users.entity';
import { Post } from '../blog/blog.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // So you don't have to import it in every module
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'blog.sqlite',
      entities: [User, Post],
      synchronize: true,
    }),
    BlogModule,
    UsersModule,
    AuthModule,
    ConfigModule,
  ],
})
export class AppModule {}
