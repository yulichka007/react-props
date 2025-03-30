import React, { useState } from "react";
import styled from "styled-components";

// Стилізовані компоненти
const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  max-width: 300px;
  margin: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const FollowButton = styled.button`
  background-color: ${(props) => (props.isFollowed ? "gray" : "blue")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ProfileCard = () => {
  // Стан для кнопки "Follow"
  const [isFollowed, setIsFollowed] = useState(false);

  // Обробник події натискання на кнопку
  const handleFollowClick = () => {
    setIsFollowed(!isFollowed); // Перемикає стан підписки
  };

  return (
    <CardContainer>
      <ProfileImage src="/юля.jpg" alt="Profile" />
      <h2>Yulia Motrich</h2>
      <p style={{ color: "gray" }}>Student</p>

      {/* Кнопка, яка змінюється в залежності від стану */}
      <FollowButton onClick={handleFollowClick} isFollowed={isFollowed}>
        {isFollowed ? "Following" : "Follow"} {/* Текст кнопки змінюється */}
      </FollowButton>
    </CardContainer>
  );
};

export default ProfileCard;
