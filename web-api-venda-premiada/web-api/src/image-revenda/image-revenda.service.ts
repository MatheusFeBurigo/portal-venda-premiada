import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageRevenda } from './entities/image-revenda.entity';

@Injectable()
export class ImageRevendaService {
  constructor(
    @InjectRepository(ImageRevenda)
    private imageRepository: Repository<ImageRevenda>,
  ) {}

  async saveImage(base64Image: string): Promise<ImageRevenda> {
    const image = this.imageRepository.create({ base: base64Image });
    return await this.imageRepository.save(image);
  }
}
