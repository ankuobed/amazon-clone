import React from 'react'
import { Star, StarHalf, StarBorder } from '@material-ui/icons';

import './Rating.css';

const Rating = ({ rating, reviews }) => {
    return (
        <div className='rating'>
            {
                rating >= 1? <Star /> : rating >= 0.5? <StarHalf /> : <StarBorder />
            }
            {
                rating >= 2? <Star /> : rating >= 1.5? <StarHalf /> : <StarBorder />
            }
            {
                rating >= 3? <Star /> : rating >= 2.5? <StarHalf /> : <StarBorder />
            }
            {
                rating >= 4? <Star /> : rating >= 3.5? <StarHalf /> : <StarBorder />
            }
            {
                rating >= 5? <Star /> : rating >= 4.5? <StarHalf /> : <StarBorder />
            }
            
            <span>{`${reviews} reviews`}</span>
        </div>
    )
}

export default Rating
