import CardHtml from './Component/CardHtml.jsx';
import data from './data.json';


// function Card() {
//   const CardData_1 = {
//     title: "Title....1",
//     description: "This is a simple....1 card design using HTML and CSS. You can use this card for your website or app.",
//     image: "images/download (1).jpg",
//   };
//   const CardData_2 = {
//     title: "Title....2",
//     description: "This is a simple....2 card design using HTML and CSS. You can use this card for your website or app.",
//     image: "images/download.jpg",
//   };
  
//   const CardData_3 = {
//     title: "Title....3",
//     description: "This is a simple....3 card design using HTML and CSS. You can use this card for your website or app.",
//     image: "images/images (1).jpg",
//   };
//   const CardData_4 = {
//     title: "Title....4",
//     description: "This is a simple....4 card design using HTML and CSS. You can use this card for your website or app.",
//     image: "images/images.jpg",
//   };


//   return (
//     <div className='allCards'>
//       <CardHtml {...CardData_1} />
//       <CardHtml {...CardData_2} />
//       <CardHtml {...CardData_3} />
//       <CardHtml {...CardData_4} />
//     </div>
//   );
// }

// ============================================

// function Card() {
//   console.log(data[0].title);
//   const CardData_1 = {
//     title: data[0].title,
//     description: data[0].description,
//     image: data[0].image,
//   };
//   const CardData_2 = {
//     title: data[1].title,
//     description: data[1].description,
//     image: data[1].image,
//   };
  
//   const CardData_3 = {
//     title: data[2].title,
//     description: data[2].description,
//     image: data[2].image,
//   };
//   const CardData_4 = {
//     title: data[3].title,
//     description: data[3].description,
//     image: data[3].image,
//   };


//   return (
//     <div className='allCards'>
//       <CardHtml {...CardData_1} />
//       <CardHtml {...CardData_2} />
//       <CardHtml {...CardData_3} />
//       <CardHtml {...CardData_4} />
//     </div>
//   );
// }

// ==========================================

// function Card() {
//   console.log(data[0].title);
  
//   return (
//     <div className='allCards'>
//       <CardHtml title={data[0].title} description={data[0].description} image={data[0].image} />
//       <CardHtml title={data[1].title} description={data[1].description} image={data[1].image} />
//       <CardHtml title={data[2].title} description={data[2].description} image={data[2].image} />
//       <CardHtml title={data[3].title} description={data[3].description} image={data[3].image} />
//     </div>
//   );
// }

// ===========================================


function Card() {
  // console.log(data[0].title);
  let items = [];
  for(let i = 0; i<data.length; i++){
    items.push(<CardHtml title={data[i].title} description={data[i].description} image={data[i].image} />);
  }
  return (
    <div className='allCards'>
      {items}
    </div>
  );
}


export default Card;
