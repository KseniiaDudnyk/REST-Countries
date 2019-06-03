import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'myworkspace-country-toolbar',
  templateUrl: './country-toolbar.component.html',
  styleUrls: ['./country-toolbar.component.scss']
})
export class CountryToolbarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
  }

  someMethod() {
    this.trigger.openMenu();
  }

}
