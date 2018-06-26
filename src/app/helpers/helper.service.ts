import { Injectable } from '@angular/core';
import {UserService} from "../services/user.service";

@Injectable()
export class HelperService {

  constructor(private _userServ: UserService) { }



}
