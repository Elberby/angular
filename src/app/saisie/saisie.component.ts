import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saisie',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
 
 <section class="text-center">
    <h1>Saisie</h1>
  </section>
  <section>
    <form>
      <div class="input-group input-group-sm col-sm-12 m-0 p-0 mb-3">
        <input class="col-sm-12" placeholder="name" type="text" id="name" name="name" required>
      </div>
      <div class="input-group input-group-sm col-sm-12 m-0 p-0 mb-3">
        <input class="col-sm-12" placeholder={{input}} type="text" id="input" name="input" readonly required>
      </div>
      <div class="input-group input-group-sm col-sm-12 m-0 p-0 mb-3">
        <input class="col-sm-11" placeholder={{result}} type="text" id="input" name="input" readonly required>

        <select class="col-sm-1" name="pets" id="pet-select">
          <option value="parrot">u</option>
          <option value="dog">m²</option>
          <option value="cat">ml</option>
          <option value="hamster">m³</option>
          <option value="spider">l</option>
        </select>
      </div>
    </form>
  </section>
  <section>
    <div class="container-fluid p-0">

      <div class="row pb-2 m-0">
        <div class="col-sm-3">
          <button class="btn col-sm-12 btn-mauve" type="button">(</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12 btn-mauve" type="button">)</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12 btn-mauve" type="button" (click)="clear()">AC</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12 btn-mauve" type="button" (click)="deleteLastInput()">supp</button>
        </div>
      </div>

      <div class="row pb-2 m-0">
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('7')">7</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('8')">8</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('9')">9</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12 btn-bleu" type="button" (click)="multiply()">x</button>
        </div>
      </div>

      <div class="row pb-2 m-0">
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('4')">4</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('5')">5</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('6')">6</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12 btn-bleu" type="button" (click)="subtract()">-</button>
        </div>
      </div>

      <div class="row pb-2 m-0">
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('1')">1</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('2')">2</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('3')">3</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12 btn-bleu" type="button" (click)="add()">+</button>
        </div>
      </div>

      <div class="row pb-2 m-0">
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button" (click)="appendNumber('0')">0</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12" type="button">,</button>
        </div>
        <div class="col-sm-3">
          <button class="btn col-sm-12 btn-bleu" type="button" (click)="calculate()">=</button>
        </div>
        <div class="col-sm-3">
          <input class="btn btn-submit col-sm-12" type="button" value="Submit">
        </div>
      </div>

    </div>
  </section>

  `,
  styleUrls: ['./saisie.component.scss'],
})

export class SaisieComponent {
  input: string = ''; // Pour stocker les chiffres saisis
  result: string = ''; // Pour afficher le résultat final

  // Méthode pour ajouter un chiffre à l'entrée actuelle
  appendNumber(number: string) {
    this.input += number;
  }

  // Méthode pour effacer la dernière entrée
  deleteLastInput() {
    this.input = this.input.slice(0, -1);
  }

  // Méthode pour effectuer le calcul
  calculate() {
    // Vérifier si une opération est en cours
    if (this.input !== '') {
      this.result = eval(this.input).toString(); // Calculer le résultat et le stocker dans result
      this.input = ''; // Réinitialiser l'entrée pour permettre de nouveaux calculs
    }
  }

  // Méthode pour ajouter
  add() {
    this.input += '+';
  }

  // Méthode pour soustraire
  subtract() {
    this.input += '-';
  }

  // Méthode pour multiplier
  multiply() {
    this.input += '*';
  }

  // Méthode pour diviser
  divide() {
    this.input += '/';
  }

  // Méthode pour effacer les valeurs
  clear() {
    this.input = '';
    this.result = '';
  }
}

