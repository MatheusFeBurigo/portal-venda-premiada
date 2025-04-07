import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroVendaEntity } from './Dtos/cadastro-venda.entity';
import { ComprovanteVendaImage } from 'src/comprovante-venda-image/entities/comprovante-venda-image.entity';

@Injectable()
export class CadastroVendaService {
  constructor(
    @InjectRepository(CadastroVendaEntity)
    private cadastroVendaRepository: Repository<CadastroVendaEntity>,
    
    @InjectRepository(ComprovanteVendaImage)
    private comprovanteImageRepository: Repository<ComprovanteVendaImage>,
  ) {}

  async createCadastroVenda(serialNumber: string, base: string): Promise<CadastroVendaEntity> {
    const image = this.comprovanteImageRepository.create({ base });
    await this.comprovanteImageRepository.save(image);

    const venda = this.cadastroVendaRepository.create({
      serialNumber,
    });

    return await this.cadastroVendaRepository.save(venda);
  }
}
