import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,Observable, throwError } from 'rxjs';
import { Registration } from '../Model/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationSService {
  private apiURL = "http://localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private httpClient: HttpClient) { }

  getById(id: number) {  
    return this.httpClient.get<Registration>(this.apiURL + "/get/" + id);  

  } 

  create(post:Registration) :Observable<any> {
     console.log(post.stu_name);
    return this.httpClient.post(this.apiURL + '/save', post, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
    
  } 

  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL + '/getAll', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
      
    )
  }

  update( post:Registration): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/update' , JSON.stringify(post), this.httpOptions).pipe( 
      catchError(this.errorHandler)
    )
    
  }
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/delete/' + id, this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }
  // delete( post: Registration){
  //   return this.httpClient.delete(this.apiURL + '/delete', post, this.httpOptions ).pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
  


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
