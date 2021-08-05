import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeApplicationModel } from "src/app/common/model/employeeApplication.model";
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class HomeService  {
    constructor(public http: HttpClient) {
    }
    private baseURL = "http://localhost:8080/api/v3/employeeApplication";


    getListEmployeeApplication(): Observable<EmployeeApplicationModel[]>{
        return this.http.get<EmployeeApplicationModel[]>(`${this.baseURL}`);
      }
      createEmployeeApplication(employeeApplication: EmployeeApplicationModel): Observable<Object>{
        return this.http.post(`${this.baseURL}`, employeeApplication);
      }
  
}
