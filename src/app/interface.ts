interface Recepient {
    name?: string;
    email?: string;
}

interface Delivery {
    courier?: string;
    method?: string;

}

interface chargeCustomer {
    currency?: string;
    total_price?: number;
}
interface Items {
    id?: string;
    name?: string;
}

export interface IOrder {
  recepient: Recepient[];
  totalPrice: chargeCustomer[];
  createdDate: string;
  items: Items[];
  deliveryDetails: Delivery[]; 
}