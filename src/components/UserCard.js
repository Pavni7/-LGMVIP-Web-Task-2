// UserCard.js
import React from 'react';
import styled from 'styled-components';

// Styled-components for UserCard
const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1em;
  text-align: left;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

const UserInfo = styled.div`
  margin-top: 1em;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.first_name} />
      <UserInfo>
        <h2>{user.first_name} {user.last_name}</h2>
        <p>{user.email}</p>
      </UserInfo>
    </Card>
  );
};

export default UserCard;
