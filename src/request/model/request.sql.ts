import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request, RequestCreateAttrs } from './request.model';

@Injectable()
export class RequestSql {
  constructor(
    @InjectModel(Request)
    private requestRepo: typeof Request,
  ) {}

  public async insert(data: RequestCreateAttrs): Promise<Request> {
    return await this.requestRepo.create(data);
  }

  public async one(idRequest: number): Promise<Request> {
    return await this.requestRepo.findOne({
      rejectOnEmpty: true,
      where: {
        id: idRequest,
      },
    });
  }

  public async all(): Promise<Request[]> {
    return await this.requestRepo.findAll({
      raw: true,
    });
  }
}
