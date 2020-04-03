import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {

    private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9" ];
    constructor(@Optional() private logService: LogService) { } // to identify service as a optional service we have to apply decorator @Optional

    getData(): string[] {
        if (this.logService) this.logService.write("Operation of getting data");
        return this.data;
    }

    addData(name: string) {
        this.data.push(name);
        if (this.logService) this.logService.write("Operation of adding data");
    }
}

