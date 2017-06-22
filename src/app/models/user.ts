import {UserRole} from "./user-roles.model";
export class User {
    public id : number;
    public username : string;
    public firstname: string;
    public lastname: string;
    public email: string;
    public avatarUrl: string;
    public creationDate: string;
    public preferredLang: string;
    public role : UserRole;
    public connected: boolean = false;

    public constructor( data: any = {}) {
        this.id = data.id || '';
        this.username = data.username || '';
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.avatarUrl = data.avatarUrl || '';
        this.creationDate = data.creation_date || Date.now();
        this.preferredLang = data.preferredLang || null;
        this.connected = data.connected || false;
        this.role = data.role || '';
    }

    public getName() {
        return this.firstname + ' ' + this.lastname;
    }
}
