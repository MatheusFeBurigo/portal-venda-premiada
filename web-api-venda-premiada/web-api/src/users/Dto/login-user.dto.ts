import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ description: 'O email do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'A senha do usuário' })
  @IsNotEmpty()
  password: string;
}
