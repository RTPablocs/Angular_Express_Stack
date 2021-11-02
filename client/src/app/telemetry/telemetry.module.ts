import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBaseComponent } from './chart-base/chart-base.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    ChartBaseComponent,
    LineChartComponent,
    ChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TelemetryModule { }
