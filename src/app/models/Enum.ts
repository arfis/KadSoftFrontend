/**
 * Created by a619678 on 29. 5. 2017.
 */
export class Enum<T> {
    public constructor(public readonly value: T) {}
    public toString() {
        return this.value.toString();
    }
}