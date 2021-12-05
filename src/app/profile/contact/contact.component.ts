import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  mail() {
    window.open("mailto:developer.tilak@gmail.com"+'?subject='+'Enquiry for app development');
  }
}
