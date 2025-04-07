import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ComprovanteVendaImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  base: string;
}
