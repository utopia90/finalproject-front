import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  getAllTags(){
    return this.http.get('https://serene-wave-12377.herokuapp.com/api/tags');
  }
}
