// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
    
    return (
        <div className='review-list'>
            {props.reviews.map(rev => 
            <li className='review'>
                <strong>Movie: {rev.display_title}</strong><br></br>
                <u>Critic:</u> {rev.byline}<br></br>
                <a href={rev.link.url}>Link To Review</a><br></br>
                <img src={rev.multimedia.src} alt="" />
                </li>)}
        </div>
    )
}

export default MovieReviews