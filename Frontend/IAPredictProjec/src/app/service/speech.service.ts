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

  typeAudio = 0;

  responseApi = {
    input1: '',
    input2: ''
  };

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
          this.typeAudio = 1;
          this.stop(true);
          setTimeout(() => {
            this.error = true;
            this.typeAudio = 0;
          }, 10000);
          // voice.speak('Buenos días');
        } else if (this.text.trim().includes('predicción modelo1') || this.text.trim().includes('Predicción modelo1')
          || this.text.trim().includes('Predicción modelo 1') || this.text.trim().includes('predicción modelo 1')) {
          console.log('holaa')
          var formData = new FormData();
          formData.append("input1", "TestInput1");
          formData.append("input2", "TestInput2");
          this.apiService.postModel1(formData)
            .subscribe((data: any) => {
              this.responseApi.input1 = data.input1;
              this.responseApi.input2 = data.input2;
            });
          this.audio.src = '../../assets/Respuesta.mp3';
          this.audio.load();
          this.audio.play();
          this.typeAudio = 2;
          this.stop(false);
          setTimeout(() => {
            this.error = true;
          }, 5000);
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