import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service'

// var voice = require('responsiveVoice');

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  error = true;

  audio = new Audio();

  typeAudio = -1;

  showInputs1 = false;

  showInputs2 = false;

  showInputs3 = false;

  showInputs4 = false;

  showInputs5 = false;

  showInputs6 = false;

  showInputs7 = false;

  showInputs8 = false;

  showInputs9 = false;

  showInputs10 = false;

  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords: any;

  constructor(public apiService: ApiService) { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'es-CR';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start() {
    this.typeAudio = -1;
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        this.wordConcat()
        try {
          this.recognition.start();
        }
        catch {
          this.recognition.stop();
        }
        if (this.text.trim().includes('buenas lmd') || this.text.trim().includes('Buenas lmd')) {
          this.audio.src = '../../assets/Bienvenida.mp3';
          this.audio.load();
          this.audio.play();
          this.typeAudio = 0;
          this.stop(true);
          setTimeout(() => {
            this.error = true;
            //this.typeAudio = -1;
          }, 12000);
        } else if (this.text.trim().includes('Predicción precio autos') || this.text.trim().includes('predicción precio autos')) {
          this.audio.src = '../../assets/rmodel1.mp3';
          this.audio.load();
          this.audio.play();
          this.typeAudio = 1;
          this.stop(true);
          setTimeout(() => {
            //this.error = true;
            //this.typeAudio = -1;
            this.showInputs1 = true;
          }, 15000);
        } else if (this.text.trim().includes('Predicción tiempo en una web') || this.text.trim().includes('predicción tiempo en una web')) {
          this.audio.src = '../../assets/rmodel2.mp3';
          this.audio.load();
          this.audio.play();
          this.typeAudio = 2;
          this.stop(true);
          setTimeout(() => {
            //this.error = true;
            //this.typeAudio = -1;
            this.showInputs2 = true;
          }, 13000);
        } else if (this.text.trim().includes('Predicción del porcentaje de grasa') || this.text.trim().includes('predicción del porcentaje de grasa')
          || this.text.trim().includes('Predicción de porcentaje de grasa') || this.text.trim().includes('predicción de porcentaje de grasa')) {
          this.audio.src = '../../assets/rmodel3.mp3';
          this.audio.load();
          this.audio.play();
          this.typeAudio = 3;
          this.stop(true);
          setTimeout(() => {
            //this.error = true;
            //this.typeAudio = -1;
            this.showInputs3 = true;
          }, 13000);
        } else if (this.text.trim().includes('Predicción del precio de las acciones') || this.text.trim().includes('predicción del precio de las acciones')) {
          this.audio.src = '../../assets/rmodel4.mp3';
          this.audio.load();
          this.audio.play();
          this.typeAudio = 4;
          this.stop(true);
          setTimeout(() => {
            //this.error = true;
            //this.typeAudio = -1;
            this.showInputs4 = true;
          }, 13000);
        } else if (this.text.trim().includes('Predicción de la popularidad de un juego') || this.text.trim().includes('predicción de la popularidad de un juego')) {
          this.audio.src = '../../assets/rmodel5.mp3';
          this.audio.load();
          this.audio.play();
          this.typeAudio = 5;
          this.stop(true);
          setTimeout(() => {
            //this.error = true;
            //this.typeAudio = -1;
            this.showInputs5 = true;
          }, 13000);
        } else if (this.text.trim().includes('Predicción del precio de un seguro de un cliente') || this.text.trim().includes('predicción del precio de un seguro de un cliente')) {
          this.audio.src = '../../assets/rmodel6.mp3';
          this.audio.load();
          this.audio.play();
          this.typeAudio = 6;
          this.stop(true);
          setTimeout(() => {
            //this.error = true;
            //this.typeAudio = -1;
            this.showInputs6 = true;
          }, 9000);
        }
        else {
          //this.stop(false);
          //this.text = 'ERROR!!!';
          //this.error = true;
        }
      }
    });
  }
  stop(state: any) {
    if (state) {
      this.text = '';
    }
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    if (this.tempWords != undefined) {
      this.text = this.text + ' ' + this.tempWords;
    }
    this.tempWords = ' ';
  }





}