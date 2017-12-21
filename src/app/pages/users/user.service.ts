import {Injectable} from "@angular/core";
import {Customer} from "./user.model";
import {Observable} from "rxjs/Observable";
import {RestService} from "../../services/rest.service";
import {Contact} from "../../models/contact.model";
import {InvoiceService} from "../invoice/invoice.service";
import {Invoice} from "../invoice/invoice.model";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class CustomerService{

    private customers : Customer[] = new Array();

    // TODO : invoice service wont inject
    constructor(private restServ : RestService){

    }

    public getCustomers() : Observable<Customer[]>{
        return this.restServ.getCustomers();
    }

    public removeCustomer(customer) : Observable<any>{
        return this.restServ.removeCustomer(customer);
    }

    public setCustomers(customers : Customer[]){
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

    getUserByMail(email : string) : Observable<Customer> {
        let usr = this.customers.find(user => user.mainContact.email == email);
        return Observable.of(usr);
    }

    getUserById(userId : number) : Customer {
        console.log("getting user");
        console.log(this.customers);
        let usr = this.customers.find(user => user.id == userId);

        if (!usr) {
           usr = new Customer();
           usr.id = userId;
        }

        return usr;
    }

    updateInformation(userId : number, information : string){
        this.getUserById(userId).information = information;
    }
}