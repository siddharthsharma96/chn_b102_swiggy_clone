const Card = ({ res, show }) => {
  return (
    <div className="card">
      <img alt="res" src={`/images/${res.cloudinaryImageId}.avif`}></img>
      <div className="card__details">
        <h3 className="card__name">{res.name}</h3>
        {show && (
          <>
            <div className="card__cuisines">{res.cuisines.join(", ")}</div>
            <div className="card__price">{res.costForTwo}</div>
            <div className="card__info">
              <span className="card__rating">{res.avgRating} Rating</span>
              <span className="card__time">3.2 mins</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
