// import { Injectable } from '@nestjs/common';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
// import { Cart, CartModel } from './cart.model';
// import { ItemDTO } from './item-dto.dto';
// import { CartRepo } from './cart.repo';

// @Injectable()
// export class CartService {
//   constructor(@InjectModel('Cart') 
//   private readonly cartRepo: CartRepo) { }

//   async createCart(store_id: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<Cart> {
//     const newCart = await this.cartRepo.create({
//       store_id,
//       items: [{  subTotalPrice }],
//       totalPrice
//     });
//     return newCart;
//   }

//   async getCart(store_id: string): Promise<CartModel> {
//     const cart = await this.cartRepo.findOne({ store_id });
//     return cart;
//   }

//   async deleteCart(store_id: string): Promise<Cart> {
//     const deletedCart = await this.cartRepo.findOneAndRemove({ store_id });
//     return deletedCart;
//   }

//   private recalculateCart(cart: CartModel) {
//     cart.totalPrice = 0;
//     cart.items.forEach(item1 => {
//       cart.totalPrice += (item1.quantity * item1.price);
//     })
//   }

//   async addItemToCart(store_id: string, itemDTO: ItemDTO): Promise<Cart> {
//     const { item, quantity, price } = itemDTO;
//     const subTotalPrice = quantity * price;

//     const cart = await this.getCart(store_id);

//     if (cart) {
//       const itemIndex = cart.items.findIndex((item1) => item1.item == item);

//       if (itemIndex > -1) {
//         let item1 = cart.items[itemIndex];
//         item1.quantity = Number(item1.quantity) + Number(quantity);
//         item1.subTotalPrice = item1.quantity * item1.price;

//         cart.items[itemIndex] = item1;
//         this.recalculateCart(cart);
//         return cart.save();
//       } else {
//         cart.items.push({ ...itemDTO, subTotalPrice });
//         this.recalculateCart(cart);
//         return cart.save();
//       }
//     } else {
//       const newCart = await this.createCart(store_id, itemDTO, subTotalPrice, price);
//       return newCart;
//     }
//   }

//   async removeItemFromCart(store_id: string, item: string): Promise<any> {
//     const cart = await this.getCart(store_id);

//     const itemIndex = cart.items.findIndex((item1) => item1.item == item);

//     if (itemIndex > -1) {
//       cart.items.splice(itemIndex, 1);
//       return cart.save();
//     }
//   }
// }