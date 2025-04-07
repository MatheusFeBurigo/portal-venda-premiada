import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ImageRevenda {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'text' })
    base: string;
}
