import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
 // styleUrls: ['./success-alert.component.css']
 styles: [`
  p{
    color: red;
    font-size: 35px;
  }
 `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
