import { CartItem } from "./cartitem";

export class cart{
    items:CartItem[]=[];
    
    get totalPrice():number{
        let totalPrice =0;
        this.items.forEach(item => {
            totalPrice=totalPrice+item.price
            
        });
        return totalPrice;
    }
}

