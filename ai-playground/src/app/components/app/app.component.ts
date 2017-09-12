import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private isCollapsed = true;

  @ViewChild('header')
  private header : ElementRef;

  ngOnInit() {
    document.body.onclick = () => {
      this.isCollapsed = true;
    }
  }

  getHeaderHeight() {
    return getComputedStyle(this.header.nativeElement).height;
  }

}
