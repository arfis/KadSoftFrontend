import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Order} from "../../pages/order/order.model";

@Component({
    selector: 'app-order-creation-form',
    templateUrl: './order-creation-form.component.html',
    styleUrls: ['./order-creation-form.component.css']
})
export class OrderCreationFormComponent {

    @Output()
    createEmitter = new EventEmitter<Order>();

    public orderForm: FormGroup;

    buildingTypes = ['Novostavba','Rekonstrukcia'];
    numberOfFloors = ['1PP','1NP - nadzemne podlazie', '2NP - nedzemne podlazie','Ine'];

    constructor(private fb: FormBuilder,
                private loggedUserService: UserService,) {
        this.createForm();
    }


    createForm() {

        let disabledEmpty = {value: '', disabled: false};
        this.orderForm = this.fb.group({

            'text': ['opis', Validators.required],
            'assignedTo': [{
                value: this.loggedUserService.getLoggedInUser().userName,
                disabled: true
            }, Validators.required],
            'name': [{value: 'nazov', disabled: true}, Validators.required],
            'createdBy': [{
                value: this.loggedUserService.getLoggedInUser().userName,
                disabled: true
            }, Validators.required],
            'survey': this.fb.group({
                'constructionOwner': [''],
                'constructionPlace': [''],
                'parcel': [''],
                'building': [''],
                'otherBuilding': [''],
                'buildingPermit': [''],
                'numberOfFloors':[''],
            })
        })
    }

    onSubmit({value}: { value: Order }) {
        console.log(value);
        this.createEmitter.emit(value);
    }
}