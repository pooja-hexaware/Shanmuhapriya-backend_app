import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import {RestauantModule} from './restaurant/restaurant.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { MenuModule } from './menu/menu.module';
import { ToppingModule } from './topping/topping.module';
import { ToppingController } from './topping/topping.controller';
import { ToppingService } from './topping/topping.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://root:root@cluster1.s4aksfe.mongodb.net/wiwi?retryWrites=true&w=majority"
    ),
    RestauantModule,
    MenuModule,
    ToppingModule
  ],
  
  controllers: [AppController, RestaurantController, MenuController, ToppingController],
  providers: [AppService, RestaurantService, MenuService, ToppingService],
})
export class AppModule {}
