export class Charge {
    public currency: string;
    public total_price: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
