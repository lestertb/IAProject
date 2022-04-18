import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../../service/speech.service';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-interact-ia',
  templateUrl: './interact-ia.component.html',
  styleUrls: ['./interact-ia.component.scss']
})
export class InteractIAComponent implements OnInit {

  audio = new Audio();

  responseApi = '';

  public IAresponse: string = 'Bienvenido, soy LMD. Una inteligencia artificial. Dime que predicción quieres que realice, después de presionar start.';
  public IAresponse1: string = 'Para realizar la predicción de autos. Debes decir el nombre del dato seguido de su valor. Ejemplo:';
  public IAresponse11: string = '-Precio de venta 3.35, -Kilómetros recorridos 27000, -Año 2014';

  constructor(public speech: SpeechService, public apiService: ApiService) {
    this.speech.init();
  }

  ngOnInit(): void {
  }

  startService(): void {
    this.responseApi = '';
    this.speech.text = '';
    this.speech.start();
    this.speech.error = false;
  }

  onSubmit1(value: any): void {
    this.speech.showInputs1 = false;
    var formData = new FormData();
    formData.append("input1", value.input1);
    formData.append("input2", value.input2);
    formData.append("input3", value.input3);
    this.apiService.postModel1(formData)
      .subscribe((data: any) => {
        this.responseApi = data.result;
        this.audio.src = '../../assets/Respuesta.mp3';
        this.audio.load();
        this.audio.play();
      });
  }

}
