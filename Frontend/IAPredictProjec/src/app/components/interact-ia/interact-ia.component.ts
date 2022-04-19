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
  public IAresponse1: string = 'Para realizar la predicción de autos. Debes digitar los valores solicitados. Ejemplo:';
  public IAresponse11: string = '-Precio de venta 3.35, -Kilómetros recorridos 27000, -Año 2014';
  public IAresponse2: string = 'Para realizar la predicción de tiempo en una web. Debes digitar 1 o 0 si la acción se realizó. Ejemplo:';
  public IAresponse22: string = '-Compró 1, -Agregados al carro 1, -Compra exitosa 1';
  public IAresponse3: string = 'Para realizar la predicción del porcentaje grasa corporal. Debes digitar los valores solictados. Ejemplo:';
  public IAresponse33: string = '-Densidad 1.04, -Tamaño abdomen 98.8';
  public IAresponse4: string = 'Para realizar la predicción del precio de las acciones. Debes digitar los valores solictados. Ejemplo:';
  public IAresponse44: string = '-Valor inicial 12.6, -Valor más alto 14.3';
  public IAresponse5: string = 'Para realizar la predicción de la popularidad de un juego. Debes digitar los valores solictados. Ejemplo:';
  public IAresponse55: string = '-Total de comerciantes 1000, -Total de comentarios 7000';
  public IAresponse6: string = 'Para realizar la predicción del precio de un seguro de un cliente. Debes digitar los valores solictados. Ejemplo:';
  public IAresponse66: string = '-Cargos 50000';


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
    this.speech.error = true;
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

  onSubmit2(value: any): void {
    this.speech.showInputs2 = false;
    this.speech.error = true;
    var formData = new FormData();
    formData.append("input1", value.input1);
    formData.append("input2", value.input2);
    formData.append("input3", value.input3);
    this.apiService.postModel2(formData)
      .subscribe((data: any) => {
        this.responseApi = data.result;
        this.audio.src = '../../assets/Respuesta.mp3';
        this.audio.load();
        this.audio.play();
      });
  }

  onSubmit3(value: any): void {
    this.speech.showInputs3 = false;
    this.speech.error = true;
    var formData = new FormData();
    formData.append("input1", value.input1);
    formData.append("input2", value.input2);
    this.apiService.postModel3(formData)
      .subscribe((data: any) => {
        this.responseApi = data.result;
        this.audio.src = '../../assets/Respuesta.mp3';
        this.audio.load();
        this.audio.play();
      });
  }

  onSubmit4(value: any): void {
    this.speech.showInputs4 = false;
    this.speech.error = true;
    var formData = new FormData();
    formData.append("input1", value.input1);
    formData.append("input2", value.input2);
    this.apiService.postModel4(formData)
      .subscribe((data: any) => {
        this.responseApi = data.result;
        this.audio.src = '../../assets/Respuesta.mp3';
        this.audio.load();
        this.audio.play();
      });
  }

  onSubmit5(value: any): void {
    this.speech.showInputs5 = false;
    this.speech.error = true;
    var formData = new FormData();
    formData.append("input1", value.input1);
    formData.append("input2", value.input2);
    this.apiService.postModel5(formData)
      .subscribe((data: any) => {
        this.responseApi = data.result;
        this.audio.src = '../../assets/Respuesta.mp3';
        this.audio.load();
        this.audio.play();
      });
  }

  onSubmit6(value: any): void {
    this.speech.showInputs6 = false;
    this.speech.error = true;
    var formData = new FormData();
    formData.append("input1", value.input1);
    this.apiService.postModel6(formData)
      .subscribe((data: any) => {
        this.responseApi = data.result;
        this.audio.src = '../../assets/Respuesta.mp3';
        this.audio.load();
        this.audio.play();
      });
  }

}
