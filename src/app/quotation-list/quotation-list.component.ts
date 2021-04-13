import {Component, Input} from '@angular/core';
import {Quotation} from '../models/quotation';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent{

  @Input()
  quotes: Quotation[];

  addVote(quotation: Quotation, value: number): void {
    quotation.votes += value;
  }

}
