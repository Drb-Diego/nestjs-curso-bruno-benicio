import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getAllUser() {
    return { message: 'Testeeee' };
  }
}
