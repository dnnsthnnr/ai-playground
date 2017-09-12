import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {SketchClassificationModule} from './sketch-classification/sketch-classification.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RoadmapComponent} from './components/roadmap/roadmap.component';

@NgModule({
  declarations: [
    AppComponent,
    RoadmapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),

    AppRoutingModule,
    SketchClassificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
