export class LoginUser {
    id : number;
    connected: boolean;
    tmpPass: string;
    email : string;
    name : string;
    surname: string;
    roles : string[];
    avatarUrl: string = 'public/assets/img/stano.jpg';
    
    
    get userName() {
        return this.name + ' ' + this.surname;
    }
}