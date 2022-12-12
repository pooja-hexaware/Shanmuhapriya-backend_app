// // import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
// // import mongoose, { Decimal128, Document, Types } from 'mongoose';
// // import { Topping } from "src/topping/topping.model";
// // export type CartModel = Cart & Document 
// // @Schema()
// // export class Cart {
    
// //     @Prop({required: true})
// //     item: string;

// //     @Prop()
// //     store_id: number[];

// //     @Prop()
// //     base_price: number; // should be decimal

// //     @Prop()
// //     toppings: string[];

// //     @Prop()
// //     item_description: string;

// //     @Prop({type: [{type:Types.ObjectId, ref:Topping.name}]})
// //     topping: mongoose.Types.ObjectId[];
// // }

// // //SigninModel is Signin class and Document

// // export const MenuSchema = SchemaFactory.createForClass(Menu) //exporting schema by creating schema using schemafactory and createforclass(class=Signin)


// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
// import { Document, SchemaTypes } from 'mongoose'
// import { Item } from './item.model'

// export type CartModel = Cart & Document;

// @Schema()
// export class Cart {
//     @Prop({ type: SchemaTypes.ObjectId, ref: 'Restaurant' })
//     store_id: string;

//     @Prop()
//     items: Item[];

//     @Prop()
//     totalPrice: number;
// }

// export const CartSchema = SchemaFactory.createForClass(Cart);