import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'catalog-component',
  imports: [FormsModule,CommonModule,CardProductComponent],
  templateUrl: './catalog.component.html',

})
export class CatalogComponent {
@Input () products!:Product[];



}
