import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 // Base url
 baseurl = 'http://localhost:8080/users';
   
  constructor(private http: HttpClient) { }
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
  }
  getUser(): Observable<User[]>{
    const endpoint = 'fetchUser';
    return this.http.get<User[]>(`${this.baseurl}/${endpoint}`).pipe(
      retry(1),
      catchError(this.errorHandl)
    )
    
  
  
  }
// POST
createUser(data:User): Observable<User> {
  
  return this.http.post<User>(this.baseurl + '/createUsers/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
} 
// DELETE
DeleteUser(data:User): Observable<User> {
  return this.http.post<User>(this.baseurl + '/deleteUsers/', {courseId:data} , this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
} 
//UPDATE
updateUser(data:User): Observable<User> {
  return this.http.post<User>(this.baseurl + '/updateUsers/', JSON.stringify(data), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}
  // Error handling
errorHandl(error: HttpErrorResponse) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

  
}