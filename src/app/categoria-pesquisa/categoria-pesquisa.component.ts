import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.css']
})
export class CategoriaPesquisaComponent implements OnInit {

  categorias = [
    { nome: 'Camisas', value: '1'},
    { nome: 'Camisetas', value: '2'},
    { nome: 'Blusa', value: '3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
