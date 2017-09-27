import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "timestamp"})
export class TimestampPipe implements PipeTransform {

    private normalize(num: number): string {
        return `${ num > 9 ? num : "0" + num }`;
    }

    transform(value: number, format: string): string {
        let date: Date = new Date(value * 1000);
        if (format === "time") {
            let hours: number = date.getHours();
            let minutes: number = date.getMinutes();
            return `${ this.normalize(hours) }:${ this.normalize(minutes) }`;
        } else if (format === "date") {
            let month: number = date.getMonth() + 1;
            let day: number = date.getDate();
            return `${ this.normalize(month) }-${ this.normalize(day) }`;
        } else {
            let month: number = date.getMonth() + 1;
            let day: number = date.getDate();
            let hours: number = date.getHours();
            let minutes: number = date.getMinutes();
            return `${ this.normalize(month) }-${ this.normalize(day) } ${ this.normalize(hours) }:${ this.normalize(minutes) }`;
        }
    }
}
