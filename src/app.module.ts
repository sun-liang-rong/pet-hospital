import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.production.env' });
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.development.env' });
} else {
  dotenv.config(); // 默认情况下加载 .env 文件
}
console.log('process.env.NODE_ENV', process.env);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.MYSQL_TYPE as any,
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PROT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
