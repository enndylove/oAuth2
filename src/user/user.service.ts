import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as sc from 'src/schema';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as q from 'drizzle-orm';

@Injectable()
export class UserService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof sc>,
  ) {}
}
