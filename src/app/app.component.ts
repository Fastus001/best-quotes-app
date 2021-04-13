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

  quotes: Quotation[] = QUOTES;

  bestQuotes(): Quotation[] {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes(): Quotation[] {
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation: Quotation): void {
    this.quotes.unshift(quotation);
  }
}
