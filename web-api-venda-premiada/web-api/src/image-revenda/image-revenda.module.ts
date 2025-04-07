import { Module } from '@nestjs/common';
import { ImageRevendaService } from './image-revenda.service';
import { ImageRevendaController } from './image-revenda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageRevenda } from './entities/image-revenda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageRevenda])],
  controllers: [ImageRevendaController],
  providers: [ImageRevendaService],
})
export class ImageRevendaModule {}
