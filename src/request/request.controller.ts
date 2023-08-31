import { Body, Controller, Post } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/createRequest.dto';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Post()
  public async create(@Body() data: CreateRequestDto) {
    return await this.requestService.insert({
      point: {
        type: 'Point',
        coordinates: data.coordinates,
      },
      request_type: data.request_type,
      description: data.description,
    });
  }
}
