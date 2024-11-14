import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResponsablesComponent } from './responsables/responsables.component';
import { InventoresComponent } from './inventores/inventores.component';
import { FormComponent } from './inventores/form.component';

export const routes: Routes = [
    {path:'', redirectTo:'/inventores', pathMatch:'full'},
    {path:'header', component: HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'inventores', component:InventoresComponent},
    {path:'responsables', component:ResponsablesComponent},
    {path:'inventores/form', component:FormComponent},
    {path:'inventores/form/:id', component:FormComponent},

];
