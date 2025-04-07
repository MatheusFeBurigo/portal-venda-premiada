import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ComprovanteVendaImage } from "./entities/comprovante-venda-image.entity";
import { Repository } from "typeorm";

@Injectable()
export class ComprovanteVendaImageService {
    constructor(
        @InjectRepository(ComprovanteVendaImage)
        private imageRepository: Repository<ComprovanteVendaImage>,
      ) {}
    
      async saveImage(base64Image: string): Promise<ComprovanteVendaImage> {
        const image = this.imageRepository.create({ base: base64Image });
        return await this.imageRepository.save(image);
      }

}
