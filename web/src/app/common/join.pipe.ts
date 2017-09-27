import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "join"})
export class JoinPipe implements PipeTransform {
    transform(value: any[], delimiter: string): string {
        let result = "";
        let idx = 0;
        for (const item of value) {
            result += item;
            if (idx < value.length - 1) result += delimiter;
            idx++;
        }
        return result;
    }
}
