import "./testimonial.css";

function Testimonial({ imageUrl, name, location, occupation, work, text }) {
  const altImage = `image-${name.split("s").join("-").toLowerCase()}`;
  return (
    <div className="testimonial-container">
      <img className="testimonial-image"
        src={require("../assets/images/" + imageUrl + ".png")}
        alt={altImage}
      />
      <div className="testimonial-content">
        <h3 className="testimonial-location">
          <strong>{name}</strong> in {location}
        </h3>
        <p className="testimonial-occupation">
          {occupation} at <strong>{work}</strong>
        </p>
        <p className="testimonial-text">{text}</p>
      </div>
    </div>
  );
}

export default Testimonial;
