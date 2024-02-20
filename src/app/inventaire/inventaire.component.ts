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
  template: `
   <section class="text-center">
    <h1>Inventaire</h1>
  </section>
  <div *ngFor="let item of inventoryData">
    <p>Name: {{ item.name }}</p>
    <p>Input: {{ item.input }}</p>
    <p>Result: {{ item.result }}</p>
    <p>Unit: {{ item.unit }}</p>
  </div>

  `,
  styleUrls: ['./inventaire.component.css'],
})
export class InventaireComponent {
  @Input() inventoryData: any[] = [];

  constructor() {}
}
