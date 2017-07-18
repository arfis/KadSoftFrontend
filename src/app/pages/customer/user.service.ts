import {Injectable} from "@angular/core";
import {Customer} from "./user.model";
import {Observable} from "rxjs/Observable";
import {RestService} from "../../services/rest.service";
import {Contact} from "../../models/contact.model";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class CustomerService{

    private customers : Customer[] = new Array();
    public names = ["Ferdinand","Milan","Rastislav","Julius","Palo"];
    public surnames = ["Vasko","Sokolsky","Stefanik","Hudacek","Zloduch"];

    constructor(private restServ : RestService){

    }

    getCustomers() : Observable<any>{
        return this.restServ.getCustomers();
    }

    removeCustomer(customer) : Observable<any>{
        return this.restServ.removeCustomer(customer);
    }

    setCustomers(customers : Customer[]){
        console.log(customers);
        this.customers = customers;
    }


    // setFakeData(){
    //     for (let i:number=0;i<10;i++){
    //         let user : Customer = new Customer();
    //         user.mainContact = new Contact();
    //
    //         user.id = i;
    //         user.mainContact.name = this.names[Math.floor(Math.random()*this.names.length)];
    //         user.mainContact.email = "michalsevcikk"+i+"@gmail.com";
    //         user.mainContact.telephone = "091232123";
    //         user.mainContact.surname = this.surnames[Math.floor(Math.random()*this.surnames.length)];
    //
    //         this.users.push(user);
    //     }
    // }

    createCustomer(customer : Customer) : Observable<Customer>{
        return this.restServ.addCustomer(customer);
    }
    getUserByMail(email : string) : Observable<Customer>{
        let usr = this.customers.find(user => user.mainContact.email == email);
        return Observable.of(usr);
    }

    getUserById(userId : number) : Customer{
        console.log("getting user");

        let usr = this.customers.find(user => user.id == userId);
        console.log(usr);
        return usr;
    }

    updateInformation(userId : number, information : string){
        this.getUserById(userId).information = information;
    }
}