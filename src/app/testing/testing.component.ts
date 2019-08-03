import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  allowNewServer: Boolean = false;
  serverName: string = "1234";

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
  },  5000 );

  setTimeout(() => {
    this.allowNewServer = false;
},  10000 );

}
 
// Event Binding
onClick() {
  alert("Hello World");
}

onUpdateServerName(event){
  // this.serverName = event.target.value;
 
   this.serverName = (<HTMLInputElement> event.target).value;
 }

  ngOnInit() {
  }
 
}
