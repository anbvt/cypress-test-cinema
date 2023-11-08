export class ArrayUtils {
    public static add(arr: Array<any>, value: any): void {
        arr.push(value);
    }

    public static remove(arr: Array<any>, value: any):void{
        arr.splice(arr.indexOf(value),1);
    }
    public static checkExist(arr: Array<any>, value: any): boolean {
        return arr.indexOf(value) != -1 ? true: false;
    }
}