import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Country } from '../countries.interface';
import { CountryDialogComponent } from 'apps/myworkspace/src/app/country-dialog/country-dialog.component';

@Component({
  selector: 'myworkspace-country-button',
  templateUrl: './country-button.component.html',
  styleUrls: ['./country-button.component.css']
})
export class CountryButtonComponent implements OnInit {

  countryDialogRef: MatDialogRef<CountryDialogComponent>;

  @Input() country: Country[];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.countryDialogRef = this.dialog.open(CountryDialogComponent, { data: this.country });
  }

}
