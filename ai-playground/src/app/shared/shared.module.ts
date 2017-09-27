import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IOSBlockerService} from './services/iosblocker.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    IOSBlockerService
  ],
})
export class SharedModule { }
