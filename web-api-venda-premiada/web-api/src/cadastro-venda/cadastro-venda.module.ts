import { Module } from "@nestjs/common";
import { CadastroVendaController } from "./cadastro-venda.controller";
import { CadastroVendaService } from "./cadastro-venda.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CadastroVendaEntity } from "./Dtos/cadastro-venda.entity";
import { ComprovanteVendaImage } from "src/comprovante-venda-image/entities/comprovante-venda-image.entity";


@Module({
    imports: [TypeOrmModule.forFeature([CadastroVendaEntity, ComprovanteVendaImage])],
    providers: [CadastroVendaService],
    exports: [CadastroVendaService],
    controllers: [CadastroVendaController],
  })
  export class CadastroVendaModule {}