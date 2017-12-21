import { Component, OnInit } from '@angular/core';
import {Item} from "./item.model";
import {RestService} from "../../services/rest.service";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  item: string;
  products: Item[];

  constructor(private _restSrv: RestService,
              private _notificationService: NotificationService) {
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
    console.log(this.item);
    console.log(tempItem.name);
    this._restSrv.addItem(tempItem).subscribe(
        result => {
          this.products.push(result);
        }
    )
  }


  removeItem(item) {
    this._restSrv.deleteItem(item.id).subscribe(
        result => {
            this._notificationService.success('bola uspesne odstranena','polozka');
            this.products.splice(this.products.indexOf(item),1);
        },
        error => {
          console.log('problem');
        }
    )
  }
}
