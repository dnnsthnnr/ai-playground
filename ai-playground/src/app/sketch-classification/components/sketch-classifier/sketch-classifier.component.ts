import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {
  Array3D, CheckpointLoader, Graph, NDArrayInitializer, NDArrayMath, NDArrayMathCPU, NDArrayMathGPU, Session,
  Tensor
} from 'deeplearn';
import {sizeFromShape} from 'deeplearn/dist/src/util';
import 'rxjs/add/observable/of';
import {fadeInOutAnimation} from '../../../animations';
import {SketchClassificationModelService} from '../../service/sketch-classification-model.service';


@Component({
  selector: 'aip-sketch-classifier',
  templateUrl: './sketch-classifier.component.html',
  styleUrls: ['./sketch-classifier.component.scss'],
  animations: [
    fadeInOutAnimation
  ]
})
export class SketchClassifierComponent implements OnInit, AfterViewInit {

  private colors = [
    {
      backgroundColor: '#2196F3'
    },
    {
      backgroundColor: '#4CAF50'
    },
    {
      backgroundColor: '#03A9F4'
    },
    {
      backgroundColor: '#00BCD4'
    },
    {
      backgroundColor: '#009688'
    },
    {
      backgroundColor: '#8BC34A'
    },
    {
      backgroundColor: '#CDDC39'
    },
    {
      backgroundColor: '#FFEB3B'
    },
    {
      backgroundColor: '#FFC107'
    },
    {
      backgroundColor: '#FF9800'
    },
    {
      backgroundColor: '#FF5722'
    },
    {
      backgroundColor: '#B71C1C'
    },
    {
      backgroundColor: '#795548'
    },
    {
      backgroundColor: '#9E9E9E'
    },
    {
      backgroundColor: '#607D8B'
    },
    {
      backgroundColor: '#E91E63'
    },
  ];


  constructor(public modelSvc: SketchClassificationModelService, private host: ElementRef) {
    console.debug(this.host);
  }

  ngOnInit() {
    this.modelSvc.loadModel();
  }

  ngAfterViewInit() {
    this.modelSvc.predictionFinished.subscribe(() => {
      let box = this.host.nativeElement.getBoundingClientRect();

      // if less than half the host is visible scroll it into view TODO animate scrolling
      if (box.top > window.innerHeight - (box.bottom - box.top) / 2)
        this.host.nativeElement.scrollIntoView(true);
    })
  }


  /**
   * get the current lead class name
   * @returns {string}
   */
  getMaxClass(): string {
    let max = Math.max(...this.modelSvc.classScores);
    let idx = this.modelSvc.classScores.indexOf(max);
    return this.modelSvc.classes[idx];
  }

}
