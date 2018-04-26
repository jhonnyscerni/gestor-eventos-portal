import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoListComponent } from './evento-list/evento-list.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { PortalComponent } from './portal.component';

const routes: Routes = [
    { path: '', component: PortalComponent, children: [
      { path: '', component: EventoListComponent },
      { path: 'detail/:id', component: EventoDetailComponent },
    ]  }

];

export const portalRoutes: ModuleWithProviders = RouterModule.forChild(routes);
