import { Injectable } from '@angular/core';
import { CardData } from './interfaces.service';
import { DataService } from './data.service';
import { Constants } from './constants.service';

@Injectable()
export class CardService {

  constructor(
    private dataService: DataService,
    private constants: Constants) { }

  /**
   * Inserts a new card onto the canvas
   * @param { CardData } profile The CardData profile dictating the cards content
   * @param { any } ctx The canvas context the card belongs to
   */
  public createCard (profile: CardData, ctx: any): void {

  this.dataService.getSVG('../../assets/svg/card.svg').then((svg) => {

    const parser = new DOMParser();
    const dom = parser.parseFromString(svg, 'text/xml');

    const wrapper = dom.childNodes[1];
    const children = wrapper['children'];

    for (let i = 0; i < children.length; i++) {

      const child = children[i];
      const points = child.attributes.points.nodeValue.split(' ');

      // Create coördinates from the nodeValue
      const coords = [];
      points.forEach((point) => {

        // Validate the value
        if (!point || point.length <= 0) {
          return;
        }

        const split = point.split(',');
        coords.push({
          x: split[0],
          y: split[1]
        });
      });

      const el = profile.elements.filter(a => a.id === i)[0];
      if (el) {

        const maxWidth = window.outerWidth * 0.1;

        console.log('el', el, maxWidth);

        ctx.beginPath();
        coords.forEach((coord) => {
          ctx.lineTo(coord.x * 0.25, coord.y * 0.25);
        });
        ctx.fillStyle = el.fill;
        ctx.lineTo(coords[0].x * 0.25, coords[0].y * 0.25);
        ctx.fill();
      }

      console.dir(child);
      console.log(points, coords, i);
    }
  });
}
}
