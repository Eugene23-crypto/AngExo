import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  name = 'Eugène';
  users = [
    {name : "Adé", sexe: 'F'},
    {name: "Steeve", sexe: 'F'},
  ]

  greet(){
    return `Hello ${this.name} you are welcome`;
  }

  bye(name: string){
    return `Bye ${name} see you later`;
  }
}
