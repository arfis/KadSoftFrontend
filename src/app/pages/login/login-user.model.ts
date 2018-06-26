export class LoginUser {
    id : number;
    connected: boolean;
    tmpPass: string;
    email : string;
    name : string;
    surname: string;
    roles : any[];
    avatarUrl: string = 'assets/img/stano.jpg';
    
    
    get userName() {
        return this.name + ' ' + this.surname;
    }
}