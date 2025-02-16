import {
  Injectable,
  Inject,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as sc from 'src/schema';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as q from 'drizzle-orm';
import type { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  saltOrRounds: number = 10;

  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof sc>,
  ) {}

  async validateUser(entity: User) {
    const user = await this.db.query.users.findFirst({
      columns: {
        email: true,
        password: true,
      },
      where: q.eq(sc.users.email, entity.email),
    });

    if (!user) throw new NotFoundException('User not found');

    const isMatch = await bcrypt.compare(entity.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }
  }

  async signUp(entity: User) {
    const hashPass = await bcrypt.hash(entity.password, this.saltOrRounds);

    return this.db
      .insert(sc.users)
      .values({
        email: entity.email,
        password: hashPass,
      })
      .returning();
  }

  async getAll() {
    return this.db.select().from(sc.users);
  }
}
