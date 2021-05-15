import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo111')
  newEndpoint() {
    return 'yo soy nuevo asdasds';
  }

  
  @Get('nuevo2')
  newEndpoint2() {
    return 'yo soy nuevo';
  }


  @Get('tasks')
  tasks() {
    return this.appService.getTasks();
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
}
