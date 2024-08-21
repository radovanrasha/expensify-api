import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModule } from './expense/expense.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/expensify'),
    ExpenseModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
