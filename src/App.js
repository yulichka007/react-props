import React from "react";
import CardList from "./components/CardList/CardList";

const cardsData = [
  {
    id: 1,
    title: "Лісова прогулянка",
    description: "Затишний лісовий пейзаж для відпочинку на природі.",
    image: "https://kyivlis.gov.ua/wp-content/uploads/2017/11/lesok-1024x640.jpg",
  },
  {
    id: 2,
    title: "Місто вночі",
    description: "Нічне місто з яскравими вогнями та неймовірною атмосферою.",
    image: "https://img.wallpapic.com.ua/i2433-527-041/medium/megapolis-misto-miskij-pejzazh-nichni-mista-shpalery.jpg",
  },
  {
    id: 3,
    title: "Гірський пейзаж",
    description: "Краєвид величних гір під яскравим сонячним небом.",
    image: "https://img.tsn.ua/cached/292/tsn-8c5f6b23d1211bb14030cc3abd4583f7/thumbs/x/bf/74/1d750cdae19c5075e0123ec455ee74bf.jpeg",
  },
  {
    id: 4,
    title: "Морський берег",
    description: "Спокійний пляж із чистою водою та м'яким піском.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUKQk6xriO2bV7KEOPpJ-UX3iu8L8s7JeJM20KvJZXndFUtEdwMWAVQcIEhY0x09hhkI&usqp=CAU",
  },
  {
    id: 5,
    title: "Захід сонця",
    description: "Романтичний захід сонця, що фарбує небо у дивовижні кольори.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/%D0%97%D0%B0%D1%85%D1%96%D0%B4_%D1%81%D0%BE%D0%BD%D1%86%D1%8F_%D0%B2_%D1%81%D0%B5%D0%BB%D1%96_%D0%A1%D1%82%D0%B5%D0%BF%D0%BE%D0%BA.JPG",
  },
];

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Галерея карток</h1>
      <CardList cards={cardsData} />
    </div>
  );
};

export default App;
