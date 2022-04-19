import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  postModel1(data: any) {
    return this.http.post(`${this.apiUrl}/model1_autos`, data);
  }

  postModel2(data: any) {
    return this.http.post(`${this.apiUrl}/model2_tiempoWeb`, data);
  }

  postModel3(data: any) {
    return this.http.post(`${this.apiUrl}/model3_grease`, data);
  }

  postModel4(data: any) {
    return this.http.post(`${this.apiUrl}/model4_stock`, data);
  }

  postModel5(data: any) {
    return this.http.post(`${this.apiUrl}/model5_VideoGame`, data);
  }

  postModel6(data: any) {
    return this.http.post(`${this.apiUrl}/model6_insuranceBMI`, data);
  }

  postModel7(data: any) {
    return this.http.post(`${this.apiUrl}/model7_MinTemp`, data);
  }

  postModel8(data: any) {
    return this.http.post(`${this.apiUrl}/model8_Avocado`, data);
  }

  postModel9(data: any) {
    return this.http.post(`${this.apiUrl}/model9_energy`, data);
  }

  postModel10(data: any) {
    return this.http.post(`${this.apiUrl}/model10_blackFriday`, data);
  }

}
