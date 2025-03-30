import React from "react";
import styled from "styled-components";


const CardWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  text-align: center;
  padding: 16px;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin: 12px 0;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const CardButton = styled.button`
  margin-top: auto;
  padding: 10px 16px;
  background: royalblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background: darkblue;
  }
`;

const Card = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <CardWrapper>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={handleClick}>Дізнатися більше</CardButton>
    </CardWrapper>
  );
};

export default Card;
