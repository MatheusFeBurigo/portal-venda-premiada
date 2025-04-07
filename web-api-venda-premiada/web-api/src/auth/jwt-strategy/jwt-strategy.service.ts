import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy){
    constructor() {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: 'da2c6c78e632db2882a6d69c6371c2fc15837665bcba9fe547cb4446f4cfb7aacfe60646e7bcea445ed9ce52f27a93612d8a546b2e7ddd44008a066243891871',
      });
    }
    
    async validate(payload: any) {
      return { userId: payload.sub, username: payload.username };
    }    
}
