import { Component } from '@angular/core';
import { SaisieComponent } from './saisie/saisie.component';
import { InventaireComponent } from './inventaire/inventaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SaisieComponent,
    InventaireComponent,
  ],
  template: `
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6">
          <app-saisie (dataSubmitted)="addToInventory($event)"></app-saisie>
        </div>
        <div class="col-12 col-sm-6">
          <app-inventaire [inventoryData]="inventoryData"></app-inventaire>

        </div>
      </div>
    </div>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'homes';

  inventoryData: any[] = [];

  constructor() {}

  addToInventory(data: any) {
    this.inventoryData.push(data);
  }
}