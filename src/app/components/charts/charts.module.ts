import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart1Component } from './chart1/chart1.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { PipechartComponent } from './pipechart/pipechart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [Chart1Component, PipechartComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    NgbModule
],
  exports: [Chart1Component, PipechartComponent]
})
export class ChartsModule { }
