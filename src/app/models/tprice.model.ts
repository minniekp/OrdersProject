import { Deserializable } from './deserializable.model';

export class Tprice implements Deserializable{
    public currency: string;
    public amount: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
