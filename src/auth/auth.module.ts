import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET_EXAMPLE } from 'src/constans/jwt.constans';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: JWT_SECRET_EXAMPLE,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ...drizzleProvider, ConfigService],
})
export class AuthModule {}
