import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';
import { ConfigService } from '@nestjs/config';
@Module({
  controllers: [AuthController],
  providers: [AuthService, ...drizzleProvider, ConfigService],
})
export class AuthModule {}
