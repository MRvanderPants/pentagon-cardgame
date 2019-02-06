import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

  public static cardElements = {
    0: 'border',
    1: 'art',
    2: 'name-tag--border',
    3: 'art-label',
    4: 'name-tag',
    5: 'thick-stroke--left',
    6: 'thick-stroke--right',
    7: 'icon',
    8: 'arrow-right--outer',
    9: 'arrow-right--inner',
    10: 'arrow-left--outer',
    11: 'arrow-left--inner'
  };

  public static staticURLs = {
    card: '../../assets/svg/card.svg'
  };

  public static colours = {
    black: '#2d2d2d',
    white: '#efefef',
    purple: '#a82fc4',
    yellow: '#ffff00'
  };

  public static defaultCardMap = [
    {
      id: 0,
      fill: Constants.colours.black,
      content: null
    }, {
      id: 1,
      fill: Constants.colours.white,
      content: null
    }, {
      id: 2,
      fill: Constants.colours.black,
      content: null
    }, {
      id: 3,
      fill: Constants.colours.black,
      content: null
    }, {
      id: 4,
      fill: Constants.colours.purple,
      content: null
    }, {
      id: 5,
      fill: Constants.colours.black,
      content: null
    }, {
      id: 6,
      fill: Constants.colours.black,
      content: null
    }, {
      id: 7,
      fill: Constants.colours.black,
      content: null
    }, {
      id: 8,
      fill: Constants.colours.black,
      content: null
    }, {
      id: 9,
      fill: Constants.colours.yellow,
      content: null
    }, {
      id: 10,
      fill: Constants.colours.black,
      content: null
    }, {
      id: 11,
      fill: Constants.colours.yellow,
      content: null
    }
  ];


  public static characterCardMap = Constants.defaultCardMap.filter(a => [0, 1, 2, 3, 4, 5, 6].indexOf(a.id) > -1);
  public static rightMoveCardMap = Constants.defaultCardMap.filter(a => [0, 1, 5, 6, 7, 8, 9].indexOf(a.id) > -1);
  public static leftMoveCardMap = Constants.defaultCardMap.filter(a => [0, 1, 5, 6, 7, 10, 11].indexOf(a.id) > -1);

  constructor() { }
}
