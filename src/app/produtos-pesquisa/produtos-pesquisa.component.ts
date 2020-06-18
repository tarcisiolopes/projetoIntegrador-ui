import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-pesquisa',
  templateUrl: './produtos-pesquisa.component.html',
  styleUrls: ['./produtos-pesquisa.component.css']
})
export class ProdutosPesquisaComponent implements OnInit {

  categorias = [
    { label: 'Camisas', value: '1'},
    { label: 'Camisetas', value: '2'},
    { label: 'Blusa', value: '3'},
  ];

  cores = [
    { label: 'Preto', value: '1'},
    { label: 'Branco', value: '2'},
    { label: 'Azul', value: '3'},
    { label: 'Vermelho', value: '4'},
    { label: 'Verde', value: '5'},
    { label: 'Laranja', value: '6'},
    { label: 'Cinza', value: '7'},
    { label: 'Dourado', value: '8'},
  ];

  medidas = [
    { label: 'PP', value: '1'},
    { label: 'P', value: '2'},
    { label: 'M', value: '3'},
    { label: 'G', value: '4'},
    { label: 'GG', value: '5'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
