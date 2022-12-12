import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Decimal128, Document, Types } from 'mongoose';
import { Topping } from "src/topping/topping.model";
export type MenuModel = Menu & Document 
@Schema()
export class Menu {
    
    @Prop({required: true})
    item: string;

    @Prop()
    store_id: number[];

    @Prop()
    base_price: number; // should be decimal

    @Prop()
    item_description: string;

    // @Prop()
    // item_image: string;

    @Prop()
    toppings: string[];

    

    @Prop({type: [{type:Types.ObjectId, ref:Topping.name}]})
    topping: mongoose.Types.ObjectId[];
}

//SigninModel is Signin class and Document

export const MenuSchema = SchemaFactory.createForClass(Menu) //exporting schema by creating schema using schemafactory and createforclass(class=Signin)