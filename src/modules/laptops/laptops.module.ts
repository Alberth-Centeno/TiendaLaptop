import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaptopsService } from './services/laptops.service';
import { LaptopsController } from './controllers/laptops.controller';
import { Laptop } from './entities/laptop.entity';
import { AuthModule } from '../auth/auth.module'; // <-- Importa el AuthModule

@Module({
  imports: [TypeOrmModule.forFeature([Laptop]), AuthModule],
  controllers: [LaptopsController],
  providers: [LaptopsService]
})
export class LaptopsModule {}