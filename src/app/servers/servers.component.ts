import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
   
  styles: [`
    p{
      color: red;
      font-size: 35px;
    }
  `]
})
export class ServersComponent implements OnInit {

  allowNewServer: Boolean = false;
  serverName: string = "1234";
  
  constructor() { 

    // Anonymus Function

  setTimeout(() => {
    this.allowNewServer = true;
},  2000 );   // 2000 is the time-out time. by default in mili-sec.
              // button gets deactivated in 2 sec.

setTimeout(() => {
    this.allowNewServer = false;  // button is activated in 4 sec.
}, 4000);
  
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
