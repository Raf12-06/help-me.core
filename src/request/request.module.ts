import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { RequestSql } from './model/request.sql';
import { SequelizeModule } from '@nestjs/sequelize';
import { Request } from './model/request.model';

@Module({
  providers: [RequestService, RequestSql],
  controllers: [RequestController],
  imports: [SequelizeModule.forFeature([Request])],
  exports: [RequestService],
})
export class RequestModule {}
