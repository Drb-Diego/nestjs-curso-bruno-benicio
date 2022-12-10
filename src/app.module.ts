import { Module } from '@nestjs/common';

import { CreditCardModule } from './entities/Creditcard/creditcard.module';
import { UserModule } from './entities/User/user.module';

import databaseConfig from './shared/database';

@Module({
  imports: [databaseConfig, CreditCardModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
