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

  produtos = [
    { nome: 'Pink Floyd', marca: 'Rock House', descricao: 'Camisa com bolso lateral', medida: 'M', cor: 'Preto', qtde: 15, preco: 25.95},
    { nome: 'Praiana', marca: 'Feito de Rap', descricao: null, medida: 'P', cor: 'Branco', qtde: 8, preco: 20.95},
    { nome: 'Hang Loose', marca: 'Relx', descricao: 'Camisa com estampa na frente', medida: 'P', cor: 'Azul', qtde: 2, preco: 21.95},
    { nome: 'Praiana', marca: 'Feito de Rap', descricao: null, medida: 'G', cor: 'Branco', qtde: 5, preco: 20.95},
    { nome: 'Chillin', marca: 'Feito de Rap', descricao: null, medida: 'PP', cor: 'Laranja', qtde: 6, preco: 20.95},
    // tslint:disable-next-line:max-line-length
    { nome: 'Secret', marca: 'Pamonha Doce Headshop', descricao: 'Camisa com bolso interno', medida: 'M', cor: 'Branco', qtde: 3, preco: 30.95},
    { nome: 'Pink Floyd', marca: 'Rock House', descricao: 'Camisa com bolso lateral', medida: 'M', cor: 'Preto', qtde: 15, preco: 25.95},
    { nome: 'Pink Floyd', marca: 'Rock House', descricao: 'Camisa com bolso lateral', medida: 'M', cor: 'Preto', qtde: 15, preco: 25.95},
    { nome: 'Pink Floyd', marca: 'Rock House', descricao: 'Camisa com bolso lateral', medida: 'M', cor: 'Preto', qtde: 15, preco: 25.95},
    { nome: 'Pink Floyd', marca: 'Rock House', descricao: 'Camisa com bolso lateral', medida: 'M', cor: 'Preto', qtde: 15, preco: 25.95},
    { nome: 'Pink Floyd', marca: 'Rock House', descricao: 'Camisa com bolso lateral', medida: 'M', cor: 'Preto', qtde: 15, preco: 25.95},
    { nome: 'Pink Floyd', marca: 'Rock House', descricao: 'Camisa com bolso lateral', medida: 'M', cor: 'Preto', qtde: 15, preco: 25.95}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
