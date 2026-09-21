import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLaptopDto } from '../dto/create-laptop.dto';
import { UpdateLaptopDto } from '../dto/update-laptop.dto';
import { Laptop } from '../entities/laptop.entity';

@Injectable()
export class LaptopsService {
  constructor(
    @InjectRepository(Laptop)
    private readonly laptopRepository: Repository<Laptop>,
  ) {}

  async create(createLaptopDto: CreateLaptopDto): Promise<Laptop> {
    const laptop = this.laptopRepository.create(createLaptopDto);
    return await this.laptopRepository.save(laptop);
  }

  async findAll(): Promise<Laptop[]> {
    // Solo retornamos las que están activas para el catálogo público
    return await this.laptopRepository.find({ where: { isActive: true } });
  }

  async findOne(id: string): Promise<Laptop> {
    const laptop = await this.laptopRepository.findOneBy({ id });
    if (!laptop) {
      throw new NotFoundException(`La laptop con ID ${id} no fue encontrada`);
    }
    return laptop;
  }

  async update(id: string, updateLaptopDto: UpdateLaptopDto): Promise<Laptop> {
    const laptop = await this.findOne(id);
    // Mezclamos la data existente con los nuevos valores
    const updatedLaptop = Object.assign(laptop, updateLaptopDto);
    return await this.laptopRepository.save(updatedLaptop);
  }

  async remove(id: string): Promise<void> {
    const laptop = await this.findOne(id);
    await this.laptopRepository.remove(laptop);
  }
}