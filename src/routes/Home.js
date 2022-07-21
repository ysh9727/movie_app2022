import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state  = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const axiosUrl = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating';
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(axiosUrl);
    // this.setState({ movies: movies });
    // this.setState({ state: json });
    // es6에서는 키와 변수의 이름이 같아면 생략가능
    this.setState({ movies, isLoading: false });
    // const movies = await axios.get(axiosUrl);
  }
  componentDidMount(){
   this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">{
        isLoading ?(
          <div className="loader">
          <span className="loader__text">'Loading...'</span>
        </div>
        ) : 
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ); 
          })}
        </div>
      }
      </section>
    );
  }
}

export default Home;
