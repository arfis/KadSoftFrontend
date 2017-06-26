import {Injectable} from "@angular/core";
import {Customer} from "./user.model";
import {Observable} from "rxjs/Observable";
import {RestService} from "../../services/rest.service";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class CustomerService{

    private users : Customer[] = new Array();
    public names = ["Ferdinand","Milan","Rastislav","Julius","Palo"];
    public surnames = ["Vasko","Sokolsky","Stefanik","Hudacek","Zloduch"];

    constructor(private restServ : RestService){

    }

    getUsers() : Observable<Customer[]>{
        return this.restServ.getCustomers();
    }

    removeCustomer(customer) : Observable<any>{
        return this.restServ.removeCustomer(customer);
    }

    createUser(userInformation : Customer) : Observable<Customer>{
        userInformation.id = this.users.length+1;
        this.users.push(userInformation);

        return Observable.of(userInformation);
    }

    setFakeData(){
        for (let i:number=0;i<10;i++){
            let user : Customer = new Customer();

            user.id = i;
            user.name = this.names[Math.floor(Math.random()*this.names.length)];
            user.email = "michalsevcikk"+i+"@gmail.com";
            user.phone = "091232123";
            user.surname = this.surnames[Math.floor(Math.random()*this.surnames.length)];

            this.users.push(user);
        }
    }

    getUserByMail(email : string) : Observable<Customer>{
        let usr = this.users.find(user => user.email == email);
        return Observable.of(usr);
    }

    getUserById(userId : number) : Customer{
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