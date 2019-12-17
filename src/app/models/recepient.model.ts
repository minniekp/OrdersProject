export class Recepient {
    public name: string;
    public email: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
