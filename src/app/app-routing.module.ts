import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
    path: '',
    // component: MainLayoutComponent,
    children: [
        { path: '', loadChildren: './view/portal/portal.module#PortalModule'},
    ]
}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
