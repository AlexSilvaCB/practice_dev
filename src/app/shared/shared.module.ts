import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AppMaterialModule
  ],
})
export class SharedModule { }
