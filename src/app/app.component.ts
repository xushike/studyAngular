import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>

  <template #tpl>
    <span>I am span in template</span>
  </template>
`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Tour of Heroes';
  name: string = 'Semlinker';

  @ViewChild('tpl')
  tpl: TemplateRef<any>;

  bool: Boolean = true;

  @ViewChild('tpl')
  tplRef: TemplateRef<any>;

  @ViewChild('tpl', { read: ViewContainerRef })
  tplVcRef: ViewContainerRef;

  ngAfterViewInit() {
    console.dir(this.tpl);
    console.dir(this.tplVcRef);
    // this.tplVcRef.createEmbeddedView(this.tplRef);
  }

}
