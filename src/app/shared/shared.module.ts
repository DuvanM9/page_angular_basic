import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreadCrumbsComponent,
    SideBarComponent,
    HeaderComponent,
  ],
  exports: [
    BreadCrumbsComponent,
    SideBarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
