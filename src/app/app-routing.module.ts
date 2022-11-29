import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PageRoutingModule } from './page/page-routing.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [

  // Aqui se espesifican las rutas definidas
  // path: /dahsboard PageRoutingModule
  // path: /auth AuthRoutingModule
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
