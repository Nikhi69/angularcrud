import { Movie } from './../movie';
import { MovieService } from './../service/data/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {
  id!: number;
  movie!: Movie;

  constructor(private movieService:MovieService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
    this.id =this.route.snapshot.params['id'];
    this.movie =new Movie(55,'','656565','yes',new Date(),'superhero','yes');
    this.movieService.retrieveMovie(this.id)
    .subscribe(
      data => this.movie=data
    )
  }

  saveMovie(){
    this.movieService.updateMovie(this.id,this.movie)
    .subscribe(
      data=>{
        this.router.navigate(['adminlist'])
      }
    )
  }
}
