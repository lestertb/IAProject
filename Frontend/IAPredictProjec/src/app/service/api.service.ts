import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  postModel1(data: any) {
    return this.http.post(`${this.apiUrl}/model1`, data);
  }

}
