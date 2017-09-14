import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _isCollapsed = true;

  @ViewChild('header')
  private header: ElementRef;

  ngOnInit() {
    document.body.onclick = () => {
      this._isCollapsed = true;
    }
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
