import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-certificado',
  templateUrl: './modal-certificado.component.html',
  styleUrls: ['./modal-certificado.component.scss']
})
export class ModalCertificadoComponent implements OnInit {

   tituloPai: string = 'Curso Logica de Programacao' ;
   tituloCurso2: string = 'Curso SQL com JDBC e Java';
   tituloCurso3: string = 'Persistencia com Spring Data + JPA';
   tituloCurso4: string = 'Spring boot Rest API com Javascript e Bootstrap';
   tituloCurso5: string = 'Curso Java/Spring + Angular';
   tituloCurso6: string = 'Scrum foundations professional certificate sfpc';

  bol: boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
