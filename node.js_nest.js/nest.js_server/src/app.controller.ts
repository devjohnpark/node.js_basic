// Application Programming Interface Controller
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Express와 다르게 feature 별로 Class로 묶고 MVC 패턴을 사용하여 가독성과 유지보수성 향상
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('post')
  getPost(): string {
    return this.appService.getPost();
  }

  @Get('profile')
  getProfile(): string {
    return this.appService.getProfile();
  }
}
