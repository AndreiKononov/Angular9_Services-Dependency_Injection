import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <div>
                <input [(ngModel)]="newItem" placeholder = "Phone model" />
                <button (click)="addItem(newItem)">Add</button>
            </div>
            <table>
                <tr *ngFor="let item of items">
                    <td>{{item}}</td>
                </tr>
            </table>
        </div>
    `,
    providers: [ DataService ],    // Added DataService service only
})

export class AppComponent {

    newItem: string;
    items: string[] = [];
    constructor(private dataService: DataService) { }

    addItem(name: string) {
        this.dataService.addData(name);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}
