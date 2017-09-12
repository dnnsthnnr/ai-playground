import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private isCollapsed = true;

  ngOnInit() {
    document.body.onclick = () => {
      this.isCollapsed = true;
    }
  }

}
