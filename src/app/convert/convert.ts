import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.css'
})
export class Convert {
  meter: number = 0
  feet: number = 0
  fahrenheit: number = 0
  celsius: number = 0

  convertFeet():void{
    this.feet = this.meter * 3.28084
  }

  convertMeters():void{
    this.meter = this.feet / 3.28084
  }

  convertCelsius():void{
    this.celsius = (this.fahrenheit - 32) / 1.8
  }

  convertFahrenheit():void{
    this.fahrenheit = this.celsius  * 1.8 + 32
  }
}
