import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-certificados',
  templateUrl: './card-certificados.component.html',
  styleUrls: ['./card-certificados.component.scss']
})
export class CardCertificadosComponent implements OnInit {

   tituloFilho: string = 'Curso Logica de Programacao';
   tituloCurso2: string = 'Curso SQL com JDBC e Java';
   tituloCurso3: string = 'Persistencia com Spring Data + JPA';
   tituloCurso4: string = 'Spring boot Rest API com Javascript e Bootstrap';
   tituloCurso5: string = 'Curso Java/Spring + Angular';
   tituloCurso6: string = 'Scrum foundations professional certificate sfpc';

  constructor() { }

  ngOnInit() {

  }

}
