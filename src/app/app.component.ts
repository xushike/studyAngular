import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.title = 'hello';
  //   }, 2000);
  // }
  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'hello';
  //   }, 2000);
  // }
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
