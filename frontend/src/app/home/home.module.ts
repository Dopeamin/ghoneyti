import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
