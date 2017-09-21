import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _isCollapsed = true;

  @ViewChild('header')
  private header: ElementRef;

  /**
   * close side navigation
   */
  closeMenu () {
    this._isCollapsed = true;
  }

  /**
   * get the computed header height
   * @returns {string}
   */
  getHeaderHeight() {
    return getComputedStyle(this.header.nativeElement).height;
  }


  // getter and setter

  get isCollapsed(): boolean {
    return this._isCollapsed;
  }

  set isCollapsed(value: boolean) {
    this._isCollapsed = value;
  }
}
