import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const ProfilePage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const url = 'http://13.124.245.82:8080/auth/login';
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => console.log(result));
    }
  });
  return (
    <>
      <Container></Container>
    </>
  );
};

const Container = styled.div``;
