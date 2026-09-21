// src/laptops/entities/laptop.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('laptops')
export class Laptop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  brand: string;

  @Column({ type: 'varchar', length: 150 })
  model: string;

  @Column({ type: 'varchar', length: 150 })
  processor: string;

  @Column({ type: 'varchar', length: 50 })
  ram: string; // Ej: '16GB DDR5'

  @Column({ type: 'varchar', length: 100 })
  storage: string; // Ej: '512GB SSD NVMe'

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'text', nullable: true })
  imageUrl: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}