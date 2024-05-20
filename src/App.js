// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";
import axios from "axios";
import styled from "styled-components";

// Styled-components for App
const AppContainer = styled.div`
  text-align: center;
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContainer>
      <Navbar onGetUsers={fetchUsers} />
      {loading ? (
        <Loader />
      ) : (
        <UserGrid>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </UserGrid>
      )}
    </AppContainer>
  );
};

export default App;
