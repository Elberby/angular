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
      <section class="content">
        <app-saisie></app-saisie>
        <app-inventaire></app-inventaire>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}