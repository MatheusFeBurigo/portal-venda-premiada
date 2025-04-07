import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ComprovanteVendaImageService } from './comprovante-venda-image.service';

@Controller('images')
export class ComprovanteVendaImageController {

    constructor(private imageService: ComprovanteVendaImageService) {}

    @Post('upload-comprovante-venda')
    @UseInterceptors(FileInterceptor('files'))
    async uploadImage(@UploadedFile() file: Express.Multer.File) {
      if (!file) {
        throw new Error('File not found');
      }
      const base64Image = file.buffer.toString('base64');
      return this.imageService.saveImage(base64Image);
    }
}
