import { LaptopsService } from '../services/laptops.service';
import { CreateLaptopDto } from '../dto/create-laptop.dto';
import { UpdateLaptopDto } from '../dto/update-laptop.dto';
export declare class LaptopsController {
    private readonly laptopsService;
    constructor(laptopsService: LaptopsService);
    create(createLaptopDto: CreateLaptopDto): Promise<import("../entities/laptop.entity").Laptop>;
    findAll(): Promise<import("../entities/laptop.entity").Laptop[]>;
    findOne(id: string): Promise<import("../entities/laptop.entity").Laptop>;
    update(id: string, updateLaptopDto: UpdateLaptopDto): Promise<import("../entities/laptop.entity").Laptop>;
    remove(id: string): Promise<void>;
}
