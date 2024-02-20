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
      <div>
        <label for="calcule">Calculé</label>
        <input type="text" id="calcule" name="calcule">
      </div>
      <div>
        <label for="quantity">Quantité</label>
        <input type="number" id="quantity" name="quantity" required>
        <select name="pets" id="pet-select">
          <option value="parrot">u</option>
          <option value="dog">m²</option>
          <option value="cat">ml</option>
          <option value="hamster">m³</option>
          <option value="spider">l</option>
        </select>
      </div>
    </form>
  </section>

<div class="container-fluid">
 
  <div class="jumbotron col-sm-4 p-2 m-0 bg-inverse">
 
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-warning col-sm-3" type="button">(</button>
      <button class="btn btn-secondary col-sm-3" type="button">)</button>
      <button class="btn btn-warning col-sm-3" type="button">AC</button>
      <button class="btn btn-secondary col-sm-3" type="button">+</button>
    </div>
 
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">7</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">8</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">9</button>
      <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button">X</button>
    </div>
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">4</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">5</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">6</button>
      <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button">-</button>
    </div>
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">1</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">2</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">3</button>
      <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button">+</button>
    </div>
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">0</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button">,</button>
      <button class="btn btn-lg btn-success col-sm-3 p-1" type="button">=</button>
      <input class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" value="Submit">
    </div>
 
  </div>

  `,
  styleUrls: ['./saisie.component.css'],
})
export class SaisieComponent {

}
