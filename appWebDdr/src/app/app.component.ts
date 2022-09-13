import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  personas = new Array<any>();

  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

  constructor(public http: HttpClient){}

  ngOnInit(): void {
    this.title='nuevo';
    console.log("antes");
    this.http.get<any>('http://localhost:8080/personas/recuperarTodos').subscribe(response => {
           this.personas=response.data;//
           console.log("hola");
        })
  }
  title = 'appWebDdr';
}
