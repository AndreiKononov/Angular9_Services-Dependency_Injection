import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DataComponent } from "./data.component";
import { DataService } from './data.service';
import { LogService } from './log.service';

@NgModule({
    imports:        [ BrowserModule, FormsModule], // set of another modules are used in current module
    declarations:   [ AppComponent, DataComponent ], // set of view classes of current module (There are three type of view classes in Angular: components, directives, pipes)
    bootstrap:      [ AppComponent ], //root component (runs by default when this app starts running)
    exports:        [], // set of view classes which will be use in another modules
    // both objects DataComponent will use the same service DataService (so adding data in any component will be displayed in another component)
    providers:      [ DataService, LogService ] // set of classes which create services for current module (registration of services)
})

export class AppModule { }