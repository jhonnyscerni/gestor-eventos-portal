import { HeaderComponent } from './header/header.component';
import { NgModule, LOCALE_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { portalRoutes } from './portal-routes';
import { SharedModule } from '../../@core/shared/shared.module';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoService } from '../../service/evento.service';
import { DateTimeService } from '../../@core/util/date-time.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import * as Moment from 'moment';
import { NavbarComponent } from './navbar/navbar.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { FormsModule } from '@angular/forms';

export const MY_MOMENT_FORMATS: any = { // See the Moment.js docs for the meaning of these formats: https://momentjs.com/docs/#/displaying/format/

  parseInput: 'l LT',

  fullPickerInput: 'l LT',

  datePickerInput: 'l',

  timePickerInput: 'LT',

  monthYearLabel: 'MMM YYYY',

  dateA11yLabel: 'LL',

  monthYearA11yLabel: 'MMMM YYYY',

};

@NgModule({
  imports: [
    CommonModule,
    portalRoutes,
    SharedModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  declarations: [PortalComponent,
    EventoListComponent,
    NavbarComponent,
    HeaderComponent,
    EventoDetailComponent
],
  providers: [
    EventoService,
    DateTimeService,
    { provide: 'moment', useFactory: (): any => Moment },

    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
})
export class PortalModule {
  constructor(@Inject('moment') public moment: any,

    domSanitizer: DomSanitizer) {

    this.moment.locale('pt-br');

  }
}
