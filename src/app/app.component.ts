import { Component } from '@angular/core';
import {Quotation} from './models/quotation';
import {QUOTES} from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'best-quotes-app';
  showForm = false;

  quotes: Quotation[] = QUOTES;


  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}
