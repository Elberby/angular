import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importez FormsModule

@Component({
  selector: 'app-inventaire',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // Importez FormsModule ici
  ],
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.scss'],
})
export class InventaireComponent {
  @Input() inventoryData: any[] = [];

  constructor() {}
}
