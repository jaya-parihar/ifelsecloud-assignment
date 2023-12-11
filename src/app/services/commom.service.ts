import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommomService {
  constructor(private http: HttpClient) {}

  url: string = '../../assets/graphData.json';

  getGraphData(): Observable<any> {
    return this.http.get(this.url, { responseType: 'json' }).pipe(
      map((res) => {
        return <any>res;
      }),
      catchError((e) => {
        return e;
      })
    );
  }

  getFinancialData(): Observable<any> {
    return this.http
      .get('https://1.api.fy23ey06.careers.ifelsecloud.com/', {
        responseType: 'json',
      })
      .pipe(
        map((res) => {
          return <any>res;
        }),
        catchError((e) => {
          return e;
        })
      );
  }
}
