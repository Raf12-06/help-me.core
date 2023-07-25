import { Controller, Get } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestTypeE } from './model/request.model';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Get()
  public async create() {
    return await this.requestService.insert({
      point: {
        type: 'Point',
        coordinates: [54.753311, 55.990001],
      },
      request_type: RequestTypeE.deliver,
      description: 'asssss',
    });
  }
}
