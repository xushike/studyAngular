import { Component, ViewChild, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  <ng-template #tpl>
  <span>I am span in template</span>
</ng-template>
<p>slkjfdlkasfjlkdsjlf;jdsl;fajldksjklfjkslfjlkdsfjlkdsj</p>

<ng-template [ngIf]="true"> <label>hello</label></ng-template>
<label *ngIf="true">hello2</label>
`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Tour of Heroes';
  name: string = 'Semlinker';

  @ViewChild('tpl')
  tpl: TemplateRef<any>;

  bool: Boolean = true;

  ngAfterViewInit() {
    let embeddedView = this.tpl.createEmbeddedView(null);
    console.dir(embeddedView);
  }

}
