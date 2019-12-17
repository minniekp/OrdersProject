import {Deserializable} from './deserializable.model';
import { Recepient } from './recepient.model';
import { Item } from './item.model';
import { Delivery } from './delivery.model';
import { Charge } from './charge.model';


export class Order implements Deserializable {
  public id: string;
  public recepients: Recepient[] = [];
  public items: Item[] = [];
  public delivery: Delivery[] = [];
  public charge_customer: Charge[] = [];

  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize to prevent already deserialized from being overwritten.
    Object.assign(this, input);

    // Iterate over all prices for our user and map them to a proper `Tprice` model
    this.recepients = input.recepients.map(rec => new Recepient().deserialize(rec));
    this.items = input.items.map(item => new Item().deserialize(item));
    this.delivery = input.delivery.map(del => new Delivery().deserialize(del));
    this.charge_customer = input.charge_customer.map(charge => new Charge().deserialize(charge));

    return this;
}

}
