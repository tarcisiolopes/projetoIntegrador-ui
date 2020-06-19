import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {

  tipos = [
    { label: 'Físico', value: '1'},
    { label: 'Jurídico', value: '2'}
  ];

  clientes = [
    { nome: 'Pollyana', sobrenome: 'Lamounier', tipo: 'Física', email: 'pollyanalam@gmail.com' },
    { nome: 'Ruither', sobrenome: 'Lopes', tipo: 'Física', email: 'ruilopes@gmail.com' },
    { nome: 'Ioná', sobrenome: 'Lopes', tipo: 'Física', email: 'iona@gmail.com' },
    { nome: 'Gislayne', sobrenome: 'Lopes', tipo: 'Física', email: 'gislayne@gmail.com' },
    { nome: 'Meron', sobrenome: 'Gomes', tipo: 'Física', email: 'meron@gmail.com' },
    { nome: 'Moacir', sobrenome: 'Gomes', tipo: 'Física', email: 'moacir@gmail.com' },
    { nome: 'Momas', sobrenome: 'Gomes', tipo: 'Física', email: 'momas@gmail.com' },
    { nome: 'Moema', sobrenome: 'Gomes', tipo: 'Física', email: 'moema@gmail.com' },
    { nome: 'Marisa', sobrenome: 'Gomes', tipo: 'Física', email: 'marisa@gmail.com' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
