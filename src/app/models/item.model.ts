import { Deserializable } from './deserializable.model';
import { Tprice } from './tprice.model';

export class Item implements Deserializable {
    public id: string;
    public name: string;
    public quantity: number;
    public total_price: Tprice[];


    deserialize(input: any): this {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        Object.assign(this, input);
    
        // Iterate over all prices for our user and map them to a proper `Tprice` model
        this.total_price = input.total_price.map(tprice => new Tprice().deserialize(tprice));
    
        return this;
    }
}
