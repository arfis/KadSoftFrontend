import {Injectable} from "@angular/core";
import {UserInformation} from "./user.model";
import {Observable} from "rxjs/Observable";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class UserApplicationService{

    private users : UserInformation[] = new Array();
    public names = ["Ferdinand","Milan","Rastislav","Julius","Palo"];
    public surnames = ["Vasko","Sokolsky","Stefanik","Hudacek","Zloduch"];

    getUsers() : Observable<UserInformation[]>{
        this.setFakeData();
        return Observable.of(this.users);
    }

    createUser(userInformation : UserInformation) : Observable<UserInformation>{
        userInformation.id = this.users.length+1;
        this.users.push(userInformation);

        return Observable.of(userInformation);
    }

    setFakeData(){
        for (let i:number=0;i<10;i++){
            let user : UserInformation = new UserInformation();

            user.id = i;
            user.name = this.names[Math.floor(Math.random()*this.names.length)];
            user.email = "michalsevcikk"+i+"@gmail.com";
            user.phone = "091232123";
            user.surname = this.surnames[Math.floor(Math.random()*this.surnames.length)];

            this.users.push(user);
        }
    }

    getUserByMail(email : string) : Observable<UserInformation>{
        let usr = this.users.find(user => user.email == email);
        return Observable.of(usr);
    }

    getUserById(userId : number) : UserInformation{
        if (this.users.length < 1){
            this.setFakeData();
        }

        let usr = this.users.find(user => user.id == userId);

        return usr;
    }

    updateInformation(userId : number, information : string){
        this.getUserById(userId).information = information;
    }
}