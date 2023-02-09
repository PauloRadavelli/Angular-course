import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Paulo';
  userData = {
    hobbie: ["Coding","Exercise","Listening to music"],
    job : "Front-end-developer",
    petName: "Zelda",
  };
  title = 'angular-project';
}
