import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder} from "@angular/forms";
import {LoginUser} from "../login/login-user.model";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userUpdateForm;

  constructor(private _userSrv: UserService,
              private fb: FormBuilder,
              private _notificationSrv: NotificationService) {
    this.createForm();
  }

  ngOnInit() {
    let user = this._userSrv.getLoggedInUser();
    this.userUpdateForm.patchValue(user);
  }

  createForm() {
    this.userUpdateForm = this.fb.group({
      'name': [],
      'surname': [],
      'email': [{value:'',disabled:true}],
    });
  }

  resetPassword() {
    this._userSrv.resetPassword(this._userSrv.getLoggedInUser().email).subscribe(
        result => {
          this._notificationSrv.success('Reset hesla', 'Bol uspesne vykonany');
        },
        error => {
          this._notificationSrv.error('Reset hesla', 'Nastal problem pri resete hesla');
        }
    );
  }

  updateUser({value}:{value:LoginUser}){
    console.log('submitting');
    console.log(value);

    this._userSrv.updateCurrentUser(value).subscribe(
        result => {
          let currentUser = this._userSrv.getLoggedInUser();
          currentUser.name = value.name;
          currentUser.surname = value.surname;
          this._userSrv.setCurrentUser(currentUser);
          this._notificationSrv.success('Boli uspesne zmenene', 'Udaje');
        },
        error => {
          console.log('error');
            this._notificationSrv.error('Neboli uspesne zmenene', 'Udaje');
        }
    );
  }
}
