import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LaptopsService } from '../services/laptops.service';
import { CreateLaptopDto } from '../dto/create-laptop.dto';
import { UpdateLaptopDto } from '../dto/update-laptop.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'; // <-- Importa el Guard

@ApiTags('Laptops')
@Controller('laptops')
export class LaptopsController {
  constructor(private readonly laptopsService: LaptopsService) {}

  @Post()
  @UseGuards(JwtAuthGuard) // <-- Aplica el candado
  @ApiBearerAuth() // <-- Muestra el candado en Swagger
  @ApiOperation({ summary: 'Agregar una nueva computadora (Protegido)' })
  create(@Body() createLaptopDto: CreateLaptopDto) {
    return this.laptopsService.create(createLaptopDto);
  }

  // GET NO LLEVA GUARD porque es público para el catálogo
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
  @UseGuards(JwtAuthGuard) // <-- Aplica el candado
  @ApiBearerAuth() 
  @ApiOperation({ summary: 'Actualizar una computadora existente (Protegido)' })
  update(@Param('id') id: string, @Body() updateLaptopDto: UpdateLaptopDto) {
    return this.laptopsService.update(id, updateLaptopDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) // <-- Aplica el candado
  @ApiBearerAuth() 
  @ApiOperation({ summary: 'Eliminar una computadora (Protegido)' })
  remove(@Param('id') id: string) {
    return this.laptopsService.remove(id);
  }
}