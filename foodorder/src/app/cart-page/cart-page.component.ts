import { Component, OnInit } from '@angular/core';
import { cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartitem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
cart!:cart

number!:number;

raj!:boolean


constructor(private cartservice:CartService){
 
  this.setcart();
}

setcart(){
  this.cart=this.cartservice.getCart();
}

ngOnInit(): void {
  
}
removefromcart(cartItem:CartItem){
  this.cartservice.removeFromCart(cartItem.food.id);
  this.setcart();
}

changequantity(cartItem:CartItem,quantityInString:string){
  const quantity=parseInt(quantityInString);
  this.cartservice.changeQuantity(cartItem.food.id,quantity)
  this.setcart();
}


}
