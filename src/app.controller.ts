import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestService } from './request/request.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly requestService: RequestService,
  ) {}

  @Render('home')
  @Get()
  public async getHomePage() {
    const listRequest = await this.requestService.getAll();
    return {
      list_request: listRequest,
    };
  }

  @Render('add')
  @Get('/add')
  public async getAddPage() {
    //
  }
}
