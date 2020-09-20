import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homemain',
  templateUrl: './homemain.component.html',
  styleUrls: ['./homemain.component.css']
})
export class HomemainComponent implements OnInit {

  public movies: any [] = [];

  constructor( private movieService: MoviesService) {

  }

  ngOnInit() {
    this.loadMovies();
  }

  /**
   * get list of movies
   */
  loadMovies() {
    this.movieService.getMoviesList().subscribe( res => {
      this.movies = res.results;
    }, error => {
      console.log(error);

    });

  }
}
