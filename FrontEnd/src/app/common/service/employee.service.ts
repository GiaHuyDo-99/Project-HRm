import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from "../model/employee.model";
import { BaseApiService } from 'src/app/shared/services/base.service';
@Injectable({
    providedIn: 'root',
})
export class EmployeeService  {
    baseURL = "http://localhost:8080/api/v1/employees";

    constructor(private httpClient: HttpClient) { }
    getEmployeesList(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.baseURL}`);
      }
    
      createEmployee(employee: Employee): Observable<Object>{
        return this.httpClient.post(`${this.baseURL}`, employee);
      }
    

    
      deleteEmployee(id: number): Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);
      }
}
