import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkdaysModel } from "src/app/common/model/workday.model";

@Injectable({
    providedIn: 'root',
})
export class WorkdayService {

    private baseURL = "http://localhost:8080/api/v4/workdays";
    constructor(public http: HttpClient) {}
    getWordayList(): Observable<WorkdaysModel[]>{
        return this.http.get<WorkdaysModel[]>(`${this.baseURL}`);
      }

    createWorkday(workday: WorkdaysModel): Observable<Object>{
        return this.http.post(`${this.baseURL}`, workday);
      }
    deleteWorkday(id: number): Observable<Object>{
        return this.http.delete(`${this.baseURL}/${id}`);
      }
}
