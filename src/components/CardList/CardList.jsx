import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";


const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1250px;
  margin: 0 auto;
`;

const CardList = ({ cards }) => {
  return (
    <CardListWrapper>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </CardListWrapper>
  );
};

export default CardList;
