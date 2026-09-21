import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneByUsername(username: string): Promise<User | undefined> {
    return (await this.userRepository.findOne({ where: { username } })) ?? undefined;
  }

  // Usaremos este método solo una vez para crear tu cuenta
  async createAdmin(username: string, passwordPlain: string): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passwordPlain, salt);

    const newUser = this.userRepository.create({
      username,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }
}