export class Delivery {
    public courier: string;
    public method: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
