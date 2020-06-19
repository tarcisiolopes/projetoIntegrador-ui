import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-categorias-grid',
  templateUrl: './categorias-grid.component.html',
  styleUrls: ['./categorias-grid.component.css']
})
export class CategoriasGridComponent{
  @Input() categorias = [];
}
