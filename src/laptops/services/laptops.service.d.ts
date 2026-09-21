import { Repository } from 'typeorm';
import { CreateLaptopDto } from '../dto/create-laptop.dto';
import { UpdateLaptopDto } from '../dto/update-laptop.dto';
import { Laptop } from '../entities/laptop.entity';
export declare class LaptopsService {
    private readonly laptopRepository;
    constructor(laptopRepository: Repository<Laptop>);
    create(createLaptopDto: CreateLaptopDto): Promise<Laptop>;
    findAll(): Promise<Laptop[]>;
    findOne(id: string): Promise<Laptop>;
    update(id: string, updateLaptopDto: UpdateLaptopDto): Promise<Laptop>;
    remove(id: string): Promise<void>;
}
