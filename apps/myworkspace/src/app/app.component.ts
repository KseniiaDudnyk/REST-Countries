import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from './+state/app.reducer'
import { LoadApp } from './+state/app.actions';

@Component({
  selector: "myworkspace-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "myworkspace";

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadApp());
  }
}
