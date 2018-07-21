import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Order} from "../../pages/order/order.model";

@Component({
    selector: 'app-order-creation-form',
    templateUrl: './order-creation-form.component.html',
    styleUrls: ['./order-creation-form.component.css']
})
export class OrderCreationFormComponent implements OnInit{

    @Output() createEmitter = new EventEmitter<Order>();
    @Output() onFormChange = new EventEmitter<any>();
    @Input() order: Order;

    public orderForm: FormGroup;

    buildingTypes = ['Novostavba', 'Rekonstrukcia', 'Ine'];
    numberOfFloors = ['1PP', '1NP - nadzemne podlazie', '2NP - nedzemne podlazie', 'Ine'];
    orientations = ['S','SZ','Z','JZ','J','JV','V','SV'];
    constructor(private fb: FormBuilder,
                private loggedUserService: UserService,) {
    }

    ngOnInit(): void {
        this.createForm();
        this.orderForm.valueChanges.subscribe(
            result => this.onFormChange.next(this.orderForm)
        )
        this.onFormChange.next(this.orderForm);
    }

    createForm() {

        let disabledEmpty = {value: '', disabled: false};
        this.orderForm = this.fb.group({

            'text': ['', Validators.required],
            'companyString': [''],
            'name': [''],
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
                'numberOfFloors': [''],
                'heatGenerator': [''],
                'heatTechnology':[''],
                'hotWaterCirculation': [''],
                'solarSystem':[''],
                'fireplace':[''],
                'fireplaceEnergy':[''],
                'fireplaceHotWater':[''],
                'outerSize': [''],
                'wall':[''],
                'roof':[''],
                'floor':[''],
                'recapitulation':[''],
                'windows':[''],
                'entranceOrientation':[''],
                'note':['']
            })
        })

        if (this.order) {
            console.log('patching');
            this.orderForm.patchValue(this.order);
        }
    }

    get isOtherNumberOfFloors() {
        return true;
    }

    onSubmit({value}: { value: Order }) {
        this.createEmitter.emit(value);
    }
}