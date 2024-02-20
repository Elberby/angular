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
          <app-saisie></app-saisie>
        </div>
        <div class="col-12 col-sm-6">
          <app-inventaire></app-inventaire>
        </div>
      </div>
    </div>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}