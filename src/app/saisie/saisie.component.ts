import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saisie',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss'],
})

export class SaisieComponent {
  @Output() dataSubmitted = new EventEmitter<any>();

  name: string = 'Hy';
  input: string = '';
  result: string = '';
  unit: string = '';

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
      // this.input = ''; // Réinitialiser l'entrée pour permettre de nouveaux calculs
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

  constructor() { }

  submit() {
    const data = {
      name: this.name,
      input: this.input,
      result: this.result,
      unit: this.unit,
    };
    this.dataSubmitted.emit(data);

    console.log(data);
  }
}

