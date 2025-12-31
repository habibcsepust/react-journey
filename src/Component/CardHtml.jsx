import '../style.css'
function CardHtml(props) {
  // Console log props.title
  console.log("props: " + props.title);

  // destructuring
  const {image,title,description} = props;
  
  return (
    // <div className="card">
    //   <img src={props.image} alt="Card Image" className="card-img" />
    //   <div className="card-content">
    //     <h2 className="card-title">{props.title}</h2>
    //     <p className="card-description">
    //       {props.description}
    //     </p>
    //     <button className="card-btn">Learn More</button>
    //   </div>
    // </div>

    <div className="card">
      <img src={image} alt="Card Image" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">
          {description}
        </p>
        <button className="card-btn">Learn More</button>
      </div>
    </div>
  );
}


export default CardHtml;