import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Country } from '../countries.interface';

@Component({
  selector: 'myworkspace-country-dialog',
  templateUrl: './country-dialog.component.html',
  styleUrls: ['./country-dialog.component.css']
})
export class CountryDialogComponent implements OnInit {

  countries: Country[];

  constructor(@Inject(MAT_DIALOG_DATA) public country: Country[]) { }

  ngOnInit() {

  }
}
