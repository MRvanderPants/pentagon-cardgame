import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Constants } from '../../services/constants.service';
import { CardData } from '../../services/interfaces.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public canvas: any;
  public ctx: any;

  public drawing: any;
  public canvasHeight: number;
  public canvasWidth: number;

  constructor(private cardService: CardService) { }

  ngOnInit() {

    this.canvas = document.querySelector('#main-canvas');
    this.ctx = this.canvas.getContext('2d');

    const profile = {
      elements: Constants.characterCardMap,
      name: 'Test card',
      label: 'Khoa Việt\'s',
      icon: ''
    };

    console.log('profile', profile);

    this.getClientRect();
    this.cardService.createCard(profile, this.ctx);
  }

  /**
   * Gets the window dimensions
   */
  private getClientRect (): void {

    this.canvasHeight = window.innerHeight;
    this.canvasWidth = window.innerWidth;
  }
}
