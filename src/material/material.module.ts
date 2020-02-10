import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardImage, MatCardModule, MatCardAvatar } from '@angular/material/card';
import { MatButton, MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
    
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
