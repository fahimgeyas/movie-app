import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

interface home{
  id: number,
  movieName: string,
  rating: number;
  posterLink: string,
  isBollywood: string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('draggable')
  private draggableElement!: ElementRef;
  display=false
  movieName=""

  constructor(private http:HttpClient){}

  url = ["http://localhost:8080/weekly-top-movies","http://localhost:8080/weekly-top-bollywood-movies"]


  top: home[]=[]
  bollywood: home[]=[]
  


  weeklyTop = [
    {
      title: 'Captain Marvel',
      img: '../../assets/captainMarvel.jpg',
      rating: '7.1'
    },
    {
      title: 'Bohemian Rhapsody',
      img: '../../assets/bohemianRhapsody.jpg',
      rating: '8.1'
    },
    {
      title: 'Green Book',
      img: '../../assets/greenBook.jpg',
      rating: '8.3'
    },
    {
      title: 'A Star is Born',
      img: '../../assets/aStarIsBorn.jpg',
      rating: '7.8'
    },

  ];

  weeklyTopBollywood = [
    {
      title: 'Kalank',
      img: '../../assets/kalank.jpg',
      rating: '7.1'
    },
    {
      title: 'Bohemian Rhapsody',
      img: '../../assets/bohemianRhapsody.jpg',
      rating: '7.1'
    },
    {
      title: 'RAW',
      img: '../../assets/RAW.jpg',
      rating: '7.1'
    },
    {
      title: 'Total Dhamaal',
      img: '../../assets/totalDhamaal.jpg',
      rating: '7.1'
    },

  ];

  trailers = [
    {
      title: 'Marvel Studios\' Avengers: Endgame - Official Trailer',
      img: '../../assets/endgame.jpg',
      rating: '7.1'
    },
    {
      title: 'Disney\'s Aladdin - Official Trailer: In Theaters May 24!',
      img: '../../assets/aladdin.jpeg',
      rating: '7.1'
    },
    {
      title: 'Game of Thrones | Season 8 | Official Trailer (HBO)',
      img: '../../assets/GoT.jpg',
      rating: '7.1'
    },
    {
      title: 'SPIDER-MAN: NO WAY HOME - Official Trailer (HD)',
      img: '../../assets/spider-man.jpg',
      rating: '7.1'
    },

  ];

  ngOnInit(): void {

    this.http.get<home[]>(this.url[0],{responseType:"json"}).subscribe((res) =>{
      this.top=res;
    })
    this.http.get<home[]>(this.url[1],{responseType:"json"}).subscribe((res) =>{
      this.bollywood=res;
    })
  }

  hide(name:string){
    this.draggableElement.nativeElement.remove();
    this.display=true
    this.movieName=name
  }
  

}
