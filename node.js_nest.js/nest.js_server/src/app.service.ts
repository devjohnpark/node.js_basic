// Business logic (Feature)
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return 'Home Page!';
  }

  getPost(): string { 
    return 'Post Page!';
  }

  getProfile(): string {
    return 'Profile Page!';
  }
}

