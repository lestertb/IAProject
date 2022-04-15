import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../../service/speech.service';

@Component({
  selector: 'app-interact-ia',
  templateUrl: './interact-ia.component.html',
  styleUrls: ['./interact-ia.component.scss']
})
export class InteractIAComponent implements OnInit {

  public IAresponse1: string = 'Bienvenido, soy LMD. Una inteligencia artificial. Dime que predicción quieres que realice, después de presionar start.';

  constructor(public speech: SpeechService) {
    this.speech.init();
  }

  ngOnInit(): void {
  }

  startService(): void {
    this.speech.text = '';
    this.speech.start();
    this.speech.error = false;
  }

}
