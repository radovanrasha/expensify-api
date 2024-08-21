import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/expensify'),
    ExpenseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
