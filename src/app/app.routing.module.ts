import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveComponent } from "./reactive/reactive.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";


const routes: Routes =[
    {path:'', component: HomeComponent},
    {path:'reactivo', component: ReactiveComponent},
    {path:'template', component: ContactoComponent},
    {path:'home', component: HomeComponent},
    {path:'**', component:PagenotfoundComponent}
];

@NgModule({
    imports:[ 
        RouterModule.forRoot(routes)
    ], 
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}