import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  state('visible', style({
    opacity: 1,
    visibility: 'visible'
  })),
  state('invisible', style({
    opacity: 0,
    visibility: 'hidden'
  })),
  transition('in => out', animate('1000ms ease-out')),
  transition('out => in', animate('1000ms ease-in'))
]);
