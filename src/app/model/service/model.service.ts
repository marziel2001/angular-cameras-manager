import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Models} from "../model/models";
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) {

  }

  getBrandsModels(brandId: string): Observable<Models> {
    return this.http.get<Models>('/api/brands/'+brandId+'/models');
  }

  deleteModel(modelId: string): Observable<any> {
    return this.http.delete('/api/models/' + modelId);

  }
}
