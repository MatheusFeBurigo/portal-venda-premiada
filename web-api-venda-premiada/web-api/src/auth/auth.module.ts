import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: '0783c1daa71cbc1fa89ee747577ffed63767e22830044fc1f47cf20ff3ace090',
      signOptions: { expiresIn: '5h' },
    }),
  ],
  providers: [
    AuthService, 
    JwtStrategyService
  ],
  controllers: [AuthController],
})
export class AuthModule {}
