import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.css']
})
export class CategoriaPesquisaComponent implements OnInit {

  categorias = [
    { label: 'Camisas', value: '1'},
    { label: 'Camisetas', value: '2'},
    { label: 'Blusa', value: '3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
