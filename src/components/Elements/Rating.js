
const Rating = ({ rating }) => {
  
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }



  return (
    <>
      {ratingArray.map((isFilled, index) => (
        <i
          key={index}
          className={`text-lg bi ${isFilled ? "bi-star-fill" : "bi-star"} text-yellow-500 mr-1`}
        ></i>
      ))}
    </>
  );
}

export default Rating;
