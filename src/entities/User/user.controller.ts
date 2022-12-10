import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getAll')
  async getAllUser(): Promise<{ message: 'Testeeee' }> {
    return this.userService.getAllUser();
  }
}
