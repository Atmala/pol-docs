import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireService {
  constructor(private http: HttpClient) { }

  public getTestById(id: string): Observable<Test> {
    return this.http
      .get<Test>(environment.testBaseUrl + '/test');
  }
}
