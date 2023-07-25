import { Injectable } from '@nestjs/common';
import { RequestSql } from './model/request.sql';
import { Request, RequestCreateAttrs } from './model/request.model';

@Injectable()
export class RequestService {
  constructor(private requestSQL: RequestSql) {}

  public async insert(data: RequestCreateAttrs) {
    return await this.requestSQL.insert(data);
  }

  public async getAll(): Promise<Request[]> {
    return await this.requestSQL.all();
  }
}
