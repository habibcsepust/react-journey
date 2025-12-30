import './style.css'
function CardHtml(props) {
  // Console log props.title
  console.log("props: " + props.title);
  
  return (
    <div className="card">
      <img src={props.image} alt="Card Image" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">
          {props.description}
        </p>
        <button className="card-btn">Learn More</button>
      </div>
    </div>
  );
}

function Card() {
  const CardData_1 = {
    title: "Title....1",
    description: "This is a simple....1 card design using HTML and CSS. You can use this card for your website or app.",
    image: "images/download (1).jpg",
  };
  const CardData_2 = {
    title: "Title....2",
    description: "This is a simple....2 card design using HTML and CSS. You can use this card for your website or app.",
    image: "images/download.jpg",
  };

  return (
    <div>
      <CardHtml {...CardData_1} />
      <CardHtml {...CardData_2} />
    </div>
  );
}

export default Card;
