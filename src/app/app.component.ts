import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datosFila1: String[] = ["PRIMERO", "SEGUNDO"]
  datosFila2: String[] = ["TERCERO", "CUARTO"]
  textos: String[] = []
  buttonClick(number: number) {
    switch (number) {
      case 1:
        this.textos[number] = "SOY LA PRIMERA CELDA"
        break
      case 2:
        this.textos[number] = "SOY LA SEGUNDA CELDA"
        break
      case 3:
        this.textos[number] = "SOY LA TERCERA CELDA"
        break
      case 4:
        this.textos[number] = "SOY LA CUARTA CELDA"
        break
    }
  }
}
