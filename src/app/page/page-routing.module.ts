import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PageComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'grafica1', component: Grafic1Component },
        ],
      },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}