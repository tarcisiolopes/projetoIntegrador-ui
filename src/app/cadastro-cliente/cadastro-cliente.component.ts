import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  tipos = [
    { label: 'Física', value: 'FISICA'},
    { label: 'Jurídica', value: 'JURIDICA'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
