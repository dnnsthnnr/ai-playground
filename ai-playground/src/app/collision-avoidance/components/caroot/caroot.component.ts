import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CASimulationService} from '../../service/casimulation.service';


@Component({
  selector: 'aip-caroot',
  templateUrl: './caroot.component.html',
  styleUrls: ['./caroot.component.scss']
})
export class CARootComponent implements OnInit {

  @ViewChild('renderContainer')
  private renderContainer: ElementRef;

  constructor(private simulationSvc: CASimulationService) {
  }

  ngOnInit() {
    this.simulationSvc.initSimulation(this.renderContainer.nativeElement);
  }

}
