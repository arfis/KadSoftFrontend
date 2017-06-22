import {Enum} from "./Enum";
/**
 * Created by a619678 on 29. 5. 2017.
 */
export class UserRole extends Enum<string> {
    public static readonly admin = new Enum('Administrátor');
    public static readonly seller= new Enum('Obchodník');
    public static readonly technican = new Enum('Technik');
}