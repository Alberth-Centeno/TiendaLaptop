"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLaptopDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_laptop_dto_1 = require("./create-laptop.dto");
class UpdateLaptopDto extends (0, swagger_1.PartialType)(create_laptop_dto_1.CreateLaptopDto) {
}
exports.UpdateLaptopDto = UpdateLaptopDto;
//# sourceMappingURL=update-laptop.dto.js.map