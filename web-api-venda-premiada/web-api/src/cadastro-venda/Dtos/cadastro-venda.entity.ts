import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CadastroVendaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Número de série do equipamento',
        example: '12345-ABCDE'
      })
    @Column({ unique: true })
    serialNumber: string;
}