import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Component({
//   // selector: 'app-header', // link normal div
//   // selector: '[app-header]', // attribute selector
//    selector : '.app-header' , // class selector
//    templateUrl: './header.component.html',
//    styleUrls: ['./header.component.css']
//  })
 
export class AppComponent {
  title = 'Angular-Programming';
}
