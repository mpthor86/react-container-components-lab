import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
//const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {reviews: [], searchTerm: ""}

    handleChange = (e) =>{
        this.setState({searchTerm: e.target.value})
    }

    fetchMovies =(e, input) =>{
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${input}&api-key=CAjAAtXWqLr21pKiaWuoOvTZST6LAFyS`)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json['results']}))
        
    }
    
    render() {
        return(
            <div className="searchable-movie-reviews">
                Search for Reviews by Movie:
                <form onSubmit={(e) => this.fetchMovies(e, this.state.searchTerm)}><input type='text' 
                value={this.state.searchTerm} 
                onChange={this.handleChange}/></form>
                <div>        
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}