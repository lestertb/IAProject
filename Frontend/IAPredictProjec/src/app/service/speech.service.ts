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
            this.error = true;
            //this.typeAudio = -1;
            this.showInputs1 = true;
          }, 15000);
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