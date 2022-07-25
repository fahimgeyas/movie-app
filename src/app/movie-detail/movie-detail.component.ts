import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

interface detail{
  id:number,
  movieName:string,
  movieDescription:string,
  runtime:number,
  directors:string,
  posterlink:string,
  rating:number
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movieName=""

  detailsUrl=""

  details: detail[]=[]

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.detailsUrl="http://localhost:8080/movie-details/"+this.movieName+"/"
    this.http.get<detail[]>(this.detailsUrl,{responseType:"json"}).subscribe((res) =>{
      this.details=res;
    })
  }

}
