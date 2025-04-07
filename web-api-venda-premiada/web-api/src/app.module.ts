import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/Dto/user.entity';
import { Image } from './image/entities/image.entity';
import { ImageModule } from './image/image.module';
import { ImageRevendaModule } from './image-revenda/image-revenda.module';
import { ImageRevenda } from './image-revenda/entities/image-revenda.entity';
import { ComprovanteVendaImageModule } from './comprovante-venda-image/comprovante-venda-image.module';
import { ComprovanteVendaImage } from './comprovante-venda-image/entities/comprovante-venda-image.entity';
import { CadastroVendaModule } from './cadastro-venda/cadastro-venda.module';
import { CadastroVendaEntity } from './cadastro-venda/Dtos/cadastro-venda.entity';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    TypeOrmModule.forFeature([User, Image, ImageRevenda, CadastroVendaEntity, ComprovanteVendaImage]),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'SVR-DBTESTE',
      port: 1433,
      username: 'Sa',
      password: 'GTS!@##@!STG18', 
      database: 'VendaPremiada',
      entities: [User, Image, ImageRevenda, CadastroVendaEntity, ComprovanteVendaImage],
      synchronize: true,
      extra: {
        encrypt: true,
        trustServerCertificate: true,
      },
    }),
    ImageModule,
    ImageRevendaModule,
    ComprovanteVendaImageModule,
    CadastroVendaModule,
  ],
})
export class AppModule {}
