import React from 'react'
import commentorIcon from '../../../assets/avatar.png'

const ReviewsCard = ({productReviews}) => {
    
    const reviews = productReviews || []

  return (
    <div className='my-6 bg-white p-8'>
        <div>
            {
                reviews.length > 0 ? (<div>
                    <h3 className='text-lg font-medium'>All comments... </h3>
                    <div>
                        {
                            reviews.map((review, index) => (
                                <div key={index} className='mt-4'>
                                    <div>
                                        <img src={commentorIcon} alt="" className='size-14' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>)  : <p>No reviews yet!</p>
            }
        </div>
    </div>
  )
}

export default ReviewsCard