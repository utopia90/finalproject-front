import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpertsService {

  constructor(private http: HttpClient) { }

  getAllExperts(){
    return this.http.get('https://serene-wave-12377.herokuapp.com/api/experts');
  }
  register(expert){
    return this.http.post('https://serene-wave-12377.herokuapp.com/api/experts', expert);
  }

  updateExpert(expert){
  
    return this.http.put('https://serene-wave-12377.herokuapp.com/api/experts', expert);
  }
}
