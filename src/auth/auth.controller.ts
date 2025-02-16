import { Controller, Post, Body } from '@nestjs/common';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() dto: User) {
    return this.authService.signUp(dto);
  }
}
