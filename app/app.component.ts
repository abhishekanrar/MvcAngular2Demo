import { Component } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: "my-app", template: "<h1>Hi Abhi  {{welcomeMessage}} is Working</h1>"
})
export class AppComponent {
    welcomeMessage: string = " Angular 2"
}