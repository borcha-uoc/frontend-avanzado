import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */

// COMPONENTS
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';

// DIRECTIVES
import { FontSizeDirective } from './directives/fontsize.directive';

// PIPES

// SERVICES

const declarations = [AdminLayoutComponent, SidebarComponent, TopnavComponent, FontSizeDirective];
const exports = [
  CommonModule,
  FormsModule,
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule,
  AdminLayoutComponent,
  SidebarComponent,
  TopnavComponent
];
const providers = [];

@NgModule({
  imports: [CommonModule, FormsModule, FlexLayoutModule, MaterialModule, ReactiveFormsModule, RouterModule ],
  entryComponents: [],
  providers,
  declarations,
  exports
})
export class SharedModule {}
