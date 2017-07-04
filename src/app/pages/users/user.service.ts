import {Injectable} from "@angular/core";
import {Customer} from "./user.model";
import {Observable} from "rxjs/Observable";
import {RestService} from "../../services/rest.service";
import {Subscription} from "rxjs/Subscription";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class CustomerService{

    private customers : Customer[] = new Array();
    // public names = ["Ferdinand","Milan","Rastislav","Julius","Palo"];
    // public surnames = ["Vasko","Sokolsky","Stefanik","Hudacek","Zloduch"];

    constructor(private restServ : RestService){

    }


    getCustomerByEmail(email : string) : Observable<Customer>{
        if(this.customers.length <1){
            this.getCachedCustomers();
        }

        return Observable.of(this.customers.find(customer => customer.email.indexOf(email) > 0));

    }

    cacheCustomers(customers : Customer[]) {
        //TODO: Timer
        console.log("setting customers: ");
        console.log(customers);
        localStorage.setItem("customers",JSON.stringify(customers));
        localStorage.setItem("customers-download",JSON.stringify(new Date()));
        this.customers = customers;
    }

    getCachedCustomers(){
        this.customers = JSON.parse(localStorage.getItem("customers"));
        return this.customers;
    }

    getCustomers() : Observable<Customer[]>{
        return this.restServ.getCustomers();
    }

    removeCustomer(customer) : Observable<any>{
        return this.restServ.removeCustomer(customer);
    }

    createUser(customer : Customer) : Observable<Customer>{
        return this.restServ.createCustomer(customer);
    }

    getCachedUserById(customerId : number){
        console.log(customerId);

        console.log(this.customers);

        if (this.customers.length < 1){
            console.log("getting cached customers: ");
            this.customers = this.getCachedCustomers();
            console.log(this.customers);
        }
        console.log(this.customers);
        let customer = this.customers.find(customer => customer.id === customerId);
        console.log(customer);
        return customer;
    }
    // setFakeData(){
    //     for (let i:number=0;i<10;i++){
    //         let user : Customer = new Customer();
    //
    //         user.id = i;
    //         user.name = this.names[Math.floor(Math.random()*this.names.length)];
    //         user.email = "michalsevcikk"+i+"@gmail.com";
    //         user.phone = "091232123";
    //         user.surname = this.surnames[Math.floor(Math.random()*this.surnames.length)];
    //
    //         this.users.push(user);
    //     }
    // }

    getUserByMail(email : string) : Observable<Customer>{
        return this.restServ.getCustomerByEmail(email);
    }

    getUserById(customerId : number) : Observable<Customer>{

        return Observable.of(this.customers.find(customer => customer.id == customerId));
    }

}