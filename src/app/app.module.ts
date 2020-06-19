import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { SelectButtonModule } from 'primeng/selectbutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { ProdutosGridComponent } from './produtos-grid/produtos-grid.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CategoriaPesquisaComponent } from './categoria-pesquisa/categoria-pesquisa.component';
import { CategoriasGridComponent } from './categorias-grid/categorias-grid.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { ClientePesquisaComponent } from './cliente-pesquisa/cliente-pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    MessageComponent,
    ProdutosPesquisaComponent,
    ProdutosGridComponent,
    CadastroProdutoComponent,
    CategoriaPesquisaComponent,
    CategoriasGridComponent,
    CadastroCategoriaComponent,
    ClientePesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    TooltipModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    AccordionModule,
    BrowserAnimationsModule,
    MenuModule,
    SelectButtonModule,
    InputNumberModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
