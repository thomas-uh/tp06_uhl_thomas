import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product } from '../models/Product';

@Pipe({
    name: 'productNameFilter'
})
export class ProductNameFilterPipe implements PipeTransform {

    transform(products: Product[], name: string): Product[] {
        if (name.length === 0) {
            return products;
        }

        return products.filter(product => {
            return product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
        });
    }
}
