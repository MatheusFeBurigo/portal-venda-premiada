import { Module } from '@nestjs/common';
import { ComprovanteVendaImageController } from './comprovante-venda-image.controller';
import { ComprovanteVendaImageService } from './comprovante-venda-image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprovanteVendaImage } from './entities/comprovante-venda-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComprovanteVendaImage])],
  controllers: [ComprovanteVendaImageController],
  providers: [ComprovanteVendaImageService]
})
export class ComprovanteVendaImageModule {}
