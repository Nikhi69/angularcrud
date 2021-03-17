import { MovieService } from './../service/data/movie.service';
import { Movie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
   movies!: Movie[];


  constructor(private movieService:MovieService, private router:Router) { }
refreshTodos(){
this.movieService.getAdminMovies().subscribe(data=> {
  this.movies=data;
})
}
  ngOnInit() {
    this.refreshTodos();
  }

  updateMovie(id:any){
    console.log(`update ${id}`);
    this.router.navigate(['edit',id])
  }
}
