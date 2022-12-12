// import { Controller, Post, Body, Request, UseGuards, Delete, NotFoundException, Param } from '@nestjs/common';
// // import { Roles } from 'src/auth/decorators/roles.decorator';
// // import { Role } from 'src/auth/enums/role.enum';
// // import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// // import { RolesGuard } from 'src/auth/guards/roles.guard';
// import { CartService } from './cart.service';
// import { ItemDTO } from './item-dto.dto';

// @Controller('cart')
// export class CartController {
//   constructor(private cartService: CartService) { }

// //   @UseGuards(JwtAuthGuard, RolesGuard)
// //   @Roles(Role.User)
//   @Post('/')
//   async addItemToCart(@Request() req, @Body() itemDTO: ItemDTO) {
//     const store_id = req.restaurant.store_id;
//     const cart = await this.cartService.addItemToCart(store_id, itemDTO);
//     return cart;
//   }

// //   @UseGuards(JwtAuthGuard, RolesGuard)
// //   @Roles(Role.User)
//   @Delete('/')
//   async removeItemFromCart(@Request() req, @Body() { item }) {
//     const store_id = req.restaurant.store_id;
//     const cart = await this.cartService.removeItemFromCart(store_id, item);
//     if (!cart) throw new NotFoundException('Item does not exist');
//     return cart;
//   }

// //   @UseGuards(JwtAuthGuard, RolesGuard)
// //   @Roles(Role.User)
//   @Delete('/:id')
//   async deleteCart(@Param('id') store_id: string) {
//     const cart = await this.cartService.deleteCart(store_id);
//     if (!cart) throw new NotFoundException('Cart does not exist');
//     return cart;
//   }
// }