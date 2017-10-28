import { Component, OnInit } from '@angular/core';
import {Item} from "./item.model";
import {RestService} from "../../services/rest.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  item: string;
  products: Item[];

  constructor(private _restSrv: RestService) {
    _restSrv.getItems().subscribe(
        result => {
          this.products = result;
        },
        error => {
          console.log('error');
        }

    )
  }

  ngOnInit() {
  }

  saveItem() {
      console.log(this.item);
    let tempItem = new Item();
    tempItem.name = this.item;
    this._restSrv.addItem(tempItem).subscribe(
        result => {
          this.products.push(result);
        }
    )
  }

  updateItem(item) {
    this._restSrv.updateItem(item, item.id).subscribe(
        result => {
          console.log(result);
        },
        error => {
          console.log('problem');
        }
    )
  }

  removeItem(item) {
    this._restSrv.deleteItem(item.id).subscribe(
        result => {
          this.products.splice(this.item.indexOf(item,1));
        },
        error => {
          console.log('problem');
        }
    )
  }
}
