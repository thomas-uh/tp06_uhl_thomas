export class Address {
    public street: string;
    public zipCode: string;
    public city: string;

    constructor(street: string, zipCode: string, city: string) {
        this.street = street;
        this.zipCode = zipCode;
        this.city = city;
    }
}
