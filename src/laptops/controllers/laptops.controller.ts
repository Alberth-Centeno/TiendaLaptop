import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LaptopsService } from '../services/laptops.service';
import { CreateLaptopDto } from '../dto/create-laptop.dto';
import { UpdateLaptopDto } from '../dto/update-laptop.dto';

@ApiTags('Laptops') // Agrupa los endpoints en Swagger
@Controller('laptops')
export class LaptopsController {
  constructor(private readonly laptopsService: LaptopsService) {}

  @Post()
  @ApiOperation({ summary: 'Agregar una nueva computadora' })
  @ApiResponse({ status: 201, description: 'Computadora creada exitosamente.' })
  create(@Body() createLaptopDto: CreateLaptopDto) {
    return this.laptopsService.create(createLaptopDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todo el catálogo de computadoras' })
  findAll() {
    return this.laptopsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener los detalles de una computadora específica' })
  findOne(@Param('id') id: string) {
    return this.laptopsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una computadora existente' })
  update(@Param('id') id: string, @Body() updateLaptopDto: UpdateLaptopDto) {
    return this.laptopsService.update(id, updateLaptopDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una computadora' })
  remove(@Param('id') id: string) {
    return this.laptopsService.remove(id);
  }
}