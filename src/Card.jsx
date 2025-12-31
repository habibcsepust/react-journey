import CardHtml from './Component/CardHtml.jsx';

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
