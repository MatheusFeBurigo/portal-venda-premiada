import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImageRevendaService } from './image-revenda.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image-revenda')
export class ImageRevendaController {
  constructor(private readonly imageRevendaService: ImageRevendaService) {}

  @Post('upload-revenda')
  @UseInterceptors(FileInterceptor('files'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new Error('File not found');
    }
    const base64Image = file.buffer.toString('base64');
    return this.imageRevendaService.saveImage(base64Image);
  }
}
