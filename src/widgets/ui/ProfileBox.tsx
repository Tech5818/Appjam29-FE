import GuardianProfile from '@shared/ui/GuardianProfile';
import WardProfile from '@shared/ui/WardProfile';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface User {
  email: string;
  name: string;
}

const ProfileBox = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const [userData, setUserData] = useState<User>({
    email: '',
    name: '',
  });

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
        .then((result) => setUserData(result.data));
    }
  });

  return (
    <>
      <Container>
        <GuardianProfile
          name={userData.name}
          email={userData.email}
        />
        <WardProfile name="박병춘" age="82" gender="남성" />
      </Container>
    </>
  );
};

export default ProfileBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
