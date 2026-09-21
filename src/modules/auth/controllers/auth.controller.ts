import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../../users/services/users.service';
import { AuthDto } from '../dto/login.dto';

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión para obtener el JWT' })
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto.username, authDto.password);
  }

  // ATENCIÓN: Usa esto UNA VEZ para crear tu usuario, y luego borra o comenta este endpoint.
  @Post('registrar-admin')
  @ApiOperation({ summary: 'Endpoint temporal para crear el primer administrador' })
  register(@Body() authDto: AuthDto) {
    return this.usersService.createAdmin(authDto.username, authDto.password);
  }
}