import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PageComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: "Dashboard" } },
      { path: 'progress', component: ProgressComponent, data: { titulo: "Progress" } },
      { path: 'grafica1', component: Grafic1Component, data: { titulo: "Grafica" } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: "Account settings" } },
      { path: 'promise', component: PromiseComponent, data: { titulo: "Promesas" } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: "RXJS" } },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
