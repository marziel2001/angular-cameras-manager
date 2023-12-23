import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Models} from "../model/models";
import {BrandDetails} from "../../brand/model/brand-details";
import {ModelDetails} from "../model/model-details";
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

  getModel(uuid: string): Observable<ModelDetails> {
    return this.http.get<ModelDetails>('/api/models/' + uuid);
  }

}
