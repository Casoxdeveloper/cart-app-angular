import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'div[card-product]',
  imports: [TruncatePipe],
  templateUrl: './card-product.component.html',

})
export class CardProductComponent {
  
  @Input() product!:Product;
  
}
