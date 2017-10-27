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
    let tempItem = new Item();
    tempItem.name = this.item;
    this._restSrv.addItem(tempItem).subscribe(
        result => {
          console.log('was saved');
        }
    )
  }

  updateItem(item) {
    this._restSrv.updateItem(item, item.id).subscribe(
        result => {
          item = result;
        },
        error => {
          console.log('problem');
        }
    )
  }

  removeItem(item) {
    this._restSrv.deleteItem(item.id).subscribe(
        result => {
          console.log('success');
        },
        error => {
          console.log('problem');
        }
    )
  }
}
