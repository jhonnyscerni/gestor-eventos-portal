import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../service/evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Evento } from '../../../domain/evento';


import * as Moment from 'moment'; /*  biblioteca de formatação de data/hora */

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.scss']
})
export class EventoDetailComponent implements OnInit {

  idEvento: number;


  evento: Evento = new Evento();


  isNew: boolean;

  constructor(
    private eventoService: EventoService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
  ) { }

  ngOnInit() {
    this.isNew = true;
    this.title.setTitle('Novo Evento');
    this.idEvento = this.route.snapshot.params['id'];
    this.processaEvento();
  }

  /**
  * Captura o id do Pessoa
  */
 processaEvento() {
  if (this.idEvento && !isNaN(this.idEvento)) {
    this.detalhe();
  } else {//se id não informado
    this.isNew = false;
  }
}

private detalhe() {
  this.isNew = false;

  this.eventoService.getEvento(this.idEvento).subscribe(evento => {
    this.eventoService.evento = evento;
    this.evento = this.eventoService.evento;
    this.atualizarTituloDetalhe();
  });

}

atualizarTituloDetalhe() {
  this.title.setTitle(`Evento: ${this.evento.nome}`);
}

public dateLayout(dt: any): String {
  return Moment(dt).format('DD [de] MMMM');
}


}
