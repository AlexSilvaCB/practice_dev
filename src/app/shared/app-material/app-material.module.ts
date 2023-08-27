import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports: [
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
