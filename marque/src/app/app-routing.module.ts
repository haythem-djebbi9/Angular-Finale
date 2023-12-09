import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarquesComponent } from './marques/MarquesComponent';
import { AddMarqueComponent } from './add-marques/add-marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { RechercheParPaysComponent } from './recherche-par-pays/recherche-par-pays.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListePaysComponent } from './liste-pays/liste-pays.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MaruqueGuard } from './marque.guard';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { AddRoleUserComponent } from './add-role-user/add-role-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { VerificationcodeComponent } from './verificationcode/verificationcode.component';

const routes: Routes = [

  {path: "marques", component : MarquesComponent},
  {path: "add-marque", component : AddMarqueComponent,canActivate :[MaruqueGuard]},
  { path: "", redirectTo: "produits", pathMatch: "full" },
  {path : "add-produit", component : AddMarqueComponent, canActivate:[MaruqueGuard]},
  {path: "updateMarque/:id", component: UpdateMarqueComponent,canActivate :[MaruqueGuard]},
  {path: "rechercheParPays", component : RechercheParPaysComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listePays", component :ListePaysComponent,canActivate :[MaruqueGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: 'liste-users' , component:ListeUsersComponent},
  { path: 'add-role-user/:id', component: AddRoleUserComponent },
  {path:"ajouterUser",component:AddUserComponent},
  {path: "verificationcode", component: VerificationcodeComponent}


  
  ,






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
