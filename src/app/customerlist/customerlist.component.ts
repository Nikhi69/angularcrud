import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../service/data/movie.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  movies!: Movie[];
  constructor(private movieService:MovieService, private router:Router) { }
  refreshTodos(){
    this.movieService.getCustMovies().subscribe(data=> {
      this.movies=data;
    })
    }
      ngOnInit() {
        this.refreshTodos();
      }
      username = sessionStorage.getItem('authenticaterUser');
      addToFavorites(id : number){
    
        console.log(id);
    
        let movieId='';
        movieId+=id;
    
        this.movieService.addToFavorites(movieId, this.username!).subscribe(
    
          data => {console.log(data)
            this.router.navigate([`/favorites/${this.username}`])
          }
    
        );
    
      }

      getFavt(){
        this.movieService.getFavoriteByUsername(this.username!).subscribe(
          data =>{
            console.log(data)
            this.router.navigate(['/favorites'])
          }
        )
      }
}
