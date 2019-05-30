import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Country } from '../countries.interface';
import { CountryDialogComponent } from '../country-dialog/country-dialog.component';

@Component({
  selector: 'myworkspace-country-button',
  templateUrl: './country-button.component.html',
  styleUrls: ['./country-button.component.scss']
})
export class CountryButtonComponent implements OnInit {

  countryDialogRef: MatDialogRef<CountryDialogComponent>;

  @Input() country: Country[];

  @Input() showName = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.countryDialogRef = this.dialog.open(CountryDialogComponent, { data: this.country });
  }

}
