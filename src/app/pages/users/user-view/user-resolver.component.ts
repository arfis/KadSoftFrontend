import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {CustomerService} from "../user.service";
import {Customer} from "../user.model";
import {Injectable} from "@angular/core";
import {RestService} from "../../../services/rest.service";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class UserResolve implements Resolve<Customer> {

    constructor(private userSrv: CustomerService, private _restService: RestService) {
    }

    resolve(route: ActivatedRouteSnapshot) {

        let userId : number = route.params['userId'];
        if (!userId)
            return null;

        console.log("getting user by id " + userId);

        let foundUser = this._restService.getCustomers().map(customers => customers.find(customer => customer.id == userId));

        return foundUser;
    }
}