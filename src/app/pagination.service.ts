
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  constructor(
    private http: HttpClient,
  ) { }

  getSampleData(page): Observable<any> {
    return this.http.get<any>('https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=600');
  }

}
