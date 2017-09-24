import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GlobalValidator} from "../../../helpers/GlobalValidator";
import {SelectItem} from "primeng/primeng";
import {NotificationService} from "../../../services/notification.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public email;
    public emailControl : AbstractControl;
    public userCreationForm: FormGroup;

    constructor(private userServ: UserService,
                private notificationSrv: NotificationService,
                private fb: FormBuilder) {


        this.userCreationForm = this.fb.group({
            'email': ["",Validators.compose([Validators.required, GlobalValidator.mailFormat])],
            'roles':[[]]
        });

        this.emailControl = this.userCreationForm.get('email');

    }

    public registerUser({value}: { value: any }) {
        this.userServ.registerUser(value).subscribe(
            result => this.onSuccesfullRegistration(this.userCreationForm.value.email),
            error => this.onErrorWhileRegistration(error)
        )
    }

    onSuccesfullRegistration(email) {
        this.notificationSrv.success('Registrcia uspesna', 'Na mailovy ucet: ' + email + ' bola uspesne odoslana registracna sprava');
        this.userCreationForm.reset();
    }

    onErrorWhileRegistration(error) {
        this.notificationSrv.error('Registracia neuspesna', 'Nastal problem pri registracii: ' + error);
    }

    ngOnInit() {
    }

    get optionRoles() {
        let itemRoles: SelectItem[] = [];

        for (let role of this.userServ.roles) {
            itemRoles.push({label:this.getRoleLabel(role), value:role});
        }
        return itemRoles;
    }

    getRoleLabel(name) {
        switch(name){
            case "ROLE_ADMIN" : return 'Administrator'
            case "ROLE_TECHNICIAN" : 'Technik'
            case "ROLE_DEALER" : return 'Obchodnik'
        }
    }
}
