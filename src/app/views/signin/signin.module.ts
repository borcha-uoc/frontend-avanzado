import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SigninComponent],
  imports: [SharedModule, SigninRoutingModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, FlexLayoutModule],
  providers: []
})
export class SigninModule {}
