import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GlobalValidator} from "../../../helpers/GlobalValidator";

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
                private fb: FormBuilder) {


        this.userCreationForm = this.fb.group({
            'email': ["",Validators.compose([Validators.required, GlobalValidator.mailFormat])]
        });

        this.emailControl = this.userCreationForm.get('email');

        console.log(this.emailControl.errors);
    }

    public registerUser({value}: { value: any }) {
        console.log('trying to send mail to: ' + value.email);
        this.userServ.registerUser(value);
    }

    ngOnInit() {
    }

}
