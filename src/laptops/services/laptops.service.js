"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaptopsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const laptop_entity_1 = require("../entities/laptop.entity");
let LaptopsService = class LaptopsService {
    laptopRepository;
    constructor(laptopRepository) {
        this.laptopRepository = laptopRepository;
    }
    async create(createLaptopDto) {
        const laptop = this.laptopRepository.create(createLaptopDto);
        return await this.laptopRepository.save(laptop);
    }
    async findAll() {
        return await this.laptopRepository.find({ where: { isActive: true } });
    }
    async findOne(id) {
        const laptop = await this.laptopRepository.findOneBy({ id });
        if (!laptop) {
            throw new common_1.NotFoundException(`La laptop con ID ${id} no fue encontrada`);
        }
        return laptop;
    }
    async update(id, updateLaptopDto) {
        const laptop = await this.findOne(id);
        const updatedLaptop = Object.assign(laptop, updateLaptopDto);
        return await this.laptopRepository.save(updatedLaptop);
    }
    async remove(id) {
        const laptop = await this.findOne(id);
        await this.laptopRepository.remove(laptop);
    }
};
exports.LaptopsService = LaptopsService;
exports.LaptopsService = LaptopsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(laptop_entity_1.Laptop)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LaptopsService);
//# sourceMappingURL=laptops.service.js.map