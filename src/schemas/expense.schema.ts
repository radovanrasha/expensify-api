import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
  @Prop({ required: true })
  name: string;

  @Prop()
  quantity: number;

  @Prop()
  category: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
