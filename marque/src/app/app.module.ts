import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarquesComponent } from './marques/MarquesComponent';
import { AddMarqueComponent } from './add-marques/add-marques.component';
import { FormsModule } from '@angular/forms';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParPaysComponent } from './recherche-par-pays/recherche-par-pays.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListePaysComponent } from './liste-pays/liste-pays.component';
import { UpdatePayComponent } from './update-pay/update-pay.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddpayComponent } from './addpay/addpay.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { VerificationcodeComponent } from './verificationcode/verificationcode.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRoleUserComponent } from './add-role-user/add-role-user.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';


@NgModule({
  declarations: [
    AppComponent,
    MarquesComponent,
    AddMarqueComponent,
    UpdateMarqueComponent,
    RechercheParPaysComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListePaysComponent,
    UpdatePayComponent,
    LoginComponent,
    ForbiddenComponent,
    AddpayComponent,
    VerificationcodeComponent,
    AddUserComponent,
    AddRoleUserComponent,
    ListeUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
