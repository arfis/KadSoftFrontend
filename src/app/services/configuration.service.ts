import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Company} from "../models/company-model";
import {Observable} from "rxjs/Observable";
/**
 * Created by a619678 on 6. 6. 2017.
 */
@Injectable()
export class ConfigurationService {

    public currentCompany: ReplaySubject<Company> = new ReplaySubject<Company>();
    private companies: Company[] = new Array();

    public removeCompany(company) : Observable<Company[]>{
        this.companies.splice(this.companies.indexOf(company),1);

        return Observable.of(this.companies);
    }

    // public getComapnies(): Observable<Company[]> {


        // if (this.companies.length < 1) {
        //     let company1 = new Company();
        //     let company2 = new Company();
        //
        //     company1.email = "podpora@energetickycertifikat.net";
        //     company1.name = "Ing. Jozef Kadlečík - Energetickycertifikat.net";
        //     company1.street = "M.R. Štefánika 3936/68";
        //     company1.city = "Hlohovec, 92001 SK";
        //     company1.accountNumber = "2312312312";
        //     company1.IBAN = "SK 932 1932 9129 129 93120";
        //     company1.SWIFT = "FIOZSKBAXXX";
        //     company1.accountNumber = "2189318293219/3213";
        //
        //     company2.email = "druha@firma.net";
        //     company2.name = "Ing. Stanislav Kadlečík - Firma.net";
        //     company2.street = "M.R. Štefánika 3936/68";
        //     company2.city = "Hlohovec, 92001 SK";
        //     company2.accountNumber = "2312312312";
        //     company2.IBAN = "SK 112 1222 3333 129 1120";
        //     company2.SWIFT = "FIOZSKBAXXX";
        //     company2.accountNumber = "1231213219/3213";
        //
        //     this.companies.push(company1);
        //     this.companies.push(company2);
        // }
        //
        // this.setCurrentCompany(this.companies[0]);
        // return Observable.of(this.companies);
    // }

    public setCurrentCompany(company: Company) {
        this.currentCompany.next(company);
    }

}