import { Injectable } from '@angular/core';
import { LogService } from "./log.service";

@Injectable()
export class DataService {
    private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];
    constructor(private logService: LogService) { }

    getData(): string[] {
        this.logService.write("Operation of getting data");
        return this.data;
    }

    addData(name: string) {
        this.data.push(name);
        this.logService.write("Operation of adding data")
    }
}
