import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostDetails(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  deletePost(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  updatePost(data){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + data.id , data);
  }
}
