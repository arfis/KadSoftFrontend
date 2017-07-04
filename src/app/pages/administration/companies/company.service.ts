import {Injectable, OnInit} from "@angular/core";
import {Company} from "../../../models/company-model";
import {RestService} from "../../../services/rest.service";
/**
 * Created by a619678 on 22. 5. 2017.
 */
@Injectable()
export class CompanyService {


    public companies: Company[];

    constructor(private restServ: RestService) {

    }

    cacheCompanies(companies : Company[]){
        this.companies = companies;

        localStorage.setItem("companies",JSON.stringify(companies));
        localStorage.setItem("companies-download",JSON.stringify(new Date()));
    }

    getCachedCompanies(){
        let companies = localStorage.getItem("companies");

        return companies;
    }

}