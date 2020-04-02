import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
        <p *while="condition">
            Hello Andrei!
        </p>
        <p *while="!condition">
            Bye-bye
        </p>
        <button (click)="toggle()">Toggle</button>`
})

export class AppComponent {

    condition: boolean = true;

    toggle() {
        this.condition = !this.condition;
    }
}
