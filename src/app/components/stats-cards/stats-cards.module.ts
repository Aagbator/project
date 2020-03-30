import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmallCardOneComponent} from "./small-card-one/small-card-one.component";
import { SmallCardTwoComponent } from './small-card-two/small-card-two.component';
import {PercentBarComponent} from "../percent-bar/percent-bar.component";
import { SmallCardThreeComponent } from './small-card-three/small-card-three.component';
import { BigCardOneComponent } from './big-card-one/big-card-one.component';
import { BigCardTwoComponent } from './big-card-two/big-card-two.component';



@NgModule({
  declarations: [SmallCardOneComponent, SmallCardTwoComponent, PercentBarComponent, SmallCardThreeComponent, BigCardOneComponent, BigCardTwoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SmallCardOneComponent, SmallCardTwoComponent, SmallCardThreeComponent, BigCardOneComponent, BigCardTwoComponent
  ]
})
export class StatsCardsModule { }
