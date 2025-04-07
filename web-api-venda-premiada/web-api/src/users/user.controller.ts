import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './Dto/user.entity';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() userData: { nome: string, email: string, password: string, revenda: string }): Promise<User> {
    const { nome, email, password, revenda } = userData;
    return this.usersService.createUser(nome, email, password, revenda);
  }
}
