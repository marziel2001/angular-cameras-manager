import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brands} from "../model/brands";
import {BrandForm} from "../model/brand-form";
import {BrandDetails} from "../model/brand-details";

@Injectable()
export class BrandService {

  constructor(private http: HttpClient) {

  }

  getBrands(): Observable<Brands> {
    return this.http.get<Brands>('/api/brands');
  }

  getBrand(uuid: string): Observable<BrandDetails> {
    return this.http.get<BrandDetails>('/api/brands/' + uuid);
  }

  deleteBrand(uuid: string): Observable<any> {
    return this.http.delete('/api/brands/' + uuid);
  }

  putBrand(uuid: string, request: BrandForm): Observable<any> {
    return this.http.put('/api/brands/' + uuid, request);
  }
}
