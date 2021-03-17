import { BasicauthService } from './../service/basicauth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../service/data/movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router, private login:BasicauthService) { }
favoriteList:Movie[]=[];
  ngOnInit(): void {
    this.movieService.getFavoriteByUsername(sessionStorage.getItem('authenticatorUser')!).subscribe(
      data=>{
        this.favoriteList=data
      }
    );
  }

  refreshPage(){
    this.movieService.getFavoriteByUsername(sessionStorage.getItem('authenticatorUser')!).subscribe(
      data=>{
        this.favoriteList=data
      }
    );
  }
  deleteFavorites(id:number){
    console.log(id);
    this.movieService.deleteFromFavorites(id,sessionStorage.getItem('authenticatorUser')!).subscribe(
      data=>{
        this.refreshPage()
      }
    )
  }

}
