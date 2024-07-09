type CardProps = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    visited?: boolean,
  }
};

function Card() {
  const { city, country, imageUrl, visited = false } = cityInfo;

  return (
    <>
      <div className="card">
        <img src={ imageUrl } alt={ city } />
        <div>
          <h2>{ city }</h2>
          <h3>{ country }</h3>
          { visited ? <p>I've been there already!</p> : <p className="red">I've never been there.</p>}
        </div>
      </div>
    </>
  );
}

export default Card;
