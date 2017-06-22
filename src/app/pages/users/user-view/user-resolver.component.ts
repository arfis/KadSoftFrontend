import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {UserApplicationService} from "../user.service";
import {UserInformation} from "../user.model";
import {Injectable} from "@angular/core";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class UserResolve implements Resolve<UserInformation> {

    constructor(private userSrv: UserApplicationService) {
    }

    resolve(route: ActivatedRouteSnapshot) {

        let userId : number = route.params['userId'];
        if (!userId)
            return null;

        return this.userSrv.getUserById(userId);
    }
}