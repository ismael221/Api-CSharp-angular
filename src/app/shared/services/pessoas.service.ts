import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEstado } from '../models/IEstado';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  readonly ApiUrl: string = 'https://localhost:7018/api'
  constructor(private http: HttpClient) { }

  getPessoas(){
    return this.http
      .get<IEstado[]>(
        `${this.ApiUrl}/Estado`
      )
      catchError(this.handleError)
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status},` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage)
    return throwError(errorMessage);
  }
}
