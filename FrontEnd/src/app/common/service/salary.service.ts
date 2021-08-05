import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SalaryModel } from "src/app/common/model/salary.model";

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private baseURL = "http://localhost:8080/api/v2/salary";

  constructor(private httpClient: HttpClient) { }
  
  getSalaryList(): Observable<SalaryModel[]>{
    return this.httpClient.get<SalaryModel[]>(`${this.baseURL}`);
  }

  createSalary(salary: SalaryModel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, salary);
  }



  deleteSalaryEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
