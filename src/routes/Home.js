import React from 'react';
import styled from 'styled-components';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import Movie from '../components/Movie';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.header`
  width: 100%;
  height: 45vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 30px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo Movie</Title>
        <Subtitle>I love graphql</Subtitle>
      </Header>
      {!loading && data && data.movies ? (
        data.movies.map((movie) => <Movie key={movie.id} id={movie.id} />)
      ) : (
        <Loading>Loading ...</Loading>
      )}
    </Container>
  );
};
export default Home;
