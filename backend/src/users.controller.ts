import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('users')
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true },
      orderBy: { createdAt: 'asc' },
    });
    return users;
  }
}


