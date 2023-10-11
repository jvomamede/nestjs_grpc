import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop()
    account_id: string;
    @Prop()
    assert_id: string;
    @Prop()
    quantity: number;
    @Prop()
    status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
