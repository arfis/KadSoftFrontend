import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GlobalValidator} from "../../../helpers/GlobalValidator";
import {SelectItem} from "primeng/primeng";
import {NotificationService} from "../../../services/notification.service";
import {LoginUser} from "../../login/login-user.model";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    public email;
    public emailControl : AbstractControl;
    public userCreationForm: FormGroup;
    public userDetailForm: FormGroup;

    public users;

    public activeUserId;


    constructor(private userServ: UserService,
                private notificationSrv: NotificationService,
                private fb: FormBuilder) {

        this.userServ.getAllUsers().subscribe(
            users => {
                this.users = users;
            },
            error => {
                this.notificationSrv.error('Uzivatelia','chyba pri ziskavani dat');
            }
        )

        this.userCreationForm = this.fb.group({
            'email': ["",Validators.compose([Validators.required, GlobalValidator.mailFormat])],
            'roles':[[]]
        });

        this.userDetailForm = this.fb.group({
            'name':["", Validators.required],
            'surname' :[ "", Validators.required],
            'email' : ["", Validators.required],
            'roles': ["", Validators.required],
            'tmpPass':[""]
        })

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
        this.notificationSrv.error('Registracia neuspesna', 'Uzivatel uz existuje ');
    }

    removeUser(user) {
        window.confirm('Naozaj chcete odstranit pouzivatela? ')
        {
            this.userServ.deleteUser(user).subscribe(
                () => {
                    this.notificationSrv.success(`Pouzivatel ${user.username}`, 'bol uspesne odstraneny');
                }
            )
        }
    }

    openUser(user) {
        this.activeUserId = user.id;
        this.userDetailForm.patchValue(user);
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
            case "ROLE_TECHNICIAN" : return 'Technik'
            case "ROLE_DEALER" : return 'Obchodnik'
        }
    }

    onSubmit({value}: { value: LoginUser }) {

        delete value.email;

        if (value.tmpPass.length < 1) {
            delete value.tmpPass;
            console.log('removing password');
        }

        this.userServ.updateUser(value, this.activeUserId).subscribe(
            result => {
                this.notificationSrv.success(`Uzivatel ${value.name} ${value.surname}`, 'Bol uspesne modifikovany');
            },
            error => {
                this.notificationSrv.error(`Uzivatel ${value.name} ${value.surname}`, 'Nebol uspesne modifikovany');
            }
        )
    }
}
