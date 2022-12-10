import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getAllUser(): Promise<{ message: 'Testeeee' }> {
    return { message: 'Testeeee' };
  }
}
