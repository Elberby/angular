import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saisie',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <section>
    <h1>Saisie</h1>
  </section>
  <section>
    <form>
      <div>
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" required>
      </div>
    </form>
    <div class="input-group input-group-sm col-sm-12 m-0 p-0">
      <div class="col-sm-12 form-control text-lg-right" type="text">{{input}}</div>
    </div>
    <div class="input-group input-group-sm col-sm-12 m-0 p-0">
      <div class="col-sm-10 form-control text-lg-right" type="text">{{result}}</div>
      <select class ="col-sm-2" name="pets" id="pet-select">
        <option value="parrot">u</option>
        <option value="dog">m²</option>
        <option value="cat">ml</option>
        <option value="hamster">m³</option>
        <option value="spider">l</option>
      </select>
    </div>
  </section>
  <section>
    <div class="container-fluid">
      <div class="jumbotron col-sm-4 p-2 m-0 bg-inverse">
    
        <div class="col-sm-12 p-1 m-0">
          <button class="btn btn-warning col-sm-3" type="button">(</button>
          <button class="btn btn-secondary col-sm-3" type="button">)</button>
          <button class="btn btn-warning col-sm-3" type="button" (click)="clear()">AC</button>
          <button class="btn btn-secondary col-sm-3" type="button" (click)="deleteLastInput()">supp</button>
        </div>
    
        <div class="col-sm-12 p-1 m-0">
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="appendNumber('7')">7</button>
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">8</button>
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">9</button>
          <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button" (click)="multiply()">x</button>
        </div>

        <div class="col-sm-12 p-1 m-0">
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">4</button>
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">5</button>
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">6</button>
          <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button" (click)="subtract()">-</button>
        </div>

        <div class="col-sm-12 p-1 m-0">
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">1</button>
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">2</button>
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">3</button>
          <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button" (click)="add()">+</button>
        </div>

        <div class="col-sm-12 p-1 m-0">
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">0</button>
          <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">,</button>
          <button class="btn btn-lg btn-success col-sm-3 p-1" type="button" (click)="calculate()">=</button>
          <input class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" value="Submit">
        </div>

      </div>
    </div>
  </section>
  `,
  styleUrls: ['./saisie.component.css'],
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

