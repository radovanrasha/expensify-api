import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense, ExpenseDocument } from '../schemas/expense.schema';

@Injectable()
export class ExpenseRepository {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<ExpenseDocument>,
  ) {}

  async findAll(): Promise<Expense[]> {
    return this.expenseModel.find().exec();
  }

  async create(expense: Expense): Promise<Expense> {
    const newExpense = new this.expenseModel(expense);
    return newExpense.save();
  }
}
