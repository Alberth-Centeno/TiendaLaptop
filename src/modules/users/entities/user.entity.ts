// src/users/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment', { type: 'int4' })
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string; // Aquí guardaremos la contraseña encriptada (hash)
}