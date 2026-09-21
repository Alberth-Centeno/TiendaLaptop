import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para que el frontend pueda consumir la API sin problemas
  app.enableCors();

  // Activar validaciones globales usando class-validator
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina campos basura que no estén en el DTO
    forbidNonWhitelisted: true, // Retorna error si envían campos no esperados
  }));

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API - Catálogo de Computadoras')
    .setDescription('Documentación de los endpoints para el PMV del catálogo')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // La URL será http://localhost:3000/api/docs

  await app.listen(3000);
}
bootstrap();