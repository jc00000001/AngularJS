import {Component, Input, OnInit} from '@angular/core';
import {Flight} from "../model/flight";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  private _selectedFlight: Flight;

  @Input()
  set selectedFlight(selectedFlight: Flight){
    this._selectedFlight = selectedFlight;
  }

  get selectedFlight(): Flight{
    return this._selectedFlight;
  }

  constructor() { }

  ngOnInit() {
  }

}
