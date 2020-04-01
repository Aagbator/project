import { Component, OnInit } from '@angular/core';
import { single } from './data';


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

  ngOnInit(): void {
  }

  single: any[];
  view: any[] = [400, 350];

  // options
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  isExplodeSlices: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#efac00', '#2384b3', '#dd641f', '#929486']
  };

  constructor() {
    Object.assign(this,{ single });
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
