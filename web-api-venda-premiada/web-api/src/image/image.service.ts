import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async saveImage(base64Image: string): Promise<Image> {
    const image = this.imageRepository.create({ base: base64Image });
    return await this.imageRepository.save(image);
  }
}
