import {Deserializable} from './deserializable.model';
import { Recipient } from './recipient.model';
import { Item } from './item.model';
import { Delivery } from './delivery.model';
import { Charge } from './charge.model';


export class Order implements Deserializable {
  public id: string;
  public recipient: Recipient;
  public items: Item;
  public delivery: Delivery;
  public charge_customer: Charge;

  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize to prevent already deserialized from being overwritten.
    Object.assign(this, input);

    // Iterate over all prices for our user and map them to a proper `Tprice` model
    this.recipient = new Recipient().deserialize(input.recipient);
    this.items =  new Item().deserialize(input.items);
    this.delivery =  new Delivery().deserialize(input.delivery);
    this.charge_customer =  new Charge().deserialize(input.charge_customer);
    return this;
}

}
