import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './pages/home-content/home-content.component';
import { SearchClienteContentComponent } from './pages/search-cliente-content/search-cliente-content.component';

const routes: Routes = [
  {path: '', component: HomeContentComponent},
  {path: 'searchCliente', component: SearchClienteContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
