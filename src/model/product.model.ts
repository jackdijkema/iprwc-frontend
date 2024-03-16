
export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public artist: string,
    public bio: string,
    public photoUrl: string,
  ) {}
}