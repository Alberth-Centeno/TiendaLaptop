import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsBoolean, Min } from 'class-validator';

export class CreateLaptopDto {
  @ApiProperty({ example: 'Acer' })
  @IsString()
  brand: string;

  @ApiProperty({ example: 'Swift X 16' })
  @IsString()
  model: string;

  @ApiProperty({ example: 'AMD Ryzen 7' })
  @IsString()
  processor: string;

  @ApiProperty({ example: '16GB LPDDR5' })
  @IsString()
  ram: string;

  @ApiProperty({ example: '1TB SSD NVMe' })
  @IsString()
  storage: string;

  @ApiProperty({ example: 1250.50 })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({ example: 'https://ejemplo.com/foto.jpg' })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiPropertyOptional({ example: 'Laptop ideal para desarrollo y diseño.' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ default: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}