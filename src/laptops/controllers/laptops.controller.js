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
exports.LaptopsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const laptops_service_1 = require("../services/laptops.service");
const create_laptop_dto_1 = require("../dto/create-laptop.dto");
const update_laptop_dto_1 = require("../dto/update-laptop.dto");
let LaptopsController = class LaptopsController {
    laptopsService;
    constructor(laptopsService) {
        this.laptopsService = laptopsService;
    }
    create(createLaptopDto) {
        return this.laptopsService.create(createLaptopDto);
    }
    findAll() {
        return this.laptopsService.findAll();
    }
    findOne(id) {
        return this.laptopsService.findOne(id);
    }
    update(id, updateLaptopDto) {
        return this.laptopsService.update(id, updateLaptopDto);
    }
    remove(id) {
        return this.laptopsService.remove(id);
    }
};
exports.LaptopsController = LaptopsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar una nueva computadora' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Computadora creada exitosamente.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_laptop_dto_1.CreateLaptopDto]),
    __metadata("design:returntype", void 0)
], LaptopsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todo el catálogo de computadoras' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LaptopsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener los detalles de una computadora específica' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LaptopsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una computadora existente' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_laptop_dto_1.UpdateLaptopDto]),
    __metadata("design:returntype", void 0)
], LaptopsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una computadora' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LaptopsController.prototype, "remove", null);
exports.LaptopsController = LaptopsController = __decorate([
    (0, swagger_1.ApiTags)('Laptops'),
    (0, common_1.Controller)('laptops'),
    __metadata("design:paramtypes", [laptops_service_1.LaptopsService])
], LaptopsController);
//# sourceMappingURL=laptops.controller.js.map