import { Injectable } from '@angular/core';

export interface CardData {
  elements: Array<CardElement>;
  name: string;
  label: string;
  icon: string;
}

export interface CardElement {
  id: number;
  fill: string;
  content: any;
}


@Injectable()
export class Interfaces {

  constructor() { }

}
