'use client'
import { Rating } from "react-simple-star-rating";
const ShowCommentRating = ({rating}) => {
  return (
    <div><Rating  readonly={true} initialValue={rating} fillColor="black"/></div>
  )
}

export default ShowCommentRating